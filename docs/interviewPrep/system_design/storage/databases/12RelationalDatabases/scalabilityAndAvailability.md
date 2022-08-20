# SQL Databases Scalability and Availability

## Designing highly scalable and highly available SQL databases

### Understand Scalability requirements

- how do you know when you have a good database architecture?
  - no 1 single ideal architecture
  - the best architecture for a particular application depends on the business requirements or the organizational requirements
- a scalable databases should be able to
  - support business and organization applications
  - store as much data as needed
    - understand how much data needs to be stored
  - store data for as long as needed
    - understand the lifecycle of how long we need to keep the data
  - responsive
    - who needs to access the data
    - here we are concerned with low latency
      - for both writing and reading data
  - available and reliable

#### business requirements for database scalability

- goal is to provide data storage services as required by business or organization requirements
- key questions about data that we should be asking
  - **what data are we working with? (known as data modeling)**
    - once identified, first need to get the rough boundaries around the domains that we talk about
      - the domains are like a subject area and it's defined by a certain set of coherent business processes and related pieces of data
        - e.g.: domains around sales, domains around inventory. domains around logistics, etc.
        - also possible to have overlap between domains
      - we then need to be able to identify the entities in them
  - **how is it structured?**
    - is it highly structured and tabular or is it semi-structured, like documents with varying attributes?
    - or is it pretty freeform like natural language text?
  - **how does entities relate?**
    - once the entities are identified, we want to model how they relate
      - e.g.:
        - does a particular sales transaction relate to a customer?
        - how does an order relate to multiple order items?
    - we also need to identify the attributes of the entities
      - e.g.:
        - what information do we have to keep on a customer?
  - **how much data?**
    - what is the current volume? (what are you storing already)
    - how much data is coming in?
      - what is the rate of ingestion (is it every day or every hour, etc.)
      - look at `domain-driven events`
        - if we understand the frequency with which they occur (how much data is involved with each one), then we can start getting a sense of what our data generation is going to look like
        - e.g.: a sale or new shipment that's received at a warehouse and inventory is loaded up or data comes in from IoT sensors every 30 seconds
    - will there be data growth?
      e.g.: what are the other things going on in the business that are going to increase the size of the data that we need to deal with?
    - what is the lifecycle of the data? (how long are we going to store the data)
      - what ways are we going to store the data throughout its lifecycle
    - does the data changes over time?
      - we need to try to plan for possible changes
        - e.g.: we may be modeling things differently a year from now that we are today
  - **how is the data being used? (mostly to do with interactive transactions)**
    - are we doing sales transactions?
    - are we monitoring manufacturing devices?
    - are we saving the data for compliance reasons?
      - we might not be interested in the data for querying or need rapid access, but needs to be around in case it is required
    - are we using data for data-driven decision making?
      - e.g.:
        - using data by aggregating it for intelligence applications, data science, machine learning
        - using data to alert on anomalous events

#### identify use cases for data

- the data life cycle is defined by how we use the data
- e.g.:
  - we might have sales transaction data that's used to help us execute an order and fulfill orders
  - there may be geolocation data, which is also used to help trigger certain kinds of offers to customers, but these data may be used in other ways as well, after that immediate use
- thus we need to take into account the sort of initial immediate use case of data
- we also need to look into how it might be used in the future as well
  - these different uses lead to different workloads
    - when we're talking about workloads
      - we want to look at how data is generated
      - how it's ingested into our storage and analysis systems
      - how it's stored
  - We also want to know how the data's used
  - How is it reported and analyzed and visualized
- an important aspect of thinking about scalability in databases is understanding the way we access the data
  - **read-write intensive**
    - typically require fairly low latency on both writing the data and reading the data
    - e.g.: transaction processing systems
  - **for bulk load intensive**
    - have more tolerant of higher latency, but we query larger data sets
    - e.g.: Data warehousing
- we need to understand what are the particular access patterns for the data that is stored in our system
  - e.g.:
    - during sales transaction
      - a retailer might sell products on an e-commerce marketplace, and they collect the data about customers and sales transaction and that gets used to maintain products and inventory and determine which products are being shipped out on any given day
      - But the data can also be used for other things, like updating the finance system and making sure the inventory database is up to date
      - the data may also be used by decision makers and analysts who are accumulating the data in a data warehouse and are using that data for data-driven decision-making
    - in equipment monitoring
      - we may have sensors that collect data on the operating characteristics of manufacturing machines or other devices
      - if the data's sent every 30 seconds from sensors to an Edge device and that Edge device buffers and pre-processes the data, and then the data is sent to a centralized ingestion point
        - in this case, we have a stream of data that we might analyze for anomalous events, and we might also use that data to train machine learning models, to help us predict failures in this equipment
    - a customer engagement
      - we may have diverse data sets about customer sales, their website browsing habits, product reviews and other kinds of demographics about people
      - the goal is to increase the gross margin on the average sale, say by 10%, and for that to happen, we need to identify customers most likely to buy higher margin products
