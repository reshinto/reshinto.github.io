"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7932],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const s={},r="Springboot guide",o={unversionedId:"API/spring/springboot/readme",id:"API/spring/springboot/readme",title:"Springboot guide",description:"Install springboot",source:"@site/docs/API/spring/springboot/readme.md",sourceDirName:"API/spring/springboot",slug:"/API/spring/springboot/",permalink:"/docs/API/spring/springboot/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/API/spring/springboot/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flask",permalink:"/docs/API/flaskTutorial/"},next:{title:"Java Spring Boot tests",permalink:"/docs/automatedTests/java/springboot/"}},l={},p=[{value:"Install springboot",id:"install-springboot",level:2},{value:"Create new project",id:"create-new-project",level:2},{value:"Inside the project",id:"inside-the-project",level:2},{value:"pom.xml",id:"pomxml",level:3},{value:"src/main/resources/application.properties",id:"srcmainresourcesapplicationproperties",level:3},{value:"src/main/resources/static/ &amp;&amp; src/main/resources/templates/",id:"srcmainresourcesstatic--srcmainresourcestemplates",level:3},{value:"default code in the src/main/java/.../appname/AppName.java",id:"default-code-in-the-srcmainjavaappnameappnamejava",level:3},{value:"create a simple class model that creates tables in the database",id:"create-a-simple-class-model-that-creates-tables-in-the-database",level:2},{value:"e.g.: src/java/.../appname/classname/ModelName.java",id:"eg-srcjavaappnameclassnamemodelnamejava",level:3},{value:"create a service to link the database to the controller",id:"create-a-service-to-link-the-database-to-the-controller",level:2},{value:"e.g.: src/main/java/.../appname/classname/ClassNameService.java",id:"eg-srcmainjavaappnameclassnameclassnameservicejava",level:3},{value:"create tests e.g.: src/test/java/.../appname/classname/ClassNameServiceTest.java",id:"create-tests-eg-srctestjavaappnameclassnameclassnameservicetestjava",level:3},{value:"create and enable restful framework by creating a class controller and linking it with the service",id:"create-and-enable-restful-framework-by-creating-a-class-controller-and-linking-it-with-the-service",level:2},{value:"e.g.: src/main/java/.../appname/classname/ClassNameController.java",id:"eg-srcmainjavaappnameclassnameclassnamecontrollerjava",level:3},{value:"setup environment settings to connect to postgresql in src/main/resources/application.properties",id:"setup-environment-settings-to-connect-to-postgresql-in-srcmainresourcesapplicationproperties",level:2},{value:"spring.jpa.hibernate.ddl-auto values",id:"springjpahibernateddl-auto-values",level:3},{value:"setup environments for unit tests and use H2 database src/test/resources/application.properties",id:"setup-environments-for-unit-tests-and-use-h2-database-srctestresourcesapplicationproperties",level:3},{value:"create an interface that is responsible for data access src/main/java/.../appname/classname/ClassNameRepository.java",id:"create-an-interface-that-is-responsible-for-data-access-srcmainjavaappnameclassnameclassnamerepositoryjava",level:2},{value:"unit test for interface src/test/java/.../appname/classname/ClassNameRepositoryTest.java",id:"unit-test-for-interface-srctestjavaappnameclassnameclassnamerepositorytestjava",level:3},{value:"create a config file that seeds the table contents src/main/java/.../appname/classname/ClassNameConfig.java",id:"create-a-config-file-that-seeds-the-table-contents-srcmainjavaappnameclassnameclassnameconfigjava",level:2},{value:"Create custom error exception handlers",id:"create-custom-error-exception-handlers",level:2},{value:"src/main/java/.../appname/classname/exception/TypeNameException.java",id:"srcmainjavaappnameclassnameexceptiontypenameexceptionjava",level:3},{value:"src/main/java/.../appname/classname/exception/TypeNameException.java",id:"srcmainjavaappnameclassnameexceptiontypenameexceptionjava-1",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"springboot-guide"},"Springboot guide"),(0,i.kt)("h2",{id:"install-springboot"},"Install springboot"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"method 1: ",(0,i.kt)("inlineCode",{parentName:"li"},"brew install springboot")),(0,i.kt)("li",{parentName:"ol"},"method 2: ",(0,i.kt)("inlineCode",{parentName:"li"},'curl -s "https://get.sdkman.io" | bash'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'source "$HOME/.sdkman/bin/sdkman-init.sh"')),(0,i.kt)("li",{parentName:"ul"},"Install springboot",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sdk install springboot"))))))),(0,i.kt)("h2",{id:"create-new-project"},"Create new project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"get list of avaliable dependencies",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spring init --list")))),(0,i.kt)("li",{parentName:"ul"},"create a new web dependency project using maven",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spring init --dependencies web --build maven --groupId groupName --artifactId projectName --name projectName saveAsThisFolderName")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spring init -d web --build maven -g groupName -a projectName -n projectName saveAsThisFolderName")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spring init -d web,data-jdbc,postgresql --build maven -g groupName -a projectName -n projectName saveAsThisFolderName"))))),(0,i.kt)("h2",{id:"inside-the-project"},"Inside the project"),(0,i.kt)("h3",{id:"pomxml"},"pom.xml"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"similar to the package.json file for JavaScript"),(0,i.kt)("li",{parentName:"ul"},"contains the parent library which is spring boot and the list of dependencies installed")),(0,i.kt)("h3",{id:"srcmainresourcesapplicationproperties"},"src/main/resources/application.properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"file to configure all the properties for the app and for environment specific properties"),(0,i.kt)("li",{parentName:"ul"},"it will be used when connected to a real database")),(0,i.kt)("h3",{id:"srcmainresourcesstatic--srcmainresourcestemplates"},"src/main/resources/static/ && src/main/resources/templates/"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"these are for web development related files such as html, css, javascript")),(0,i.kt)("h3",{id:"default-code-in-the-srcmainjavaappnameappnamejava"},"default code in the src/main/java/.../appname/AppName.java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"package com.example.demoapi;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class DemoApiApplication {\n  public static void main(String[] args) {\n    SpringApplication.run(DemoApiApplication.class, args);\n  }\n}\n")),(0,i.kt)("h2",{id:"create-a-simple-class-model-that-creates-tables-in-the-database"},"create a simple class model that creates tables in the database"),(0,i.kt)("h3",{id:"eg-srcjavaappnameclassnamemodelnamejava"},"e.g.: src/java/.../appname/classname/ModelName.java"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"this will enable database to auto create a table and sequence related to this file")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.example.demoapi.student;\n\nimport java.time.LocalDate;\nimport java.time.Period;\n\nimport javax.persistence.Entity;\nimport javax.persistence.GeneratedValue;\nimport javax.persistence.GenerationType;\nimport javax.persistence.Id;\nimport javax.persistence.SequenceGenerator;\nimport javax.persistence.Table;\nimport javax.persistence.Transient\n\n@Entity  // required for hibernate\n@Table  // required for table in the database\npublic class Student {\n  @Id\n  @SequenceGenerator(name = "student_sequence", sequenceName = "student_sequence", allocationSize = 1)\n  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "student_sequence")\n  private Long id;\n  private String name;\n  private String email;\n  private LocalDate dob;\n  @Transient  // helps to auto calculate age\n  private Integer age;\n  \n  public Student() {\n  }\n\n  public Student(Long id, String name, String email, LocalDate dob) {\n    this.id = id;\n    this.name = name;\n    this.email = email;\n    this.dob = dob;\n  }\n\n  // ids are auto generated by database\n  public Student(String name, String email, LocalDate dob) {\n    this.name = name;\n    this.email = email;\n    this.dob = dob;\n  }\n\n  public Long getId() {\n    return id;\n  }\n\n  public void setId(Long id) {\n    this.id = id;\n  }\n\n  public String getName() {\n    return name;\n  }\n\n  public void setName(String name) {\n    this.name = name;\n  }\n\n  public String getEmail() {\n    return email;\n  }\n\n  public void setEmail(String email) {\n    this.email = email;\n  }\n\n  public LocalDate getDob() {\n    return dob;\n  }\n\n  public void setDob(LocalDate dob) {\n    this.dob = dob;\n  }\n\n  public Integer getAge() {\n    return Period.between(dob, LocalDate.now()).getYears();\n  }\n\n  public void setAge(Integer age) {\n    this.age = age;\n  }\n\n  @Override\n  public String toString() {\n    return "Student{" + "id=" + id + ", name=\'" + name + \'\\\'\' + ", email=\'" + email + \'\\\'\' + ", dob=" + dob + ", age="\n        + age + \'}\';\n  }\n}\n')),(0,i.kt)("h2",{id:"create-a-service-to-link-the-database-to-the-controller"},"create a service to link the database to the controller"),(0,i.kt)("h3",{id:"eg-srcmainjavaappnameclassnameclassnameservicejava"},"e.g.: src/main/java/.../appname/classname/ClassNameService.java"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"gain data access by querying in the database")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.example.demoapi.student;\n\nimport java.util.List;\nimport java.util.Objects;\nimport java.util.Optional;\n\nimport javax.transaction.Transactional;\n\nimport com.example.demoapi.student.exception.BadRequestException;\nimport com.example.demoapi.student.exception.StudentNotFoundException;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Service;\n\n// @Component also works, but better to be specific as this is a Service\n@Service  // this states that StudentService needs to be instantiated (must be a spring bean) linking it to @Autowired in the controller\npublic class StudentService {\n\n  private final StudentRepository studentRepository;\n\n  @Autowired  // this states that StudentRepository should be autowired by being instantiated and then injected into this constructor\n  public StudentService(StudentRepository studentRepository) {\n    this.studentRepository = studentRepository;\n  }\n\n  // uses the built-in methods to query the database to return the JSON data\n  public List<Student> getStudents() {\n    return studentRepository.findAll();\n  }\n    \n  public void addNewStudent(Student student) {\n    // Optional<Student> studentOptional = studentRepository.findStudentByEmail((student.getEmail()));\n    // if (studentOptional.isPresent()) {\n    Boolean existsEmail = studentRepository.selectExistsEmail(student.getEmail());\n    if (existsEmail) {\n      // method 1, using default\n      // throw new IllegalStateException("email taken");\n\n      // method 2, using custom exception handler\n      throw new BadRequestException("Email " + student.getEmail() + " taken");\n    }\n    studentRepository.save(student);\n  }\n\n  public void deleteStudent(Long studentId) {\n    boolean exists = studentRepository.existsById(studentId);\n    if (!exists) {\n      // method 1, using default\n      // throw new IllegalStateException("student with id " + studentId + " does not\n      // exists");\n\n      // method 2, using custom exception handler\n      throw new StudentNotFoundException("Student with id " + studentId + " does not exists");\n    }\n    studentRepository.deleteById(studentId);\n  }\n    \n  // used for put request, allows us to not have to implement JPQL query\n  // thus can use the setters from the entity to check if update is possible\n  // and to use setters to auto update the entity in the database\n  @Transactional\n  public void updateStudent(Long studentId, String name, String email) {\n    Student student = studentRepository.findById(studentId)\n        .orElseThrow(() -> new IllegalStateException("student with id " + studentId + " does not exists"));\n\n    // Optional<Student> studentOptional = studentRepository.findStudentByEmail(email);\n    // if (studentOptional.isPresent()) {\n    Boolean existsEmail = studentRepository.selectExistsEmail(email));\n    if (existsEmail) {\n      throw new IllegalStateException("email taken");\n    }\n\n    if (name != null && name.length() > 0 && !Objects.equals(student.getName(), name)) {\n      student.setName(name);\n    }\n    if (email != null && email.length() > 0 && !Objects.equals(student.getEmail(), email)) {\n      student.setEmail(email);\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"create-tests-eg-srctestjavaappnameclassnameclassnameservicetestjava"},"create tests e.g.: src/test/java/.../appname/classname/ClassNameServiceTest.java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.example.demoapi.student;\n\nimport com.example.demoapi.student.exception.BadRequestException;\nimport com.example.demoapi.student.exception.StudentNotFoundException;\n\nimport static org.mockito.Mockito.never;\nimport static org.mockito.Mockito.verify;\nimport static org.mockito.Mockito.when;\nimport static org.assertj.core.api.AssertionsForClassTypes.assertThat;\nimport static org.assertj.core.api.Assertions.assertThatThrownBy;\nimport static org.mockito.ArgumentMatchers.any;\nimport static org.mockito.ArgumentMatchers.anyString; // use to parse in any string instead of the actual string value\nimport static org.mockito.BDDMockito.given;\n\nimport java.time.LocalDate;\nimport java.time.Month;\nimport java.util.Optional;\n\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Disabled; // allow skipping of test\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.ArgumentCaptor;\nimport org.mockito.Mock;\nimport org.mockito.junit.jupiter.MockitoExtension; // method 2: for mocking\n\n@ExtendWith(MockitoExtension.class) // method 2: for mocking\npublic class StudentServiceTest {\n\n  // mock should be used as we have already tested respository\n  @Mock\n  private StudentRepository studentRepository;\n  private StudentService underTest;\n  // private AutoCloseable autoCloseable; // method 1: for mocking\n\n  @BeforeEach\n  void setUp() {\n    // autoCloseable = MockitoAnnotations.openMocks(this); // method 1: for mocking\n    underTest = new StudentService(studentRepository);\n  }\n\n  // method 1: for mocking\n  // @AfterEach\n  // void tearDown() throws Exception {\n  // autoCloseable.close();\n  // }\n\n  @Test\n  void canGetStudents() {\n    // when\n    underTest.getStudents();\n    // then\n    verify(studentRepository).findAll();\n  }\n\n  @Test\n  void canAddNewStudent() {\n    // given\n    Student student = new Student("Name1", "name1@gmail.com", LocalDate.of(2000, Month.JANUARY, 5));\n    // when\n    underTest.addNewStudent(student);\n    // then\n    ArgumentCaptor<Student> studentArgumentCaptor = ArgumentCaptor.forClass(Student.class);\n    verify(studentRepository).save(studentArgumentCaptor.capture());\n    Student captureStudent = studentArgumentCaptor.getValue();\n    assertThat(captureStudent).isEqualTo(student);\n  }\n\n  @Test\n  void willThrowWhenEmailIsTaken() {\n    // given\n    Student student = new Student("Name1", "name1@gmail.com", LocalDate.of(2000, Month.JANUARY, 5));\n\n    // method 1: get actual email\n    // given(studentRepository.selectExistsEmail(student.getEmail())).willReturn(true);\n    // method 2: parse any string as email\n    given(studentRepository.selectExistsEmail(anyString())).willReturn(true);\n    // when\n    // then\n    assertThatThrownBy(() -> underTest.addNewStudent(student)).isInstanceOf(BadRequestException.class)\n        .hasMessageContaining("Email " + student.getEmail() + " taken");\n\n    // our mocked studendRepository never saves anything\n    verify(studentRepository, never()).save(any());\n  }\n\n  @Test\n  void canDeleteStudent() {\n    // given\n    long studentId = 10;\n    given(studentRepository.existsById(studentId)).willReturn(true);\n    // when\n    underTest.deleteStudent(studentId);\n\n    // then\n    verify(studentRepository).deleteById(studentId);\n  }\n\n  @Test\n  void willThrowWhenDeleteStudentNotFound() {\n    // given\n    long studentId = 10;\n    given(studentRepository.existsById(studentId)).willReturn(false);\n    // when\n    // then\n    assertThatThrownBy(() -> underTest.deleteStudent(studentId)).isInstanceOf(StudentNotFoundException.class)\n        .hasMessageContaining("Student with id " + studentId + " does not exists");\n\n    verify(studentRepository, never()).deleteById(any());\n  }\n\n  @Test\n  void canUpdateStudent() {\n    // given\n    Student student = new Student("Name1", "name1@gmail.com", LocalDate.of(2000, Month.JANUARY, 5));\n    String name = "name2";\n    String email = "email2@gmail.com";\n    // when\n    // then\n    student.setName(name);\n    student.setEmail(email);\n    assertThat(student.getName()).isEqualTo(name);\n    assertThat(student.getEmail()).isEqualTo(email);\n  }\n\n  @Test\n  void willThrowWhenStudentNotFound() {\n    // given\n    long studentId = 10;\n    String name = "name2";\n    String email = "email2@gmail.com";\n    // when\n    // then\n    assertThatThrownBy(() -> underTest.updateStudent(studentId, name, email)).isInstanceOf(IllegalStateException.class)\n        .hasMessageContaining("student with id " + studentId + " does not exists");\n  }\n\n  @Test\n  void willThrowWhenNewEmailIsTaken() {\n    // given\n    Student student = new Student("Name1", "name1@gmail.com", LocalDate.of(2000, Month.JANUARY, 5));\n    long studentId = 10;\n    String name = "name2";\n    String email = "email2@gmail.com";\n    // when\n    when(studentRepository.findById(studentId)).thenReturn(Optional.of(student));\n    given(studentRepository.selectExistsEmail(email)).willReturn(true);\n    // then\n    assertThatThrownBy(() -> underTest.updateStudent(studentId, name, email)).isInstanceOf(IllegalStateException.class)\n        .hasMessageContaining("email taken");\n  }\n\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"might be required to add in pom.xml to support custom exception imports for tests")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>javax</groupId>\n  <artifactId>javaee-api</artifactId>\n  <version>8.0.1</version>\n</dependency>\n")),(0,i.kt)("h2",{id:"create-and-enable-restful-framework-by-creating-a-class-controller-and-linking-it-with-the-service"},"create and enable restful framework by creating a class controller and linking it with the service"),(0,i.kt)("h3",{id:"eg-srcmainjavaappnameclassnameclassnamecontrollerjava"},"e.g.: src/main/java/.../appname/classname/ClassNameController.java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.example.demoapi.student;\n\nimport java.util.List;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.DeleteMapping;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.PutMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\n@RequestMapping(path = "api/v1/student")\npublic class StudentController {\n\n  private final StudentService studentService;\n\n  @Autowired  // this states that StudentService should be autowired by being instantiated and then injected into this constructor\n  public StudentController(StudentService studentService) {\n    this.studentService = studentService;  // use dependency injection instead of manually instantiating here\n  }\n\n  // enable get request http://localhost:8080/api/v1/student\n  @GetMapping\n  public List<Student> getStudents() {\n    return studentService.getStudents();\n  }\n  \n  // enable post request http://localhost:8080/api/v1/student\n  @PostMapping\n  public void registerNewStudent(@RequestBody Student student) {  // @RequestBody enable retrieve payload from body\n    studentService.addNewStudent(student);\n  }\n  \n  // enable delete request http://localhost:8080/api/v1/student/delete/1\n  @DeleteMapping(path = "delete/{studentId}")\n  public void deleteStudent(@PathVariable("studentId") Long studentId) {  // @PathVariable enable retrieve parameter from path\n    studentService.deleteStudent(studentId);\n  }\n\n  // enable put request http://localhost:8080/api/v1/student/update/1?name=Test&email=test1@gmail.com\n  @PutMapping(path = "update/{studentId}")\n  public void updateStudent(@PathVariable("studentId") Long studentId, @RequestParam(required = false) String name,\n      @RequestParam(required = false) String email) {  // @RequestParm enable retrieve of key=value parameter from path\n    studentService.updateStudent(studentId, name, email);\n  }\n}\n')),(0,i.kt)("h2",{id:"setup-environment-settings-to-connect-to-postgresql-in-srcmainresourcesapplicationproperties"},"setup environment settings to connect to postgresql in src/main/resources/application.properties"),(0,i.kt)("h3",{id:"springjpahibernateddl-auto-values"},"spring.jpa.hibernate.ddl-auto values"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hibernate first drops existing tables, then creates new tables"))),(0,i.kt)("li",{parentName:"ul"},"create-drop",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"use for test case scenarios"),(0,i.kt)("li",{parentName:"ul"},"create schema, add some mock data, run tests"),(0,i.kt)("li",{parentName:"ul"},"during the test case cleanup, the schema objects are dropped, leaving an empty database"))),(0,i.kt)("li",{parentName:"ul"},"validate",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"can use in production"),(0,i.kt)("li",{parentName:"ul"},"but typically that should be a setting to use in quality/test environment to verify that the database scripts written or applied to database migration tool are accurate"),(0,i.kt)("li",{parentName:"ul"},"Another reason not to use validate in production is that it could be a bottleneck during the startup process of the application, particularly if the object model is quite extensive in size or if other network related factors come into play"))),(0,i.kt)("li",{parentName:"ul"},"update",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"commonly used in development"),(0,i.kt)("li",{parentName:"ul"},"to automatically modify the schema to add new additions upon restart"),(0,i.kt)("li",{parentName:"ul"},"does not remove a column or constraint that may exist from previous executions that is no longer necessary"))),(0,i.kt)("li",{parentName:"ul"},"none",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"highly recommended to use in production"),(0,i.kt)("li",{parentName:"ul"},"this value effectively turns off the DDL generation"),(0,i.kt)("li",{parentName:"ul"},"it's common practice for DBAs to review migration scripts for database changes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"particularly if your database is shared across multiple services and applications")))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"spring.datasource.url=jdbc:postgresql://localhost:5432/databaseName\nspring.datasource.username=\nspring.datasource.password=\nspring.jpa.hibernate.ddl-auto=create-drop\nspring.jpa.show-sql=true\nspring.jpa.properties.hibernate.dialet=org.hibernate.dialect.PostgreSQLDialect\nspring.jpa.properties.hibernate.format_sql=true\n\n// allow display of error message in the response during an error\nserver.error.include-message=always\n")),(0,i.kt)("h3",{id:"setup-environments-for-unit-tests-and-use-h2-database-srctestresourcesapplicationproperties"},"setup environments for unit tests and use H2 database src/test/resources/application.properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"paste h2 database dependency into the pom.xml file")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.h2database</groupId>\n  <artifactId>h2</artifactId>\n  <scope>test</scope>\n</dependency>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"in the application.properties file")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"spring.datasource.url=jdbc:h2://mem:db;DB_CLOSE_DELAY=-1\nspring.datasource.username=sa\nspring.datasource.password=sa\nspring.datasource.driver-class-name=org.h2.Driver\nspring.jpa.hibernate.ddl-auto=create-drop\nspring.jpa.show-sql=true\nspring.jpa.properties.hibernate.dialet=org.hibernate.dialect.PostgreSQLDialect\nspring.jpa.properties.hibernate.format_sql=true\n")),(0,i.kt)("h2",{id:"create-an-interface-that-is-responsible-for-data-access-srcmainjavaappnameclassnameclassnamerepositoryjava"},"create an interface that is responsible for data access src/main/java/.../appname/classname/ClassNameRepository.java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.example.demoapi.student;\n\nimport java.util.Optional;\n\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.data.jpa.repository.Query;\nimport org.springframework.stereotype.Repository;\n\n@Repository\npublic interface StudentRepository extends JpaRepository<Student, Long> {\n\n  // method 1: SELECT * FROM student WHERE email = ?\n  // Optional<Student> findStudentByEmail(String email);\n\n  // method 2: be more specific, the following is JPQL query and not SQL\n  // Student refers to the Student class\n  // @Query("SELECT s FROM Student s WHERE s.email = ?1")\n  // Optional<Student> findStudentByEmail(String email);\n\n  @Query("" + "SELECT CASE WHEN COUNT(s) > 0 THEN " + "TRUE ELSE FALSE END " + "FROM Student s " + "WHERE s.email = ?1")\n  Boolean selectExistsEmail(String email);\n}\n')),(0,i.kt)("h3",{id:"unit-test-for-interface-srctestjavaappnameclassnameclassnamerepositorytestjava"},"unit test for interface src/test/java/.../appname/classname/ClassNameRepositoryTest.java"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Not using the test configurations (not recommended)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.example.demoapi.student;\n\nimport java.time.LocalDate;\nimport static java.time.Month.*;\n\nimport org.junit.jupiter.api.AfterEach;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;\nimport org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;\n\nimport static org.assertj.core.api.AssertionsForClassTypes.assertThat;\n\n@DataJpaTest  // required for test to pass\n@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)  // required for test to pass\npublic class StudentRepositoryTest {\n\n  @Autowired\n  private StudentRepository underTest;\n  \n  @AfterEach\n  void tearDown() {\n    underTest.deleteAll();\n  }\n\n  @Test\n  void itShouldCheckIfStudentExistsEmail() {\n    // given\n    String email = "name1@gmail.com";\n    Student student = new Student("Name1", email, LocalDate.of(2000, JANUARY, 5));\n    underTest.save(student);\n\n    // when\n    Boolean expected = underTest.selectExistsEmail(email);\n\n    // then\n    assertThat(expected).isTrue();\n  }\n\n  @Test\n  void itShouldCheckWhenStudentEmailDoesNotExists() {\n    // given\n    String email = "jamila@gmail.com";\n\n    // when\n    Boolean expected = underTest.selectExistsEmail(email);\n\n    // then\n    assertThat(expected).isFalse();\n  }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"using the test configuration (recommended)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.example.demoapi.student;\n\nimport java.time.LocalDate;\nimport static java.time.Month.*;\n\nimport org.junit.jupiter.api.AfterEach;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\n// import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;\nimport org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;\n\nimport static org.assertj.core.api.AssertionsForClassTypes.assertThat;\n\n// not required\n// @AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)\n@DataJpaTest\npublic class StudentRepositoryTest {\n\n  @Autowired\n  private StudentRepository underTest;\n  \n  @AfterEach\n  void tearDown() {\n    underTest.deleteAll();\n  }\n\n  @Test\n  void itShouldCheckIfStudentExistsEmail() {\n    // given\n    String email = "name1@gmail.com";\n    Student student = new Student("Name1", email, LocalDate.of(2000, JANUARY, 5));\n    underTest.save(student);\n\n    // when\n    Boolean expected = underTest.selectExistsEmail(email);\n\n    // then\n    assertThat(expected).isTrue();\n  }\n\n  @Test\n  void itShouldCheckWhenStudentEmailDoesNotExists() {\n    // given\n    String email = "jamila@gmail.com";\n\n    // when\n    Boolean expected = underTest.selectExistsEmail(email);\n\n    // then\n    assertThat(expected).isFalse();\n  }\n}\n')),(0,i.kt)("h2",{id:"create-a-config-file-that-seeds-the-table-contents-srcmainjavaappnameclassnameclassnameconfigjava"},"create a config file that seeds the table contents src/main/java/.../appname/classname/ClassNameConfig.java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.example.demoapi.student;\n\nimport java.time.LocalDate;\nimport java.time.Month;\nimport java.util.List;\n\nimport org.springframework.boot.CommandLineRunner;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\npublic class StudentConfig {\n\n  @Bean\n  CommandLineRunner commandLineRunner(StudentRepository repository) {\n    return args -> {\n      Student studentA = new Student("Name1", "name1@gmail.com", LocalDate.of(2000, Month.JANUARY, 5));\n\n      Student studentB = new Student("Name2", "name2@gmail.com", LocalDate.of(2004, Month.FEBRUARY, 10));\n\n      repository.saveAll(List.of(studentA, studentB));\n    };\n  }\n}\n')),(0,i.kt)("h2",{id:"create-custom-error-exception-handlers"},"Create custom error exception handlers"),(0,i.kt)("h3",{id:"srcmainjavaappnameclassnameexceptiontypenameexceptionjava"},"src/main/java/.../appname/classname/exception/TypeNameException.java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"package com.example.demoapi.student.exception;\n\nimport org.springframework.http.HttpStatus;\nimport org.springframework.web.bind.annotation.ResponseStatus;\n\n@ResponseStatus(HttpStatus.BAD_REQUEST)\npublic class BadRequestException extends RuntimeException {\n  public BadRequestException(String msg) {\n    super(msg);\n  }\n}\n")),(0,i.kt)("h3",{id:"srcmainjavaappnameclassnameexceptiontypenameexceptionjava-1"},"src/main/java/.../appname/classname/exception/TypeNameException.java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"package com.example.demoapi.student.exception;\n\nimport org.springframework.http.HttpStatus;\nimport org.springframework.web.bind.annotation.ResponseStatus;\n\n@ResponseStatus(HttpStatus.NOT_FOUND)\npublic class StudentNotFoundException extends RuntimeException {\n  public StudentNotFoundException(String msg) {\n    super(msg);\n  }\n}\n")))}u.isMDXComponent=!0}}]);