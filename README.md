# API Sample Test

## Getting Started

This project requires a newer version of Node. Don't forget to install the NPM packages afterwards.

You should change the name of the ```.env.example``` file to ```.env```.

Run ```node app.js``` to get things started. Hopefully the project should start without any errors.

## Explanations

The actual task will be explained separately.

This is a very simple project that pulls data from HubSpot's CRM API. It pulls and processes company and contact data from HubSpot but does not insert it into the database.

In HubSpot, contacts can be part of companies. HubSpot calls this relationship an association. That is, a contact has an association with a company. We make a separate call when processing contacts to fetch this association data.

The Domain model is a record signifying a HockeyStack customer. You shouldn't worry about the actual implementation of it. The only important property is the ```hubspot```object in ```integrations```. This is how we know which HubSpot instance to connect to.

The implementation of the server and the ```server.js``` is not important for this project.

Every data source in this project was created for test purposes. If any request takes more than 5 seconds to execute, there is something wrong with the implementation.

# hubspot-hocketstack

## Luis Amancio's notes about API-SAMPLE-TEST-MASTER improving points
I believe that the codebase would benefit in some key enhancements to improve its overall functionaly and maintainability. Some of the primary focus should be on implementing TypeScript for some levels of type safety and catching potential errors during development, also the current architecture would benefit from a proper service layer to separe concerns like data fetching and processing, making the codebase more maintainable. A dependency injection system would also be better to manage external services like HubSpot client and databaase connections.
In perfomance keys, i believe that the focus should be in optimizing the multiple sequential API calls throught batch processing, particularly for contacts and meetings associations, bulk fetching and parallel requests. Implementing a caching layer would also reduce unnecessary API calls to HubSpot, the current queue system could be replaced with RabbitMQ to handle large-scale data processing more efficiently. In terms of database, some operations need optimization through proper indexing and bulk operations implementation.
Other key improvements i would suggest are improving the logging system, instead of console.log using a proper logging system would benefit in terms of monitoring.

- High Priority
    - TypeScript Implementation
    - Service Layer Architecture
    - Batch processing for API calls
- Medium Priority
    - Database optimizations
    - Logging System
- Low Priority
    - RabbitMQ transicion
    - Caching layer