- thus, we have workloads that require data engineers to collect, transform and store data in an analytical database, and then machine learning engineers to build predictive models
  - it is operation driven by a business or organization needs for data
  - workloads are often multi-step
    - there's multiple tasks that are performed on the data before and after it's stored in the database
  - there are also dependencies
    - No data's an island, so workload depends on other workloads and maybe other data sources

#### identify security and compliance requirements

- **Security**
  - in security we're talking about
    - confidentiality of data
      - it is about limiting access to data to those that need it to do their jobs
      - this follows from the Principle of Least Privilege
        - The idea here is that anyone doing a particular job working with data or applications, they have all the privileges they need to get their jobs done, but they don't have more
        - So if you don't need access to a certain set of data to do your job, then you shouldn't have permission to view that data
      - We also depend on identity and access management systems
      - also depends on encryption, both when data is in motion or in transit, as well as at rest, when it's persisted
      - And increasingly important is Data Loss Prevention
        - that's basically monitoring traffic on your network or analyzing content in data stores to make sure that sensitive data like government-identifying numbers or other personally-identifying information isn't readily accessible in places that it shouldn't be
    - availability of that data
      - we're talking about having access to data when it's needed
      - includes things like having a reliable database and connections to that database
      - to achieve availability, or high availability, may require replication of data
      - in the event of a disruption we can get data from one of the replicas to restore within recovery point objectives
        - e.g.:
          - a set of disks go down in an array or one note on a cluster goes down
          - in the event of a significant disruption, if there's been a massive power outage or a natural disaster, and a data center is lost, we still need to plan for having high availability or recoverability by restoring our data system to a disaster resource center or in the cloud somewhere
            - In that case, we want to think about restoring within some recovery point objective,
              - like how long will it take to get a certain amount of data and application accessible again?
    - maintaining the integrity of the data
      - it means we want to make sure that data is correct and it hasn't been tampered with
      - identity and access management plays a role here
        the principle of least privilege also applies
      - target integrity measures
        - e.g.: sometimes when we're talking about integrity, we use very, sort of tightly-focused operations like calculating a message digest over a piece of text or a piece of data to ensure that, if that piece of data is tampered with and somebody else calculates the same message digest, they're going to get a different number and know that something has gone wrong
      - expansive integrity measures
        - e.g.: full-fledged audits across an organization that look at data and systems and how we manage them and what operations have been applied to particular pieces of data
  - we want to focus on who can do what to which pieces of data
    - structure and organization of data
    - how entities relate
- **Compliance**
  - It's about institutional industry and government policies and laws
  - it vary by region and industry, but dictate what we can do with data
    - current volume, rate of ingestion, rate of growth, duration of lifecycle
    - structure and organization of data
    - how entities relate
  - what we're talking about are rules that govern what we do with data
  - these are designed to protect individuals, organizations and larger social groups and institutions
  - it is a set of constraints on what we can do with the data
  - it also can dictate how we protect the data, what's required of us if we are going to collect and store certain types of data, particularly personally-identifying information or other kinds of confidential information
- Sources of Policies
  - these policies that we comply with come from different places
  - organization-specific policies
    - it may have its own policies and these are internal to the organization and they're set by the decision makers in that organization about how data's collected, how it's used and maintained
  - industry-specific policies
    - this is essentially all the participants in an industry, like the payment credit card industry for example, might come up with a set of rules
    - So if you are to accept credit or debit cards, you must follow these set of rules
      - e.g.: PCI-DSS is one set of regulations that are from an industry
  - government-specific policies
    - these are regulations that are specified law and government policies
    - e.g.:
      - in the United States, there is HIPAA, which is a healthcare regulation
      - in the European union, there's GDPR, which is a broader privacy directive
    - depending on where you are and what data you're storing, different policies may apply to your compliance practices

#### estimate data growth

