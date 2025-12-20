## About Infosystem
 Simple Nuxt (Vue Server Side rendering framework) ticket system to get events and buy them

## Setup
Make sure to install dependencies:
npm install

## Development Server
Start the development server on `http://localhost:3000`:
# npm
npm run dev -o

## Production
Build the application for production:
# npm
npm run build

## Structure 
 Client side 
   app 
     app / components
	   app.vue
             Events.vue - list
             Event.vue - 1 item
             BuyTicket.vue - Buy button		

    types - Model types			 
	 
	content - exact copy of https://norwaydict.com/ticket/content repository for images
	 
 Server 
   Nuxt Server 
    api / 
	  events - list of all events (any token as parameter)
	            example: http://localhost:3000/api/events?token=a1000
	  event - 1 event if id provided
	            example: http://localhost:3000/api/event?id=a0015
	  create -  test GET api to send POST call 
                example: https://localhost:3000/api/event-create/test
                POST api  
				example: https://localhost:3000/api/event-create
				
				

