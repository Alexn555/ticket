// Server: Event -> get only 1 item
// Request param: id (string) *
// example: localhost:3000/api/events?token=a10000

import { EventType } from '../../types/event';
import events from '../data/events.json';

export default defineEventHandler((event) => {
  let query = getQuery(event);
  if (query.id !== '') {
    let item = events.filter((evt: EventType) => evt.id === query.id);
    return item && item.length > 0 ? { data: item[0] } : { data: -1 };
  }
  throw createError({ 
    statusCode: 401, 
    statusMessage: 'Not accessible without ID, please provider ID to get access' 
  });
}); 