- one of the key things to remember is that the data growth influences our data architecture, our data model and the cost of maintaining a scalable database
- So we need to consider growth factors
  - like the data generation process
    - increased application use (What's the number of users or sensors or customers, those domain entities that we're modeling that generate the data that lead to events which generate data)
      - As more users and existing users place more demand on a system, there will be more data we need to manage
      - people develop new business operations or new business processes which lead to new workloads that might read from the database, a data warehouse or lead to the need for new extraction transformation and load processes
      - changes in business processes that lead to new services that depend on the database
        - e.g.: a new database application which targets particular customers with particular kinds of offers, that might not exist today, but given some developments in improved data collection and application of machine learning algorithms, it might be possible to do something like that
        - That new service will be of great value to the business or potentially a great value, but it also places additional load on the application and the data that we're working with
    - Are there new data sources, that we have to account for including external sources?
      - We may not be using them now, but we anticipate using them in the future
      - here we can think about the way at very coarse-grained levels, data is generated
      - **human-scale data generation**
        - so you can think of every piece of data must be generated by a human
          - e.g.: typing in their name and address on a form or something, that's kind of human-scale data generation
      - **machine generated data**
        - e.g.: your mobile device transmitting geolocation information every few seconds or time series data being pulled in from an IoT application, say every minute or every 30 second from thousands of sensors, the scale is significantly different
      - data augmentation using third party data sources
        - there is a possibility that in addition to the data that we're generating in our domain events that generate the data, there's data augmentation, and that can happen after the fact where we say use third-party services that give us additional data
        - e.g.: we might have information about customers and some basic demographics but we use third-party service to give us hundreds or thousands of other attributes about those customers
  - we need to think about how we'll manage the data, once it's generated (Data Lifecycle Management)
    - What data do we keep, where do we keep it and how long do we keep it?
    - not all data is subject to the same access patterns
      - This is especially the case with older data
        - e.g.: older data is less likely to be queried than newer data, especially if we're talking about things like time series data or monitoring data
      - we might want to use tiered data storage for older data
        - there's different kinds of tiers
          - There's what's considered hot storage, where we need very low latency access
          - there's more colder storage and there's different names for it
            - like near line is not quite hot but not quite cold
            - there's cold line storage
            - there's archive storage
        - depending on the frequency or the rate at which you need to access data, you might store that data in different kinds of systems
      - when do you remove data from the database and keep it in lower cost object stores
        - e.g.: if you are required by compliance regulations to keep data for seven years, but you know you'll never query if there's no business requirement to store data in a queryable form for greater than three years
        - after the three year mark you may just export that data and store it in an object store, like a cloud storage system
        - then, in years between year three and year seven, if you need to access data, you can go out to the object store, get up the particular file that has the data you need and then reload it into the database

### Database Architecture and Relational Databases

#### Choose a datastore

- as we consider designing a scalable database, one of the first things we need to decide is what type of data store we're going to use
  - **relational databases**
    - it have been the workhorse of database applications, especially in enterprises and large organizations
    - relational databases are designed for use with fixed schemas
      - that means that the information we're capturing is fairly well structured, it's well defined, it's fairly static
      - most of the entities that we're describing all need to be described with virtually the same attributes
      - When that's the case, we can organize the data in highly structured rows and tables, and that provides a lot of advantages
        - One of the biggest is that we can use a standard query language called SQL
    - relational databases have long supported ACID transactions, which are really important for business applications in particular
      - that ensures that a logical business operation either completes or fails, but there's never partially done and partially undone
        - e.g.: you wouldn't want to make a transfer from one account in your bank to another account, and have the money withdrawn from one account, but not posted to the second account
        - That kind of logical transfer is a transaction from a database perspective, and either both operations succeed or both fail
    - an example of a relational database is PostgreSQL, which is a widely used open source database
      - There are many others, MySQL is a popular open source database, also SQL Server from Microsoft, Oracle database
    - summary
      - highly structured, data is transactional, difficult to scale
  - **NoSQL databases**
    - it is non-relational
    - some NoSQL databases are supporting ACID transaction, and that will probably grow, but that is something that relational databases have had from the beginning
    - regarding ACID transactions, part of that is having consistent reads
      - With NoSQL, one of the things that NoSQL databases do is it replicates data, so there are multiple copies of data, and that makes it more efficient to do very large numbers of reads
      - However, that creates a situation where there may be times where copies are out of sync
        - e.g.: one replica might be updated at time one, but another replica might not be updated until time three, but at time two, another replica was read, but that data was not consistent with what was the latest data
        - eventually all of the replicas have the same data
      - if you can tolerate that delay, then NoSQL databases may be a good option
    - there's no single type of NoSQL database, there's at least three broad categories
      - what happened was, people were adding more and more data to relational databases, and it was starting to hit performance walls
      - So people took a look and decided, "Well, what can we trade off in terms of features in relational databases, in such a way that we get the performance we want, but we lose certain features?" Well, out of that kind of questioning and exploration came three types of NoSQL databases
        - **document databases**
          - it is designed for semi-structured data
            - similar to JSON and the idea of having key value pairs, and then some of those values can themselves be structured items like other JSON structures or arrays
          - it's a hierarchical structure, but it can vary from one entity to another
          - Another thing that is different from relational databases is that in document databases, we store related information together
            - e.g.: a customer and their address may be stored together in the same JSON structure, whereas in our relational database, we'd be more likely to have customers modeled in one table and addresses in another
          - A popular document database is MongoDB
          - there are others like Couchbase, Cloud Fire Store in Google Cloud
        - **wide column databases**
          - they're semi-structured
            - the set of attributes that we track across entities and across instances of entities can vary
          - it's modeled after something known as a sparse multidimensional matrix
            - if you think of a table like an Excel spreadsheet and then think of multiple sheets, t's almost like in 3D is a three dimensional matrix
            - if done with many more dimensions, its a multidimensional matrix
            - by sparse we mean that oftentimes many of the attributes aren't actually filled in, we don't actually have values for them
              - people take advantage of that fact to make highly efficient storage structures
          - similarly with document databases, we typically store related information together (in a single row), because we don't work with joins
          - sometimes we group columns together
            - e.g.: columns that are related to, say customer, are grouped together, columns that are related to address are grouped together, and those are grouped into something called column families
            - rows are defined as a set of column families
          - Cassandra is a example of a wide column database
          - Google Bigtable is another example
        - **graph databases**
          - it can be structured or semi-structured, there's sort of a spectrum
            - it's really useful for working with both
          - it models the data store on a directed graph
            - can think of that as a set of nodes that have connections or links between them
            - e.g.: a directed graph could model cities and roads that go between cities
          - when we talk about directed graphs, we often talk about nodes and edges
            - e.g. a node is a city and edges, which might model a road
              - those nodes and edges themselves have properties
              - a city might have a name, a population
              - A road might have maximum speed, minimum speed, certain other descriptive properties
          - A widely used graph database is Neo4j
    - summary
      - good for semi-structured data, it has eventual consistency, is highly scalable
  - **analytical databases** (most recent)
    - it is designed for data warehousing and large scale analytics
    - they were designed in response to the limitations of relational databases
    - these are structured databases
      - So they're fairly fixed structures
      - but the focus is on how much data you're using and how you're using it
      - its no longer in the realm of transactions and updating a small number of rows
    - they may use SQL, but they're not relational
      - e.g.: Google BigQuery is an analytical database
        - It's structured, it uses tables, it has SQL, but it's not a relational database
    - it's designed for large volumes of data, it doesn't have a lot of the features of traditional relational databases
    - it relies on massively parallel scans, there are no indexes, and it's not designed for transactions
    - they tend to be read intensive and focused on reading large amounts of data and doing like aggregate operations or analysis on them
    - So you wouldn't use an analytical database say for an eCommerce site, analytical databases are structured and look very similar to relational, but they're designed are optimized for doing large scale aggregate data analysis
    - summary
      - structured, scalable, not transactional

