---
outline: deep
next:
  text: ''
  link: ''
---

# Section 7: Connecting to NATS in a Nodejs World

## Reusable NATS listener
## The Listener Abstract Class
![Class listener](./img/image-47.png)

## Leverage TypeScript for Listener Validation
![solutions](./img/image-48.png)

## Subjects Num
## Custom Event Interface
## Enforcing Listener Subjects
## Enforcing Data
## Custom Publisher

![Defined in Common Module](./img/image-49.png)

## Awaiting Event Publication
## Common Event Definition Summary

![alt text](./img/image-50.png)

  - But because all services using TypeScript, if each service use a different language implementation, they can not use common module
  ![downside](./img/image-51.png)

  - Alternatives with Cross Language Support
  ![alt text](./img/image-52.png)