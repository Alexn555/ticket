// Server: Event Create
// method: POST
// Request param: Event object

import fs from 'fs';
import { EventType } from '~~/types/event';

export default defineEventHandler(async (event) => {
  let newEvent = await readBody(event);
  let file = './server/data/events.json';

  fs.readFile(file, (err, data) => {
    if (err) {
      throw createError({ statusCode: 402, statusMessage: 'Error reading File' });
    }

    let list = JSON.parse(data.toString());
    let exists = list.some((item: EventType) => item.id === newEvent.id);
    if (exists) {
      throw createError({ 
        statusCode: 407, 
        statusMessage: 'Error writing to file, new Event already exists in database'
      });
    }
    list.push(newEvent);

    try {
      fs.writeFile(file, JSON.stringify(list, null, 2), 'utf-8', (err: any) => {
        if (err) {
          throw createError({ statusCode: 403, statusMessage: 'Error writing to file an Event' });
        }
        return { creation: newEvent, status: 'success' };
      });
    } catch (e) {
      throw createError({ statusCode: 405,  statusMessage: 'Error creating an Event' });
    }
  });
});