#### identify schemas

- The idea of a schema is a fundamental concept in database design
- a schema is a logical extraction
- It's a collection of related database objects
- in relational databases, when we talk about schemas, we are talking about a lot of different kinds of objects that are used to implement the physical database
  - they include things like tables, indexes, sequences, triggers, constraints, and other objects that we create within a relational database
- the grouping factor is that all of these entities are from a single business domain
  - what constitutes a domain?
    - a set of entities
      - these are descriptive things
      - these are the nouns within the business process that we talk about
      - e.g.: things like customers and products and inventory levels
    - entities have logical relationships
      - e.g.: customers have one or more addresses, orders have one or more order items, and orders draw on certain products which have inventory levels in different warehouses
      - All of those things like products and warehouses and customers and orders, they're all logically related
    - data that's used together
      - e.g.: customers and addresses and orders, clearly used together
        - customers and inventory levels, maybe yes, they're related. Of course we can find a logical path from a customer to an inventory level, but they're really not the same domain
    - share a data lifecycle
      - data lifecycle is one of the things that distinguishes different domains
      - how is the data created? How long is it kept? How is it used?
      - If you see distinct patterns in life cycles, then that's a good indication you're probably talking about different domains, or at least different use cases over a particular domain
    - may model a business process
      - we may have one domain, but we may have two different business processes that are being modeled
        - that's why we have different life cycles
        - we want to watch out for this when we're doing our design work
- in terms of domains and schemas
  - ideally we have no more than one domain per schema
  - domains may be complicated enough that they warrant having multiple schemas
    - different organizational ownership
      - e.g.: one business unit is responsible for a certain set of data and entities and business processes, and a different group is responsible for a different set and now their data is related, but because of the organizational structure, you really want to model your data model in a way that respects and reflects the organizational structure
    - size and complexity
      - e.g.: You may have a single domain and you may have a single business process but it's just so complicated that you need to break it up into sub units, and that happens quite commonly
    - independent processes
      - this is tied to the life cycles
      - You have different life cycles, different use cases, different kinds of workloads
      - You want to manage them differently
        - might wanna break up domains into using multiple schemes
    - wrap monitoring, compliance, decision making
