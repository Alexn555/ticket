// Server: test event create
// Request param: POST body Event object to add to existing database (events.json)
// usage: http://localhost:3000/api/event-create/test?token=a1000
 
export default defineEventHandler(async (event) => {
  let query = getQuery(event);
  if (query.token !== '') {
    let res = await $fetch('/api/event-create', {
      method: 'POST',
      body: {
        id: "aa100",
        image: "https://norwaydict.com/ticket/content/aa100.webp",
        title: "Ines",
        description: "Ines Lisakonsert",
        from: "2026-04-12",
        options: {
          low: 10,
          mid: 45,
          high: 100
        },
        available: 1000,
        sold: 0
      }
    }).catch(err => { return err; });
    return { result: res };
  }
  throw createError({ 
    statusCode: 401, 
    statusMessage: 'Not accessible without token, please provider token to get access' 
  });
}); 