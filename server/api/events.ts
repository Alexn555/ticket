// Server: Event List 
// param: token (string) *
// example: localhost:3000/api/event?id=a0010

import events from '../data/events.json';

export default defineEventHandler((event) => {
  let query = getQuery(event);
  if (query.token !== '') {
    return { data: events };
  }
  throw createError({ 
    statusCode: 401, 
    statusMessage: 'Unauthorized, please provider token to get access' 
  });
});