- examples of domains
  - e.g.:
    - in the insurance industry, we might have policies and insurance companies also pay claims against policies
      - Those are clearly two distinct domains
    - in manufacturing, we have supplies and we have products that have certain inventory levels and we track those
      - But then there also may be schedules that particular items are going to be manufactured on a particular date or a set of dates
      - Those two things are clearly related, but independent enough that they warrant being modeled in separate domains
    - in retail, the sales transaction is clearly one domain which is independent of inventory
      - they're related, but managing inventory is a really distinct business process
      - that would warrant its own domain

#### identify key entities

- Early in our design process as we're thinking about scalable databases, one of the things we need to do is identify the entities that we're going to be working with
  - primarily the core entities, the most important ones
- when we think of entities
  - we can think of them as the logical representation of the things in a particular business domain or an application domain
  - One way to think about it is the entities are the nouns
    - When we talk about like business processes and things like that, and things happening, entities are the things that are doing things or things are happening to them
  - some entities are more important than others
    - It's like that commonly cited 80, 20 rule
      - e.g.: 80% of the work that we'll do is probably with 20% of the entities, and that's because some things are just more important
  - analogous to objects in a solar system, some revolve around others
    - they are the focus and other things revolve around those entities, so in some ways it's kind of like the sun and planets in the solar system and moons and other minor objects revolve around these larger things
    - it's easy to see when you think about certain domains like in insurance, policies and claims are the big things (major entities)
    - then you can start thinking about, well, what entities are related to those
- another way to start discovering entities is to describe the business process or describe the thing that you're trying to model
  - e.g.:
    - describe a sales transaction
      - can start by thinking, a customer logs in and then the customer looks around and browses through the catalog, maybe does some comparisons between different products and then chooses one or two and actually orders them, goes through the ordering process
      - then the final step after that is paying with a credit card
    - describe a monitoring system
      - in an internet of things kind of application, let's say we have sensors on manufacturing equipment and these sensors collect several different measurements like temperature, relative humidity, maybe some measure of vibration in the machine, and these measurements are collected every, 30 seconds and they're transmitted to a device in the building
      - we have multiple pieces of manufacturing equipment and they're located in buildings, and we have multiple buildings, and these buildings are on campuses, and we have multiple campuses around the world
      - the sensors don't necessarily communicate directly say with a database, but it might communicate with an Edge device, and there might be one Edge device in each building, and the Edge device collects data and transmits it maybe in an aggregate form or does some pre-processing and then transmits that data to either an on-premise database or a cloud data store
      - what we see in this example is that we can start identifying the key entities or things like the specific piece of manufacturing equipment
        - The sensor has a particular ID and certain attributes about it
        - the Edge device is another important piece of equipment that we're going to need to model as well
- questions to ask
  - First is what business process is being modeled?
  - Next we ask what business objects or artifacts are used in the process?
    - e.g.: in the insurance industry, there's something called the claims form
      - The claims form has a lot of different information about a particular event, like in healthcare, it might be an injury, or in homeowner's insurance, it might be a natural disaster
      - there are these forms that get filled out
        - the forms are rich with information in terms of the kinds of things that we need to model, which we want to look for
  - What are those kind of business artifacts that are used? what's being analyzed? what is needed to perform that analysis?
    - this is especially important when we're working with any kind of analytical database, for example data warehousing, business intelligence, or data science
    - We want to understand is it a sales process?
    - Is it an inventory levels that we're trying to monitor?
    - Is it, are we looking to try and understand what kind of anomalous events precede failures in manufacturing equipment?

#### High-level physical design

- it is the kind of thinking through how we want the data organized on our storage systems
  - we're actually thinking about the physical layout of data relative to other pieces of data
    - how data is organized on persistent storage
  - there are a couple of things that we think about in terms of abstractions
    - One is called the tablespace
      - tablespaces are ways of grouping data
      - we do that at a schema level
    - there's also something called partitions
      - we use those at a table or index level
    - both tablespaces and partitions allow us to take advantage of parallel operations like parallel writes and parallel reads
      - parallelization is a key element of scalable databases
    - using caching to improve read performance
      - This is part of high-level physical design, but it's something that's often postponed or put off until later, until we see how much efficiency and performance we can squeeze out of other things
        - Like how we optimize our tablespaces and partitions
        - once we've sort of exhausted the above and gotten as much out of those as we can, then we turn to other things like caching
- **tablespace**
  - it is a storage location for physically storing data
    - we're specifying a file on a particular device on a particular disc
  - it doesn't dictate logical organization
    - That's something we do in the logical model and we have table structures and things like that
  - data from related tables and indexes stores in the same tablespace
    - Tablespaces are more of an aggregate object, basically a large object that we treat as a single unit
    - we use tablespaces and create different table spaces in ways that optimize read and write performance
      - e.g.: if we have a table, an index on that table, we might want to put them in different tablespaces
        - that's because we want those different tablespaces on different storage devices or different drivers, so that when we're trying to say read from a table while we're also simultaneously reading or writing to the index, we're not both competing for the same IO resources
        - So we're basically distributing the workload across our physical devices
        - that's one of the things we get to do with tablespaces
  - data within a tablespace is managed as a single unit from a tablespace perspective
    - e.g.: if you're dropping a tablespace, you're dropping everything in that tablespace
      - thus you want to consider that when organizing these
