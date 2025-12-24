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
 Client side  <br />
   app  <br />
     app / components <br />
	   app.vue  <br />
             Events.vue - list <br />
             Event.vue - 1 item  <br />
             BuyTicket.vue - Buy button	<br />	 

    types - Model types		<br />	  
	 
	content - exact copy of https://norwaydict.com/ticket/content repository for images </br>
	 

 Demo production version:  <br />
   https://norwaydict.com/ticket  <br />

 Server 
   Nuxt Server  <br />
    api /  <br />
	  events - list of all events (any token as parameter)  <br />
	            example: http://localhost:3000/api/events?token=a1000 <br />
	  event - 1 event if id provided  <br />
	            example: http://localhost:3000/api/event?id=a0015  <br />
	  create -  test GET api to send POST call  <br />
                example: https://localhost:3000/api/event-create/test  <br />
                POST api   <br />
				example: https://localhost:3000/api/event-create  <br />
				
				

