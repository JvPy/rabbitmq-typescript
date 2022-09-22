# rabbitmq with typescript and a simulated worker

This projects holds a sample of an api in nodejs with `express`, `typescript`, `docker` and `rabbitmq` to simulate integration between api and queue
Also there is a `worker` file to simulated a lambdam function consuming the message
# How to run

1. Make sure docker and npm are installed
2. copy .env.example to .env file and add the desired values
3. run `npm i`
4. run `npm run docker:up`
5. run `npm run dev` to run the API
6. run `npm run worker` to run the simulated worker

At this point you should be able to hit the api using `postman`, `insomina` or `curl`

# Endpoints 

#### POST /add
This endpoint will add a message to the queue

It expects an object of type 
```
{
    "content": "content",
}
```

cUrl: `curl --request POST \
  --url http://localhost:3000/add \
  --header 'Content-Type: application/json' \
  --data '{
	"content": "rabbitmq test message"
}'`

#### GET /read
This endpoint will read the first message on the queue

cUrl: `curl --request GET \
  --url http://localhost:3000/read`


