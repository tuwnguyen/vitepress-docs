---
outline: deep
next:
  text: ''
  link: ''
---

# Section 20: Worker Services

## The Expiration Service
![order:created](./img/image-100.png)
![expiration:complete](./img/image-99.png)

## Expiration Options
  - Don't use setTimeout
![by setTimeout](./img/image-92.png)

  - Don't rely on NATS redelivery mechanism (NATs chỉ tối đa gửi 5 lần event)
  ![don'k ack the event](./img/image-93.png)

  - Using Event Bus service, NATS does not support event bus
  ![event bus](./img/image-94.png)

  - Using Bull.js and Redis
  ![bulljs and redis](./img/image-95.png)

## Initial Setup

## A Touch of Kubernetes Setup
## File Sync Setup
## Listener Creation


## What's Bull All About?
  - Install job processing manager **bulljs**
  [Bull js](https://www.npmjs.com/package/bull)
  
  ![alt text](./img/image-96.png)
  ![alt text](./img/image-97.png)

## Creating a Queue
  - Queue up/Brand new job
  ![alt text](./img/image-98.png)

## Queueing a Job on Event Arrivale

## Testing Job Processing

## Delaying Job Processing

## Defining the Expiration Complete Event

## Publishing an Event on Job Processing

## Handling an Expiration Event

## Emitting the Order Cancelled Event

## Testing the Expiration Complete Listener

## A Touch More Testing

## Listening for Expiration