- **partitions**
  - the are used for segmenting data within a table
    - the way we do this is we basically break up a table or the data stored in a table and allocate it or store it in different subsections
      - those subsections are called partitions
  - partition selected by partition key
    - we decide which subsection each row goes in based on the partition key
    - thus one or more of the attributes in the table will determine where a particular piece of data will land in terms of which partition it goes in
  - multiple ways to partition data
    - **time-based partition** (most common)
      - this is useful if you have time-series data, where you have data that's very time oriented
      - the data might arrive, for example, in a streaming application we might have data streaming in continually, and we might have say a partition based on a day
        - So each day we create a new partition and any data that comes in on a particular day is written to that day's partition
        - that allows us to easily manage partitions
      - e.g.: if we know at the start a new day, we need to add a partition
        - We may decide that we're going to keep 30 days worth of data
        - At the end of 30 days, we're going to drop one of the oldest partition
        - So time-based partition works well with time-series data or anything that's highly time oriented
    - **list based partition**
      - Sometimes the organization is based more on categories of things
      - e.g.: if you have a product inventory database and you want to partition, you might partition by product category
        - for example, electronics might be in one partition and clothing might be in another partition and housewares in a third partition
        - List partitions work well in those situations
    - **hash based partition**
      - this works well when it's not obvious that you should be using time or there's not a particular category or lists that you can use for partitioning
      - there may be times where there's really not any logical attribute that really stands out
        - maybe what you really want to do is just evenly distribute the data across, say, 10 partitions or 20 partitions, but you don't have a good key that like balances across all of them
        - in that case, you might use something called hash-based partitioning, where you have some attribute, you do a hash of that partition, and then you use that to decide which of indifferent partitions, the particular row should be stored in
- summary
  - the physical design significantly can impact performance
  - what we're really trying to do is take advantage of the ability to parallelize operations
  - we need to consider the physical, as well as the logical organization
    - They're both crucial for different things
    - logical organization will help us keep our data consistent
      - It'll make it easy to query
      - The operations that we do on the database are largely driven by the logical organization, but the performance, in terms of how well things read and write, are also significantly impacted by our physical design
    - two sort of tools in our tool chest for managing physical design, are tablespaces and partitioning
      - we want to take advantage of those as we think about how we can parallelize different parts of our system and the operations on those systems

### Data Ingestion

#### human-scale and machine-scale data

- as we design databases, oftentimes we start to think about
  - What's the data model going to look like?
  - how will I represent the entities in my domain?
- if you're dealing with a highly scalable database you also want to start thinking about data ingestion
  - data ingestion, is the process by which we acquire data
    - We get data into our application or eventually into our database
- when we talk about human scale ingestion and machine scale ingestion, we want to understand is
  - what's the growth rate?
  - How do I estimate what my data volumes are going to be six months, a year or two years from now?
- different scales of ingestion
  - **human scale ingestion**
    - human data entry via keyboard or other input device
    - input device where human behavior and actions control the speed at which data is generated
    - what's the growth rate?
      - data volume is a function of the number of people using the system
    - we can think in terms of how many users we have and that'll give us some insight into the volume of data we'll be dealing with
    - data e.g.: insurance claim, we may be picking up data, such as online people are working with a mobile app, submitting information about a claim, uploading a picture of a dent in their car, etc.
    - applications e.g.:
      - web apps
      - interactive apps on mobile devices
        - if you have some explosively popular app, you have millions of users, then you could easily start looking at volumes that would be, for example, someone else's machine scale level of data
        - But if you have say moderately successful apps or, you know, very few users that still falls in the realm within human scale ingestion
      - back office enterprise apps
        - things like customer relationship management, finance, maybe inventory management those are typically human scale ingestion kinds of applications and databases
  - **machine scale ingestion**
    - machine-generated data - when we're dealing with very large volumes or potentially very large volumes of data
      - such as internet of things or application and infrastructure performance monitoring, or telemetry data from vehicles in a fleet that you're constantly monitoring
    - what is the growth rate?
      - data volume is a function of the number of devices, the rate they generate data, and the size of each message
    - the volume that we're dealing with is a function of the number of devices that we're working with
    - typically machine ingestion level data volumes are often written to NoSQL databases especially wide column databases like Cassandra and Google Cloud big table
    - there may be occasions where you find that you have at least moderate size machine scaled data ingestion that you want to capture in a relational database
      - you want to think about how you do the ingestion and then you also want to think about how you write the data in terms of what does the data model look like and how can you have very low latency rights when dealing with machine scaled data
    - data e.g.: if we have sensors on a fleet of vehicles, then obviously the number of vehicles, we have the number of sensors on that vehicle as well as the volume of data that each sensor generates
    - applications e.g.:
      - Internet of Things
      - background data collected on apps on mobile devices, such as geolocation
        - in addition to maybe interacting with a human user, your app may collect data say, every 10 seconds about geolocation because your app offers coupons based on, you know, retail stores in the vicinity of wherever the user is
      - application and infrastructure monitoring
        - as systems become more complex, it's more and more important to have insight into how services are performing, whether or not servers or containers are crashing
          - thus we often instrument our applications and that can generate a lot of data about performance
      - credit card transaction processing
        - this is kind of like a mobile app
          - It may seem like a single instance is not generating all that much data, but when you have thousands or millions of people doing credit card transactions this is another case where, you know, the lines between human scale and machine scale are fuzzy and credit card transaction processing could easily be in the realm of machine scale ingestion as well

