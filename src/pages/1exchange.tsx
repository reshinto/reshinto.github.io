import React, {useState} from "react";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

const password = "1exvictor";

const questionsAndAnswers = [
  {
    mainQuestion:
      "How can you improve the following code? Provide explanations as to why your suggested improvement is better.",
    subQuestions: [],
    codeExample: `\
fun bark(dog: Map<String, Any>, dogName: String) {
    // ...
}

fun run(dog: Map<String, Any>, dogName: String) {
    // ...
}

fun wagTail(dog: Map<String, Any>, dogName: String) {
    // ...
}`,
    answer: "",
    codeAnswer: `\
// the following code is better because each action function can do its own thing
// and does not need to keep repeating the same arguments

// declare the following 2 lines as a constant since it will never change
val dog: Map<String, Any> = mapOf()
val dogName: String = ""

// removed common arguments
fun bark() {
    // ...
}

// removed common arguments
fun run() {
    // ...
}

// removed common arguments
fun wagTail() {
    // ...
}    
`,
  },
  {
    mainQuestion:
      "What does this do? Describe the underpinning concepts/features/functionalities that make this possible.",
    subQuestions: [
      {
        question: "What do you get as the return value of fn()?",
        ans: (
          <>
            <p>
              first it will print{" "}
              <b>
                <i>Hello stranger! Here's the content:</i>
              </b>
            </p>
            <p>
              then it will return{" "}
              <b>
                <i>{`Promise {<pending>}`}</i>
              </b>
            </p>
          </>
        ),
      },
      {
        question:
          "How to print out the fetched content from fn() , after it is done with its operations?",
        ans: "",
      },
    ],
    codeExample: `\
function maker(x) {
  return async (url) => {
    console.log(\`Hello \${x}! Here's the content:\`)
    const resp = await fetch(url)
    const result = await resp.text()
    return result
  }
}

const fn = maker('stranger')
fn('https://brave.com')`,
    answer: `\
    It is a Higher order function because it returns the function as output
    It is also a closure because it gives access to an outer function's scope from an inner function
    - The maker is synchronous and returns an Asynchronous function
    - It takes in an argument x which is used to update the string value inside the anonymous function that is being returned
    - It allows modification of the inner function contents from the outer function
    - It allows access to the inner function before being executed, which also allows us to modify the contents of the inner function
    `,
    codeAnswer: `\
function maker(x) {
  return async (url) => {
    console.log(\`Hello \${x}! Here's the content:\`);
    const resp = await fetch(url);
    const result = await resp.text();
    return result;
  }
}

async function run() {
  const fn = maker("stranger");
  console.log(await fn('https://brave.com'));
}

run();
`,
  },
  {
    mainQuestion:
      "How can you improve the following code? Provide explanations as to why your suggested improvement is better.",
    subQuestions: [],
    codeExample: `\
class LocalStorage {
    fun saveFile(input: InputStream, fileName: String) {
        // ...
    }
}

class CloudStorage {
    fun saveFile(input: InputStream, fileName: String) {
        // ...
    }
}

fun main(args: Array<String>) {
    if (args.isNotEmpty() && args.size >= 3) {
        val file = FileInputStream(args[1])
        val fileName = args[2]
        file.use {
            if (args[0] == "cloud") {
                val cloud = CloudStorage()
                cloud.saveFile(it, fileName)
            } else if (args[0] == "local") {
                val local = LocalStorage()
                local.saveFile(it, filename)
            }
        }
    } else {
        println("Please specify destination type, path to file, and filename.")
    }
}`,
    answer: "",
    codeAnswer: `\
// ensures all Storage class follow the same format
interface StorageInterface {
    fun saveFile(input: InputStream, fileName: String)
}

// Overrides the saveFile method from the StorageInterface
class LocalStorage : StorageInterface {
    override fun saveFile(input: InputStream, fileName: String) {
        // ...
    }
}

// Overrides the saveFile method from the StorageInterface
class CloudStorage : StorageInterface {
    override fun saveFile(input: InputStream, fileName: String) {
        // ...
    }
}

// Uses a factory design pattern to return the instance of the desired storage type
// adding and removing of supported storage type is easy
class Storage {
    companion object {
       fun getStorage(cloudType: String): StorageInterface {
           return when (cloudType) {
               "cloud" -> CloudStorage()
               else -> LocalStorage()
           }
       }
    }
}

fun main(args: Array<String>) {
    if (args.isNotEmpty() && args.size >= 3) {
        val file = FileInputStream(args[1])
        val fileName = args[2]
        file.use {
            // only need to call these 2 lines of code once and no future modifications are required
            val storage = Storage.getStorage(args[0])
            storage.saveFile(it, filename)
        }
    } else {
        println("Please specify destination type, path to file, and filename.")
    }
}
`,
  },
  {
    mainQuestion: "Synchronous programming and asynchronous programming",
    subQuestions: [
      {
        question: "What are they?",
        ans: "They are techniques in how to handle tasks in the program",
      },
      {
        question: "What are their key differences, pros and cons?",
        ans: `\
        Key differences:
          Synchronous: each task gets executed one after another and must wait for its previous task to be completed before it can be executed
          pros:
          - easier to understand
          - supported by all programming languages
          - easier to manage and debug
          cons:
          - blocking: tasks must complete before the next task can be executed
          - slower and more methodical
          - if a task fails, the subsequent tasks will not be executed
          - more resources might be needed to execute the tasks

          Asynchronous: tasks start executing without waiting for a different task to finish 
          pros:
          - non-blocking: each task can be handled in parallel
          - failure of one task does not affect the execution of the other tasks
          - less resources are required to execute the tasks
          cons:
          - might be difficult to implement in some programming languages
          - code can get messy and difficult to debug
        `,
      },
      {
        question: "Which one do you prefer and why?",
        ans: `\
        Depends on the problem and the programming language
        There is no one best answer, its all about understanding the tradeoffs and what problems we are trying to solve
      `,
      },
      {
        question: "When would you use one over the other?",
        ans: `\
        When a task requires long computation time, or when the task is required to be non-blocking for better user experience in the UI, Asynchronous will be a better approach
        For simple apps, Synchronous might be better
      `,
      },
    ],
    codeExample: ``,
    answer: "",
    codeAnswer: "",
  },
  {
    mainQuestion: "SQL and NoSQL",
    subQuestions: [
      {
        question: "What are they?",
        ans: `\
        SQL stands for Structured Query Language, it is typically used for relational databases

        NoSQL stands for Non-Structured Query Language, it is typically used for non-relational databases
      `,
      },
      {
        question: "What are their key differences, and pros and cons?",
        ans: `\
        Key differences:
        SQL:
          - Storage: stores data in tables where each row represents an entity, each column represents a data point about that entity
          - Schema: defined schema, columns must be decided and chosen before data entry
          - Querying: use SQL
          - Scalability: vertically scalable, horizontally scalable is also possible but is challenging and time-consuming
          - Reliability: ACID compliant (Atomicity, Consistency, Isolation, Durability)

        NoSQL:
          - Storage: have different data storage models (e.g.: key-value, document, graph, wide-column)
          - Schema: can be schemaless or dynamic
          - Querying: different databases have different syntax
          - Scalability: horizontally scalable, a lot of NoSQL tech also distribute data across servers automatically
          - Reliability: BASE compliant (Basically available, Soft State, Eventual Consistency)
        `,
      },
      {
        question: "Which one do you prefer and why?",
        ans: "All about tradeoffs, depends on the problem and budget",
      },
      {
        question: "When would you use one over the other?",
        ans: `\
        use SQL database if ACID compliance is needed, or when data is structured and unchanging, or when both Consistency and Availability are needed
        use NoSQL if there is partition, or when rapid development is required, or when data has little to no structure
      `,
      },
    ],
    codeExample: ``,
    answer: "",
    codeAnswer: "",
  },
  {
    mainQuestion:
      "Statically-typed and dynamically-typed programming languages",
    subQuestions: [
      {
        question: "What do they mean?",
        ans: `\
        Dynamically-typed Language: resolution of types, members, properties, methods are done at run-time
        Statically-typed Language: resolution of types, members, properties, methods are done at compile-time
      `,
      },
      {
        question: "Describe their pros and cons.",
        ans: `\
        Dynamically-typed Language:
        - pros: easier to understand, pickup, and write code
        - cons: lose compile-time checking, have to write more unit tests to ensure app behaves properly at run-time
        Statically-typed Language:
        - pros: easier to debug as error messages are provided at compile-time
        - cons: harder to understand, harder to pickup, harder to write code
      `,
      },
      {
        question:
          "Which do you generally prefer, and why would you use one over the other?",
        ans: `\
        Depends on the use case
        But generally I would prefer Statically-typed due to the compile-time checking, which makes it easier to debug
        It is also easier to maintain over the long run
        `,
      },
    ],
    codeExample: ``,
    answer: "",
    codeAnswer: "",
  },
  {
    mainQuestion: "Scalability, resilience",
    subQuestions: [
      {
        question:
          "What sort of approaches might you take to design scalable platforms/systems?",
        ans: `\
        use Asynchronous Communication, Queue Automation Tasks, Read Replicas, reduce Write Requests, Cache, Load Balance, integrate performance and Load testing in CICD, plan carefully on choice of database`,
      },
      {
        question:
          "What sort of approaches might you take to build in resilience for the platform/system?",
        ans: "Implement rolling upgrades, Retry functionality and make services asynchronous, Test in production, use blue green deployment, implement and test redundancy",
      },
    ],
    codeExample: ``,
    answer: "",
    codeAnswer: "",
  },
  {
    mainQuestion: "Data, database",
    subQuestions: [
      {
        question:
          "Why would we need database transactions? Describe situations you can think of where database transactions are necessary, and where they are not.",
        ans: `\
        It is required for data integrity

        During an important transaction for example a money transfer from User A to User B, it is either the transaction is completed successfully or it is not
        If the transaction is not completed, the data is not updated in the database
        It would not be good to see the money that was transferred to be lost somewhere due to any failures at any point in the process

        Contents such as a user's profile, or a user's cart are not critical and can be updated without a transaction
        `,
      },
      {
        question:
          "How would you scale access to database, and ensure its resilience and data integrity/consistency at the same time?",
        ans: `\
        It would depend on how critical it is to guarantee consistency of replicated data at write time
        Usually ACID model would be the right approach, just that it would be harder to implement the scaling part

        BASE model would be good for easy scalability, however even if we choose a NoSQL with high consistency, it does not guarantees the write time like ACID does

        If cost is not a concern, using Google Spanner might be a good choice to cover all the requirements
        `,
      },
      {
        question:
          "How would you do database backups effectively, without resorting to full database dumps all the time?",
        ans: `\
        Create a cronjob that periodically backups the database based on the last modified date and time
        `,
      },
    ],
    codeExample: ``,
    answer: "",
    codeAnswer: "",
  },
  {
    mainQuestion: "Containers",
    subQuestions: [
      {
        question: "What are they?",
        ans: "It is a package of softwares that has all the dependencies needed to run a program in any environment",
      },
      {
        question: "What are the pros and cons of using them?",
        ans: `\
        Pros:
        - provide a lightweight, fast, isolated infrastructure to run the app
        - easy to deploy, scale, and maintain
        - smaller in size compared to a virtual machine

        Cons:
        - shares the kernel of the OS, if the kernel becomes vulnerable, all containers will be affected
        - networking could be tricky to manage
        - more to manage and monitor for multi-layered infrastructure
      `,
      },
    ],
    codeExample: ``,
    answer: "",
    codeAnswer: "",
  },
  {
    mainQuestion: "Dependency injection",
    subQuestions: [
      {
        question: "What is it?",
        ans: "It is a way to inject dependencies into a class",
      },
      {
        question: "In what ways can this be useful?",
        ans: "Allows for the replacement of a dependency without modifying any code and reduces the boilerplate code in the business logic",
      },
    ],
    codeExample: ``,
    answer: "",
    codeAnswer: "",
  },
  {
    mainQuestion: "Spring framework, Spring Boot",
    subQuestions: [
      {
        question: "What are they?",
        ans: "Sprint Boot is an extension of the Spring framework, which eliminates the boilerplate configurations required for setting up a Spring app",
      },
      {
        question: "Are you OK working with it as part of daily work?",
        ans: "I would use the 2 months notice period to get up to speed on it so that I can contribute on the 1st week",
      },
    ],
    codeExample: ``,
    answer: "",
    codeAnswer: "",
  },
  {
    mainQuestion: "CSS",
    subQuestions: [
      {
        question: "What are the benefits and caveats of using CSS frameworks?",
        ans: `\
        pros:
        - speeds up development
        - enables cross-browser functionality
        - provides clean and symmetrical layouts
        - enforces good practices

        cons:
        - less freedom
        - more code
        - more rules to follow
        `,
      },
    ],
    codeExample: ``,
    answer: "",
    codeAnswer: "",
  },
  {
    mainQuestion: "LESS or SASS",
    subQuestions: [
      {
        question: "What are they good for, and why would you use any of them?",
        ans: `\
        - easier to automate repetitive tasks
        - reduce number of errors and code bloat
        - able to create reusable code snippets
        - ensure backward compatibility
        `,
      },
    ],
    codeExample: ``,
    answer: "",
    codeAnswer: "",
  },
  {
    mainQuestion: "REST, GraphQL",
    subQuestions: [
      {
        question: "What are these generally used for?",
        ans: "It is used to get, create, update, or delete a resource",
      },
      {
        question: "What are their differences, and their pros and cons?",
        ans: `\
        Differences:
        - REST has multiple endpoints, whereas GraphQL has a single endpoint
        - REST is URL-Driven, whereas GraphQL is query-driven
        - REST uses HTTP verbs to perform a request, whereas GraphQL uses a query language to perform a request with only a POST request

        REST:
        pros:
        - easier to implement
        - no special libraries are required to use when writing on the client side
        cons:
        - updating of backend or frontend to filter data is tedious each time there is a requirement change
        - multiple http calls might be required to get the data if app is complex

        GraphQL:
        pros:
        - easy to filter and sort data via GraphQL Schema Definition Language
        - less http calls are required to get data
        - responsive and with low latency
        cons:
        - higher learning curve
        - special libraries are required to use when writing on the client side
        - can be overkill for simple apps
        - vulnerable to DDoS attacks if server does not have the right protections
        - monitoring and error reporting is difficult
        - no default http caching
        `,
      },
      {
        question: "When would you use one over the other?",
        ans: `\
        use REST when data fetching is simple, or when the app requires a robust API, with caching and a monitoring system

        use GraphQL when data fetching is nested and complex and for mobile apps
      `,
      },
    ],
    codeExample: ``,
    answer: "",
    codeAnswer: "",
  },
  {
    mainQuestion: "React and Vue",
    subQuestions: [
      {
        question: "What are these?",
        ans: "Both are JavaScript based toolkit systems that help build dynamic user interfaces. They are libraries but when combined with other tools they can become like a framework",
      },
      {
        question: "What are their pros and cons?",
        ans: `\
        React
        pros:
        - allows flexible and reusable components
        - large community, more libraries and support
        - better performance during runtime
        - open source and backed by facebook
        - good for complex apps, future extensibility
        cons:
        - no specific code structure, dependent on developer to maintain which may lead to messy code
        - frequent updates to the library, which may lead to code breaks
        - requires understanding of JavaScript libraries

        Vue
        pros:
        - has progressive design: able to gradually migrate existing projects
        - good with memory allocation and better performance during start up time
        - tracks dependencies and prevents unnecessary re-renders
        - more intuitive and easier for beginners
        - good if need a solution that works as soon as possible
        cons:
        - smaller community, lesser libraries and support
        - purely open source
      `,
      },
      {
        question: "Which ones would you prefer, and why?",
        ans: "React, already familar with it and is more popular in the job market",
      },
      {question: "You OK to work with either or both?", ans: "Yes"},
    ],
    codeExample: ``,
    answer: "",
    codeAnswer: "",
  },
  {
    mainQuestion: "Mobile-friendly, multiple form-factors",
    subQuestions: [
      {
        question:
          "How do you develop web applications/pages to be mobile friendly, which can also adapt to multiple screen sizes and devices?",
        ans: `\
        - Implement a Responsive Layout
        - Use media queries to make sure the page is responsive to different screen sizes
        - Add Viewport Meta tag
        - Avoid using Cluttered Web Design
        - Use different designs for web and mobile
        `,
      },
    ],
    codeExample: ``,
    answer: "",
    codeAnswer: "",
  },
  {
    mainQuestion: "Converting mock-ups into functional UIs",
    subQuestions: [
      {
        question:
          "Describe how you would typically convert visual mock-ups into functional UIs.",
        ans: `\
        - Identify the colors, fonts, styles, medias, elements and their corresponding interactions, and layout of the mock-up
        - Create reusable UI components and layouts based on the identified data
        `,
      },
    ],
    codeExample: ``,
    answer: "",
    codeAnswer: "",
  },
  {
    mainQuestion: "Tech stack",
    subQuestions: [
      {
        question: "What tools do you use to write/implement code?",
        ans: "Vim / Vs Code",
      },
      {
        question: "What’s your favourite tech stack like?",
        ans: "Depends on the problem, if it is Front-end, I would prefer React",
      },
      {
        question:
          "Are you open to using things out of your favourite tech stack, in the course of work?",
        ans: "Yes",
      },
    ],
    codeExample: ``,
    answer: "",
    codeAnswer: "",
  },
  {
    mainQuestion: "Your highlights/portfolio (optional)",
    subQuestions: [
      {
        question:
          "It’s probably stated in your CV already to some extent, but if you’d like, you can describe more in detail any key highlights, projects, portfolio, that you are proud of, or would like to showcase.",
        ans: (
          <>
            <p>
              Personal Project:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/reshinto/online_trading_platform"
              >
                Online Trading Platform
              </a>
              <span>
                {" "}
                because this was my first time building a full stack app by
                myself while learning React and Django
              </span>
            </p>
            <img
              width={"50%"}
              style={{marginBottom: "2rem"}}
              src="https://raw.githubusercontent.com/reshinto/online_trading_platform/master/images/demo.gif"
            />
            <p>
              Professional Project: Auto Repository Generator, I built this from
              end to end (Frontend, Devops, Backend), learnt FastAPI and Groovy,
              and delivered POC in 1 week, MVP 1 in the 2nd week, completion in
              around 2 months
            </p>
          </>
        ),
      },
    ],
    codeExample: ``,
    answer: "",
    codeAnswer: "",
  },
  {
    mainQuestion: "Technical strength",
    subQuestions: [
      {
        question:
          "Even though you are full-stack, which one are you stronger at, or lean towards, frontend or backend?",
        ans: "Frontend",
      },
    ],
    codeExample: ``,
    answer: "",
    codeAnswer: "",
  },
  {
    mainQuestion:
      "Give us an introduction about yourself, where you are from, and perhaps a bit of an intro of the culture/country where you came from.",
    subQuestions: [],
    codeExample: ``,
    answer:
      "I'm a more or less self-taught software engineer. A Singaporean, studied in Singapore but did my university in Japan and worked there for a few years that has nothing related to Technology. Then I came back to Singapore to do a career switch and I'm currently working as a software engineer in Singapore",
    codeAnswer: "",
  },
  {
    mainQuestion: "What made you decide to apply for a role with us?",
    subQuestions: [],
    codeExample: ``,
    answer:
      "I want to be in an environment where I can contribute on projects that has a high level of impact and also be able to grow together as a team",
    codeAnswer: "",
  },
  {
    mainQuestion:
      "What is your asking salary for the role you have applied with us? Is it negotiable?",
    subQuestions: [],
    codeExample: ``,
    answer: "Something that is fair for both sides, negotiable",
    codeAnswer: "",
  },
  {
    mainQuestion: "Do you need a work visa?",
    subQuestions: [],
    codeExample: ``,
    answer: "No (Singaporean)",
    codeAnswer: "",
  },
  {
    mainQuestion: "If you are currently at another job role,",
    subQuestions: [
      {
        question: "Any reason for wanting to move on from it?",
        ans: "Looking to work on projects that have higher level of impact, larger in scale, and something different",
      },
      {question: "What is your notice period?", ans: "2 months"},
    ],
    codeExample: ``,
    answer: "",
    codeAnswer: "",
  },
  {
    mainQuestion:
      "What are your expectations like for the role you have applied with us, in terms of the work culture, daily work, work hours, expectations of your potential new supervisor/boss, and/or anything else that matters to you?",
    subQuestions: [],
    codeExample: ``,
    answer: `\
    - work on meaningful projects that has a high level of impact
    - own the project and have the responsibility to deliver the product
    - learn new things and grow as a team
    - will be nice if it is fully remote and perhaps go to the office when collaboration and system design disscussions are required
    - best if boss set reasonable goals by first discussing with the team on the deadlines and requirements before commiting
    - ideal if no mandatory work hours is required as long as work is done properly with quality on time
    - as a software engineer, learning new things is a must, would be nice if these expenses are covered by the company
    `,
    codeAnswer: "",
  },
  {
    mainQuestion:
      "Why did you choose to be a software engineer? What were the motivations like, that led you to become one?",
    subQuestions: [],
    codeExample: ``,
    answer: (
      <>
        <p>
          I wrote this reason at my homepage{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://terencekong.net"
          >
            Link 1
          </a>
          {" or "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reshinto.github.io"
          >
            Link 2
          </a>
        </p>
        <HomepageFeatures />
      </>
    ),
    codeAnswer: "",
  },
  {
    mainQuestion:
      "Why did you choose to use the format/method you have decided to use to convey your answers to us?",
    subQuestions: [],
    codeExample: ``,
    answer:
      "Easier to read, format, and access without having to download a file",
    codeAnswer: "",
  },
  {
    mainQuestion:
      "Anything you would like to ask us about, regarding the role you have applied, the company, or anything else that you wish to ask us about?",
    subQuestions: [],
    codeExample: ``,
    answer: `\
    - What is the tech stack being used and why?
    - What does the company expect from me when I work there?
    - What is the engineering culture?
    - How big is the engineering team?
    `,
    codeAnswer: "",
  },
];

function Contents({isVisible}) {
  return (
    <>
      {isVisible &&
        questionsAndAnswers.map(
          ({mainQuestion, subQuestions, codeExample, answer, codeAnswer}) => (
            <div style={{borderBottom: "1px solid red"}}>
              <h2>{mainQuestion}</h2>
              {codeExample && (
                <pre>
                  <code>{codeExample}</code>
                </pre>
              )}
              {answer && <p style={{whiteSpace: "pre-line"}}>{answer}</p>}
              {subQuestions.length > 0 &&
                subQuestions.map(({question, ans}) => (
                  <>
                    <h4>{question}</h4>
                    {ans && <p style={{whiteSpace: "pre-line"}}>{ans}</p>}
                  </>
                ))}
              {codeAnswer && (
                <pre>
                  <code>{codeAnswer}</code>
                </pre>
              )}
            </div>
          )
        )}
    </>
  );
}
export default function oneExchange(): JSX.Element {
  const [pw, setPw] = useState<string>("");

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2vh",
          rowGap: "1vh",
        }}
      >
        <label>Key in the password to display the answers</label>
        <input
          style={{width: "300px", height: "30px"}}
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <Contents isVisible={pw === password} />
      </div>
    </Layout>
  );
}