#### different data ingestion strategies

- how human-scale data is used
  - data is ingested directly by app
  - the app receives the data, writes the data to persistent storage, like a relational database
    - data in enterprise applications is often read a lot more than it's written
  - it's a **write once read many** times kind of scenario
  - data is often used for targeted look-ups (query)
    - looking up my insurance policy by my account number is one way to do it or by filtering on certain sets of attributes
  - data is often used for filtering on certain sets of attributes
    - you might want to know about sales at a particular region of a particular product
      - So you filter and query based on those attributes that you're interested in and you get multiple rows back
  - the number of reads and writes we do are a function of the workflows and workflows is just simply a set of operations that a business does or an organization does to complete some tasks
    - e.g.: an insurance company may have a claims processing workflow and it may break them down
      - Part of the workflow might be receiving claims, validating claims, checking against policies, maybe doing fraud checks
      - if all things clear, then the next step in the workflow is to send a payment to the customer and then record the information in some kind of financial tracking system
      - that entire workflow has a whole set of operations that require reads and writes to the database
  - when we're concerned about scalability, it's important that we understand what are all those reads and writes we're going to expect to be seeing
  - factors to consider
    - current volume, rate of ingestion, rate of growth, duration of lifecycle
    - structure and organization of data
    - how entities relate
  - summary
    - we're talking relatively small amounts of data that the application works with directly and oftentimes we'll use what are called CRUD interfaces for create, read, update, and delete
    - basically creating data, manipulating it, maybe occasionally deleting it
    - oftentimes it's persisted, so we write it to the database and then we do whatever work we want to do with it
- how machine-scale data is used
  - machine-scale data ingested to buffer or queue
    - rather than the application receiving data or ingesting data and writing directly to the database, we often use a buffer or queue for ingestion
  - decoupled from processing applications
    - that allows us to decouple the ingestion process from the application processes and writing to the database
  - spikes in ingestion do not trigger spikes in processing
    - one of the advantages of that is that if we do have spikes and ingestion, so for some reason we're getting unexpectedly large volumes of data, our application isn't necessarily going to be overwhelmed
    - We can store the data that comes in during the spike and then work down the backlog as our application can using it at whatever pace the application typically processes
  - most recent data is most valuable
    - machine scale data is that it's often time series data
    - it has a timestamp and some measurements and in those cases, the most recent data is the most valuable
    - e.g.: if you're monitoring your fleet of vehicles, if something's going wrong, if you detect say a problem in the braking system of one of your trucks, you want to know about that right away, so that you can obviously notify the driver
    - older data is also valuable
      - useful for say looking up trends, training machine learning models, etc.
  - often process data before persisting
    - we often do the processing like checking for anomalies or alerting before we do the persisting
      - we do that because it just takes time to write to the database
      - if you're going to ingest data, write it to the database and then check for an anomaly, you're extending the period of time before you can actually detect a problem
      - if you don't need the data in the database before you can check for an anomaly then why not check for the anomaly first and then persist
      - that's often what happens when we're working with like time series data and other machines scale data
- summary
  - we're working with large amounts of data and that large amounts of data that comes in in very short periods of time
  - it's often too much to write directly to the database in terms of ingestion and having say, I'm going to take this volume of data in, and then for each piece of data that comes in, I'm going to write it to the database, wait till that's successfully (mumbles) and returns that acknowledgement and then go get the next piece of data and repeat that process
    - That is way too slow
    - So it's really important that at scale, we'd be able to decouple ingestion from later processing

| Human Scale              | Machine Scale                            |
| ------------------------ | ---------------------------------------- |
| small amounts of data    | large amounts of data                    |
| directly to application  | in short period of time                  |
| CRUD interfaces          | too much to write directly to database   |
| persisted, then analyzed | decouple ingestion from later processing |

#### designing scalable user interfaces

- designing scalable user interfaces
  - we have to consider how we acquire the data or how we ingest the data
  - how to get data into database
    - synchronously
    - asynchronously
- at human scale
  - database is the bottom of the stack
    - user interface -> business logic -> application logic -> database
  - application reads and writes data to database
    - - the application is the actual layer or the mechanism that actually does the reading and writing to the database
  - data is persisted as it's ingested
    - users enter something into a form or an interface, it's consumed maybe through an API, brought back to the application, there's some kind of processing done with that, and then data is written to the database
  - application typically waits for database to finish writing data before continuing
    - the application will write something to the database and then wait to get an acknowledgement back from the database, indicating, yes, that write or that transaction was successful or it failed
      - This is synchronous processing
  - interfaces for humans send varying amounts of data over time at varying frequencies
    - applications that have interfaces for humans can have different patterns with regards to rewrite loads on the database
      - It could be during the mornings there's heavy load, or maybe in the afternoon there's heavy load, or there may be some other unusual distribution of data, but what you may find, that it's not consistent over time
  - if interface uses synchronous writes, need to scale up application and database back end for peak demand
    - typically with enterprise applications, we have something called a Service Level Agreement or an SLA, which says, you know, transactions will finish within some number of milliseconds or seconds with the 95th percentile being no longer than some number of seconds or milliseconds
    - when we have a lot of variation in the data load, we have to think about those peak times with regards to meeting our SLAs
  - estimating data volumes and latencies
    - average size of payload sent from interface to application
    - distribution of data volumes and rates
      - distribution in the probability sense, that we have a mean or a median and we have maybe a bell-shaped curve
      - If you look at, all the various volumes of data, sometimes there's variance and sometimes there's a normal distribution, sometimes there's not, sometimes you have bi-modal distributions, where you might have two spikes and a lull in between, but it's important to understand with regards to like the range and data volumes
        - do we have a lot of periods or a large number of instances where we're dealing with unusually large volumes of data?
          - because then we want to focus on that in terms of meeting SLAs
    - average time to persist data before returning
      - include time to write data, update indexes, write audit logs, etc.
        - how long does it take to write the actual payload data to the database?
        - we want to keep in mind that when we write data to the database, there are other things that go on in addition to that initial storing of the data
        - we may need to update indexes, probably write some logs, maybe update or include some audit records
      - All of those things need to be considered with regards to the total time it takes to complete a transaction
- ingestion of machine-scalable data
  - ingestion endpoint -> store data in buffer -> application will process data -> write to database
- at machine scale
  - database is the last component of ingestion pipeline
  - devices send data to endpoint
    - the end point does that lightweight processing and that can be things like checking a key or some form of authentication and authorization
  - endpoint validates data and writes it to a queue
    - once it's validated (this data is legitimate and it's from an active customer)
    - then it writes the data to the queue
  - application subscribes to queue
    - then the application will subscribe to the queue, or basically have access to messages that are written to that queue
  - application pulls from queue to maintain control
    - often the application pulls from the queue and that's different from a push queue
    - a push queue works in a way that when data arrives, the queue then sends the data to the application
      - So the control rests with the queue in a push scenario
      - Typically for this kind of architecture, we want the queue to be our buffer
      - So we want the application to control when we read from the queue
      - that's why we use push subscriptions
  - estimating data volumes and latencies
    - estimating volume and latency with regards to machine-scale data is a little bit different
    - average size of payload sent from devices
      - typically the payloads are very similar because they tend to be small
      - They might be time series data with a timestamp and a set of measurements and it's consistent
        - every 30 seconds, every minute a sensor will send this data and it's always the same payload
    - constant volume and rate by device
      - So we don't have to worry about that variation that we have to worry about when we're dealing with more human-scale applications
    - average time to send data to ingestion point
      - We want to consider, how long does it take to get from that IOT point, say the IOT sensor and the ingestion point?
        - that's really network latency
      - in this case, our writing to the database is independent of sending data from the device
        - So the device can keep sending data and it does not need to stop while the database catches up and starts to write things out
          - That's why the decoupling is important

#### message queues to buffer ingested data

#### data modeling for scale: event sourcing

#### distributing workload: Command Query Response Separation (CQSR)

### Designing for Scalable Querying

#### transactional vs analytical queries

#### indexing for transactional queries

#### materialized views for transactional queries

#### using read replicas to improve query performance

#### understanding write ahead logging

#### de-normalizing for analytical queries

#### aggregation and sampling for analytical queries

### DevOps for Scalable Relational Databases

#### monitoring relational databases

#### reducing latency with caching

#### partitioning for scalability

#### high-availability architectures

#### data lifecycle management
