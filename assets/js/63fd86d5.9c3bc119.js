"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[807],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),m=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=m(e.components);return l.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=m(a),c=n,d=k["".concat(u,".").concat(c)]||k[c]||p[c]||o;return a?l.createElement(d,r(r({ref:t},s),{},{components:a})):l.createElement(d,r({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var m=2;m<o;m++)r[m]=a[m];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},722:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var l=a(7462),n=(a(7294),a(3905));const o={},r="MySQL Cheats",i={unversionedId:"database/SQL/mySQL/readme",id:"database/SQL/mySQL/readme",title:"MySQL Cheats",description:"Starting and Stopping the MySQL Server",source:"@site/docs/database/SQL/mySQL/readme.md",sourceDirName:"database/SQL/mySQL",slug:"/database/SQL/mySQL/",permalink:"/docs/database/SQL/mySQL/",draft:!1,editUrl:"https://github.com/reshinto/reshinto.github.io/blob/dev/docs/database/SQL/mySQL/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entity Framework",permalink:"/docs/database/SQL/entityFramework"},next:{title:"PostgreSQL",permalink:"/docs/database/SQL/postgreSQL/"}},u={},m=[{value:"Starting and Stopping the MySQL Server",id:"starting-and-stopping-the-mysql-server",level:2},{value:"View server status",id:"view-server-status",level:3},{value:"Start MySQL Server",id:"start-mysql-server",level:3},{value:"Stop MySQL Server",id:"stop-mysql-server",level:3},{value:"To create MySQL database and users, follow these steps:",id:"to-create-mysql-database-and-users-follow-these-steps",level:2},{value:"Connect app to mysql",id:"connect-app-to-mysql",level:2},{value:"Connect app to docker mysql",id:"connect-app-to-docker-mysql",level:2},{value:"Run query on command line (remove -h 127.0.0.1 if not using docker)",id:"run-query-on-command-line-remove--h-127001-if-not-using-docker",level:2},{value:"Grant Different User Permissions",id:"grant-different-user-permissions",level:2},{value:"Types of permissions",id:"types-of-permissions",level:3},{value:"Grant permissions",id:"grant-permissions",level:3},{value:"Revoke permission",id:"revoke-permission",level:3},{value:"RIGHT JOIN (same as RIGHT OUTER JOIN)",id:"right-join-same-as-right-outer-join",level:4},{value:"FULL JOIN (same as FULL OUTER JOIN)",id:"full-join-same-as-full-outer-join",level:4},{value:"Commands",id:"commands",level:2},{value:"CREATE",id:"create",level:3},{value:"Create new table",id:"create-new-table",level:3},{value:"ENUM",id:"enum-1",level:4},{value:"Foreign key",id:"foreign-key-1",level:4},{value:"Date",id:"date-1",level:4},{value:"Unique id",id:"unique-id",level:4},{value:"DROP",id:"drop",level:3},{value:"Delete table",id:"delete-table",level:4},{value:"DELETE",id:"delete",level:3},{value:"Delete row",id:"delete-row",level:4},{value:"INSERT",id:"insert",level:3},{value:"Insert values to table",id:"insert-values-to-table",level:3},{value:"SELECT",id:"select",level:3},{value:"Show all columns in table",id:"show-all-columns-in-table",level:4},{value:"UPDATE",id:"update",level:3},{value:"Update row",id:"update-row",level:4},{value:"DESCRIBE",id:"describe",level:3},{value:"foreign key",id:"foreign-key-2",level:2},{value:"Built-in numeric functions",id:"built-in-numeric-functions",level:2},{value:"ABS()",id:"abs",level:3},{value:"ACOS()",id:"acos",level:3},{value:"ASIN()",id:"asin",level:3},{value:"ATAN()",id:"atan",level:3},{value:"ATAN2()",id:"atan2",level:3},{value:"COS()",id:"cos",level:3},{value:"SIN()",id:"sin",level:3},{value:"TAN()",id:"tan",level:3},{value:"AVG(column)",id:"avgcolumn",level:3},{value:"CEILING()",id:"ceiling",level:3},{value:"COUNT(column)",id:"countcolumn",level:3},{value:"DEGREES()",id:"degrees",level:3},{value:"EXP()",id:"exp",level:3},{value:"FLOOR()",id:"floor",level:3},{value:"LOG()",id:"log",level:3},{value:"MAX(column)",id:"maxcolumn",level:3},{value:"MIN(column)",id:"mincolumn",level:3},{value:"MOD()",id:"mod",level:3},{value:"PI()",id:"pi",level:3},{value:"POWER()",id:"power",level:3},{value:"RADIANS()",id:"radians",level:3},{value:"RAND()",id:"rand",level:3},{value:"ROUND()",id:"round",level:3},{value:"SQRT()",id:"sqrt",level:3},{value:"STD()",id:"std",level:3},{value:"SUM(column)",id:"sumcolumn",level:3},{value:"TRUNCATE",id:"truncate",level:3},{value:"Special functions to get values",id:"special-functions-to-get-values",level:2},{value:"NOW()",id:"now",level:3},{value:"Query example",id:"query-example",level:2},{value:"Alter table",id:"alter-table",level:3},{value:"Rename table",id:"rename-table",level:4},{value:"Add column",id:"add-column",level:4},{value:"Modify column data definition",id:"modify-column-data-definition",level:4},{value:"Rename column and / or modify data definition",id:"rename-column-and--or-modify-data-definition",level:4},{value:"Delete column",id:"delete-column",level:4},{value:"NodeJS configuration",id:"nodejs-configuration",level:2}],s={toc:m};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mysql-cheats"},"MySQL Cheats"),(0,n.kt)("h2",{id:"starting-and-stopping-the-mysql-server"},"Starting and Stopping the MySQL Server"),(0,n.kt)("h3",{id:"view-server-status"},"View server status"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"linux",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"sudo service mysql status"))),(0,n.kt)("li",{parentName:"ul"},"mac",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"brew services list")))),(0,n.kt)("h3",{id:"start-mysql-server"},"Start MySQL Server"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"linux",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"sudo service mysql start"))),(0,n.kt)("li",{parentName:"ul"},"mac",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"brew services start mysql")))),(0,n.kt)("h3",{id:"stop-mysql-server"},"Stop MySQL Server"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"linux",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"sudo service mysql stop"))),(0,n.kt)("li",{parentName:"ul"},"mac",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"brew services stop mysql")))),(0,n.kt)("h2",{id:"to-create-mysql-database-and-users-follow-these-steps"},"To create MySQL database and users, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"At the command line, log in to MySQL as the root user:",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"mysql -u root -p"))),(0,n.kt)("li",{parentName:"ol"},"List all users",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"SELECT host, user FROM mysql.user;"))),(0,n.kt)("li",{parentName:"ol"},"Create new user within the MySQL shell",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"CREATE USER 'newuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';"))),(0,n.kt)("li",{parentName:"ol"},"Grant privileges",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"To grant ALL privileges",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"GRANT ALL PRIVILEGES ON ",(0,n.kt)("em",{parentName:"p"}," . ")," TO 'newuser'@'localhost';"))))),(0,n.kt)("li",{parentName:"ol"},"Reload privilegers for changes to take effect",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"FLUSH PRIVILEGES;"))),(0,n.kt)("li",{parentName:"ol"},"Logout",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"quit"))),(0,n.kt)("li",{parentName:"ol"},"Relog in to new user",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"mysql -u ","[username]"," -p"))),(0,n.kt)("li",{parentName:"ol"},"Run SQL file")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"from terminal (ignore sudo if not required)",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"sudo mysql < sqlscript.sql"))),(0,n.kt)("li",{parentName:"ul"},"from mysql",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"source path/sqlscript.sql;")))),(0,n.kt)("h2",{id:"connect-app-to-mysql"},"Connect app to mysql"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Set native password",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"mysql -u root -p")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';"))))),(0,n.kt)("h2",{id:"connect-app-to-docker-mysql"},"Connect app to docker mysql"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"run docker container if not runned",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"docker run --name=mysql-docker -e MYSQL_ROOT_PASSWORD=password -d -p 3306:3306 mysql"))),(0,n.kt)("li",{parentName:"ol"},"Set native password",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker exec -it mysql-docker mysql -u root -ppassword -e \"ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';\"")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"mysql -h 127.0.0.1 -u root -ppassword -e \"ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';\"")," (needs mysql-client)"))),(0,n.kt)("li",{parentName:"ol"},"Set host as ",(0,n.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," in the app"),(0,n.kt)("li",{parentName:"ol"},"if running on PORT other than ",(0,n.kt)("inlineCode",{parentName:"li"},"3306"),", need to set PORT in the app (ignore if using default mysql PORT)")),(0,n.kt)("h2",{id:"run-query-on-command-line-remove--h-127001-if-not-using-docker"},"Run query on command line (remove -h 127.0.0.1 if not using docker)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"creating database",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'mysql -h 127.0.0.1 -u root -p -e "CREATE DATABASE databaseName;";')))),(0,n.kt)("li",{parentName:"ul"},"Use database and run query",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'mysql -h 127.0.0.1 -u root -p databaseName -e "SELECT * FROM tableName;"'))))),(0,n.kt)("h2",{id:"grant-different-user-permissions"},"Grant Different User Permissions"),(0,n.kt)("h3",{id:"types-of-permissions"},"Types of permissions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ALL PRIVILEGES- as we saw previously, this would allow a MySQL user full access to a designated database (or if no database is selected, global access across the system)")),(0,n.kt)("h3",{id:"grant-permissions"},"Grant permissions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GRANT OPTION- allows them to grant or remove other users' privileges",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"GRANT type_of_permission ON database_name.table_name TO \u2018username\u2019@'localhost\u2019;"))),(0,n.kt)("li",{parentName:"ul"},"Review a user\u2019s current permissions",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"SHOW GRANTS username;"))),(0,n.kt)("li",{parentName:"ul"},"Delete a user",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"DROP USER \u2018username\u2019@\u2018localhost\u2019;")))),(0,n.kt)("h3",{id:"revoke-permission"},"Revoke permission"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"REVOKE type_of_permission ON database_name.table_name FROM \u2018username\u2019@\u2018localhost\u2019;"),(0,n.kt)("h2",{parentName:"blockquote",id:"change-password"},"Change password"),(0,n.kt)("p",{parentName:"blockquote"},"mysqladmin -u myUsername password 'yourNewPassword'"),(0,n.kt)("h2",{parentName:"blockquote",id:"enable-use-of-authentication-via-password-for-nodejs-with-mysql"},"Enable use of Authentication via password for nodejs with MySql"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"At MySql command line")),(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"ALTER USER 'username'@'localhost' IDENTIFIED BY 'your new password';"),(0,n.kt)("li",{parentName:"ol"},"ALTER USER 'username'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your new password';")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"if the above is done, need to login with host",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"normally hostname = localhost\nmysql -u ","[username]"," -h ","[hostname]"," -p")))),(0,n.kt)("h2",{parentName:"blockquote",id:"change-mysql-default-settings"},"Change MySql default settings"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"View SQL mode values\nSELECT @@sql_mode;"),(0,n.kt)("li",{parentName:"ul"},"Adding only one mode to sql_mode without removing existing ones:\nSET sql_mode=(SELECT CONCAT(@@sql_mode,',<mode_to_add>'));"),(0,n.kt)("li",{parentName:"ul"},"Removing only a specific mode from sql_mode without removing others:\nSET sql_mode=(SELECT REPLACE(@@sql_mode,'<mode_to_remove>',''));"),(0,n.kt)("li",{parentName:"ul"},"example: disable MySql \"only_full_group_by\" mode\nSET sql_mode=(SELECT REPLACE(@@sql_mode, 'ONLY_FULL_GROUP_BY', ''));"),(0,n.kt)("li",{parentName:"ul"},"List all databases\nshow databases;"),(0,n.kt)("li",{parentName:"ul"},"Create database\nCREATE DATABASE dbname;"),(0,n.kt)("li",{parentName:"ul"},"Use database\nUSE dbname;"),(0,n.kt)("li",{parentName:"ul"},"Delete database\nDROP DATABASE dbname;")),(0,n.kt)("h2",{parentName:"blockquote",id:"data-types"},"Data types"),(0,n.kt)("h3",{parentName:"blockquote",id:"comments"},"Comments"),(0,n.kt)("h4",{parentName:"blockquote",id:"singe-line"},"Singe line"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"# comment 1\n-- comment 2\n")),(0,n.kt)("h4",{parentName:"blockquote",id:"multi-line"},"multi line"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"/*\nmulti-line\n*/\n")),(0,n.kt)("h3",{parentName:"blockquote",id:"constraint"},"Constraint"),(0,n.kt)("h4",{parentName:"blockquote",id:"primary-key"},"PRIMARY KEY"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"values in this column are unique, and each value can be used to identify a single row in this table")),(0,n.kt)("h4",{parentName:"blockquote",id:"autoincrement"},"AUTOINCREMENT"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"For integer values, this means that the value is automatically filled in and incremented with each row insertion"),(0,n.kt)("li",{parentName:"ul"},"Not supported in all databases")),(0,n.kt)("h4",{parentName:"blockquote",id:"unique"},"UNIQUE"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"values in this column have to be unique, can't insert another row with the same value in this column as another row in the table"),(0,n.kt)("li",{parentName:"ul"},"Differs from the ",(0,n.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY")," in that it doesn't have to be a key for a row in the table.")),(0,n.kt)("h4",{parentName:"blockquote",id:"not-null"},"NOT NULL"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"inserted value can not be NULL")),(0,n.kt)("h4",{parentName:"blockquote",id:"check-expression"},"CHECK (expression)"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"allows runing of complex expression to test whether the values inserted are valid"),(0,n.kt)("li",{parentName:"ul"},"e.g.: check that values are positive, or greater than a specific size, or start with a certain prefix, etc.")),(0,n.kt)("h4",{parentName:"blockquote",id:"foreign-key"},"FOREIGN KEY"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"a consistency check which ensures that each value in this column corresponds to another value in a column in another table"),(0,n.kt)("li",{parentName:"ul"},"e.g.: if there are two tables, one listing all Employees by ID,",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"and another listing their payroll information,"),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"FOREIGN KEY")," can ensure that every row in the payroll table corresponds to a valid employee in the master Employee list")))),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"CREATE TABLE IF NOT EXISTS `table1_table2` (  -- many-to-many\n  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,\n  `table1_id` INT UNSIGNED NOT NULL,\n  `table2_id` INT UNSIGNED NOT NULL,\n  FOREIGN KEY (table1_id) REFERENCES table1(id),\n  FOREIGN KEY (table2_id) REFERENCES table2(id)\n);\n")),(0,n.kt)("h3",{parentName:"blockquote",id:"operator-types"},"Operator types"),(0,n.kt)("h4",{parentName:"blockquote",id:"-----"},"=, !=, <, <=, >, >="),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"standard numerical operators")),(0,n.kt)("h4",{parentName:"blockquote",id:"betweenand"},"BETWEEN...AND..."),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"number is within range of 2 values (inclusive)"),(0,n.kt)("li",{parentName:"ul"},"eg: columnname BETWEEN 1 AND 10")),(0,n.kt)("h4",{parentName:"blockquote",id:"not-"},"NOT, !"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"inverse the value")),(0,n.kt)("h4",{parentName:"blockquote",id:"in"},"IN"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"number exists in a list"),(0,n.kt)("li",{parentName:"ul"},"eg: columnname IN (1,5,8)")),(0,n.kt)("h4",{parentName:"blockquote",id:"and-"},"AND, &&"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},'SELECT * FROM table WHERE columnname1 = "something" && (columnname2="something1" || columnname2="something2");\n')),(0,n.kt)("h4",{parentName:"blockquote",id:"or-"},"OR, &&"),(0,n.kt)("h4",{parentName:"blockquote",id:"like"},"LIKE"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"case insensitive exact string comparison")),(0,n.kt)("h4",{parentName:"blockquote",id:""},"%"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"used anywhere in a string to match a sequence of 0 or more characters"),(0,n.kt)("li",{parentName:"ul"},'eg: match any string that ends with "AT"\ncolumnname LIKE "%AT"'),(0,n.kt)("li",{parentName:"ul"},'eg: match any string that contains "AT"\ncolumnname LIKE "%AT%"')),(0,n.kt)("h3",{parentName:"blockquote",id:"boolean-types"},"Boolean types"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"represented as integer values of 0 and 1")),(0,n.kt)("h3",{parentName:"blockquote",id:"numeric-types"},"Numeric types"),(0,n.kt)("h4",{parentName:"blockquote",id:"tinyint"},"TINYINT"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"127 to -128")),(0,n.kt)("h4",{parentName:"blockquote",id:"smallint"},"SMALLINT"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"32,768 to -32,767")),(0,n.kt)("h4",{parentName:"blockquote",id:"medium-int"},"MEDIUM INT"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"8,388,608 to -8,388,608")),(0,n.kt)("h4",{parentName:"blockquote",id:"int"},"INT"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"2^31 to -2^31 - 1")),(0,n.kt)("h4",{parentName:"blockquote",id:"bigint"},"BIGINT"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"2^63 to -2^63 - 1")),(0,n.kt)("h4",{parentName:"blockquote",id:"float"},"FLOAT"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"decimal spaces, 1.1E38 to -1.1E38")),(0,n.kt)("h4",{parentName:"blockquote",id:"double"},"DOUBLE"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"decimal spaces, 1.7E308 to -1.7E308")),(0,n.kt)("h4",{parentName:"blockquote",id:"real"},"REAL"),(0,n.kt)("h3",{parentName:"blockquote",id:"string-types"},"String types"),(0,n.kt)("h4",{parentName:"blockquote",id:"char"},"CHAR"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"a character string with a fixed length")),(0,n.kt)("h4",{parentName:"blockquote",id:"varchar"},"VARCHAR"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"a character string with a length that's variable")),(0,n.kt)("h4",{parentName:"blockquote",id:"text"},"TEXT"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"for strings that we do not know the length")),(0,n.kt)("h4",{parentName:"blockquote",id:"blob"},"BLOB"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"can contain 2^16 bytes of data")),(0,n.kt)("h4",{parentName:"blockquote",id:"enum"},"ENUM"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"a character string that has a limited number of total values, which must be defined, can contain only 1 legal value")),(0,n.kt)("h4",{parentName:"blockquote",id:"set"},"SET"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"a list of legal possible strings, can contain multiple values")),(0,n.kt)("h3",{parentName:"blockquote",id:"date--time-types"},"Date & Time types"),(0,n.kt)("h4",{parentName:"blockquote",id:"date"},"DATE"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"YYYY-MM-DD")),(0,n.kt)("h4",{parentName:"blockquote",id:"time"},"TIME"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"HH:MM:SS")),(0,n.kt)("h4",{parentName:"blockquote",id:"datetime"},"DATETIME"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"YYYY-MM-DD HH:MM:SS")),(0,n.kt)("h4",{parentName:"blockquote",id:"timestamp"},"TIMESTAMP"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"YYYYMMDDHHMMSS")),(0,n.kt)("h4",{parentName:"blockquote",id:"year"},"YEAR"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"YYYY")),(0,n.kt)("h3",{parentName:"blockquote",id:"null-types"},"Null types"),(0,n.kt)("h4",{parentName:"blockquote",id:"null"},"NULL"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"should reduce NULL values as they require special attention when constructing queries, constraints, and when processing the results")),(0,n.kt)("h2",{parentName:"blockquote",id:"keywords"},"Keywords"),(0,n.kt)("h3",{parentName:"blockquote",id:"signed"},"SIGNED"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"allow positive and negative values")),(0,n.kt)("h4",{parentName:"blockquote",id:"unsigned"},"UNSIGNED"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"allow only positive values")),(0,n.kt)("h3",{parentName:"blockquote",id:"distinct"},"DISTINCT"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"blindly remove duplicate rows (better to use GROUP BY)")),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"SELECT DISTINCT cdolumnname;\n")),(0,n.kt)("h3",{parentName:"blockquote",id:"group-by"},"GROUP BY"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"grouping rows that have the same value in the column specified")),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"SELECT * FROM table GROUP BY columnname1;\n")),(0,n.kt)("h3",{parentName:"blockquote",id:"where"},"WHERE"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"set conditions for rows yet to be grouped")),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},'SELECT * FROM table WHERE columnname1 = "some value";\n')),(0,n.kt)("h3",{parentName:"blockquote",id:"having"},"HAVING"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"set conditions for grouped rows")),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},'SELECT * FROM table GROUP BY columnname1 HAVING columnname1 = "some value";\n')),(0,n.kt)("h3",{parentName:"blockquote",id:"order-by"},"ORDER BY"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"sort rows by alpha-numeric")),(0,n.kt)("h4",{parentName:"blockquote",id:"asc"},"ASC"),(0,n.kt)("h4",{parentName:"blockquote",id:"desc"},"DESC"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"SELECT * FROM table ORDER BY columnname DESC;\n")),(0,n.kt)("h3",{parentName:"blockquote",id:"limit"},"LIMIT"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"reduce the number of rows to return")),(0,n.kt)("h3",{parentName:"blockquote",id:"offset"},"OFFSET"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"specify where to begin counting the number of rows from")),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"SELECT * FROM table LIMIT 5 OFFSET 3;\n")),(0,n.kt)("h3",{parentName:"blockquote",id:"is"},"IS"),(0,n.kt)("h3",{parentName:"blockquote",id:"as"},"AS"),(0,n.kt)("h3",{parentName:"blockquote",id:"default"},"DEFAULT"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"set default value")),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},'ALTER TABLE table1 ADD COLUMN columnname2 TEXT DEFAULT "some value";\n')),(0,n.kt)("h2",{parentName:"blockquote",id:"joins"},"JOINs"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"combine row data across 2 separate tables using unique key")),(0,n.kt)("h3",{parentName:"blockquote",id:"inner-join-same-as-join"},"INNER JOIN (same as JOIN)"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"matches rows from the 1st table and the 2nd table, which have the same key to create a result row with the combined columns from both table")),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"# INNER JOIN\nSELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.id;\n"))),(0,n.kt)("h1",{id:"join"},"JOIN"),(0,n.kt)("p",null,"SELECT * FROM table1 JOIN table2 ON table1.id = table2.id;"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"### OUTER JOINs\n- use if 2 tables have asymmetric data\n- need to write additional logic to deal with NULLs in the result and constraints\n- OUTER is used to enable SQL-92 compatibility\n#### LEFT JOIN (same as LEFT OUTER JOIN)\n- includes rows from table1 regardless of whether a matching row is found in table2\n```mysql\nSELECT * FROM table1 LEFT JOIN table2 ON columnname1 = columnname2;\n")),(0,n.kt)("h4",{id:"right-join-same-as-right-outer-join"},"RIGHT JOIN (same as RIGHT OUTER JOIN)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"includes rows from table2 regardless of whether a matching row is found in table1")),(0,n.kt)("h4",{id:"full-join-same-as-full-outer-join"},"FULL JOIN (same as FULL OUTER JOIN)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"rows from both tables are kept, regardless of whether a matching row exists in the outer table")),(0,n.kt)("h2",{id:"commands"},"Commands"),(0,n.kt)("h3",{id:"create"},"CREATE"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"allows them to create new tables or databases")),(0,n.kt)("h3",{id:"create-new-table"},"Create new table"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"CREATE TABLE tablename(\n   columnname1 VARCHAR(30) NOT NULL,\n   id_name INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY\n);\n\n# Check if table exist\nCREATE TABLE IF NOT EXISTS tablename(\n   columnname1 VARCHAR(30) NOT NULL,\n   id_name INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY\n);\n")),(0,n.kt)("h4",{id:"enum-1"},"ENUM"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"CREATE TABLE tablename(\n   columnname1 VARCHAR(30) NOT NULL,\n   type ENUM('A', 'B') NOT NULL,\n   id_name INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY\n);\n")),(0,n.kt)("h4",{id:"foreign-key-1"},"Foreign key"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"CREATE TABLE tablename(\n   columnname1 VARCHAR(30) NOT NULL,\n   foreign_key_name INT UNSIGNED NOT NULL,\n   id_name INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY\n);\n")),(0,n.kt)("h4",{id:"date-1"},"Date"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"CREATE TABLE tablename(\n   columnname1 VARCHAR(30) NOT NULL,\n   date DATE NOT NULL,\n   id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY\n);\n")),(0,n.kt)("h4",{id:"unique-id"},"Unique id"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"CREATE TABLE tablename(\n   table1_id INT UNSIGNED NOT NULL,\n   table2_id INT UNSIGNED NOT NULL,\n   PRIMARY KEY(table1_id, table2_id)\n);\n")),(0,n.kt)("h3",{id:"drop"},"DROP"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"allows them to them to delete tables or databases")),(0,n.kt)("h4",{id:"delete-table"},"Delete table"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"DROP TABLE tablename;\n")),(0,n.kt)("h3",{id:"delete"},"DELETE"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"allows them to delete rows from tables")),(0,n.kt)("h4",{id:"delete-row"},"Delete row"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"DELETE FROM tablename WHERE condition;\n\n# example\nDELETE FROM todos WHERE todo_id=2;\n")),(0,n.kt)("h3",{id:"insert"},"INSERT"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"allows them to insert rows into tables")),(0,n.kt)("h3",{id:"insert-values-to-table"},"Insert values to table"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"# Insert statement with values for ALL columns\nINSERT INTO mytable\nVALUES (value1, value2, \u2026),\n       (anothervalue1, anothervalue2, \u2026),\n       \u2026;\n       \n# Insert statement with specific columns\nINSERT INTO mytable\n(column, another_column, \u2026)\nVALUES (value1, value2, \u2026),\n      (anothervalue1, anothervalue2, \u2026),\n      \u2026;\n")),(0,n.kt)("h3",{id:"select"},"SELECT"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"allows them to use the SELECT command to read through databases")),(0,n.kt)("h4",{id:"show-all-columns-in-table"},"Show all columns in table"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"SELECT * FROM tablename;\n")),(0,n.kt)("h3",{id:"update"},"UPDATE"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"allow them to update table rows")),(0,n.kt)("h4",{id:"update-row"},"Update row"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},'# Single update\nUPDATE tablename SET columnname=value WHERE condition;\n\n# example\nUPDATE todos SET todo="study programming" WHERE todo_id=3;\n\n# Mutiple updates\nUPDATE tablename\nSET columnname1=value,\n    columnname2=value\nWHERE condition;\n')),(0,n.kt)("h3",{id:"describe"},"DESCRIBE"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"see description of table created")),(0,n.kt)("h2",{id:"foreign-key-2"},"foreign key"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"used to make references to the primary key of another table"),(0,n.kt)("li",{parentName:"ul"},"can have a different name from the primary key name"),(0,n.kt)("li",{parentName:"ul"},"value can have NULL"),(0,n.kt)("li",{parentName:"ul"},"does not have to be unique")),(0,n.kt)("h2",{id:"built-in-numeric-functions"},"Built-in numeric functions"),(0,n.kt)("h3",{id:"abs"},"ABS()"),(0,n.kt)("h3",{id:"acos"},"ACOS()"),(0,n.kt)("h3",{id:"asin"},"ASIN()"),(0,n.kt)("h3",{id:"atan"},"ATAN()"),(0,n.kt)("h3",{id:"atan2"},"ATAN2()"),(0,n.kt)("h3",{id:"cos"},"COS()"),(0,n.kt)("h3",{id:"sin"},"SIN()"),(0,n.kt)("h3",{id:"tan"},"TAN()"),(0,n.kt)("h3",{id:"avgcolumn"},"AVG(column)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Finds the average numerical value in the specified column for all rows in the group")),(0,n.kt)("h3",{id:"ceiling"},"CEILING()"),(0,n.kt)("h3",{id:"countcolumn"},"COUNT(column)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"counts the number of rows in the group if no column name is specified"),(0,n.kt)("li",{parentName:"ul"},"Otherwise, count the number of rows in the group with non-NULL values in the specified column")),(0,n.kt)("h3",{id:"degrees"},"DEGREES()"),(0,n.kt)("h3",{id:"exp"},"EXP()"),(0,n.kt)("h3",{id:"floor"},"FLOOR()"),(0,n.kt)("h3",{id:"log"},"LOG()"),(0,n.kt)("h3",{id:"maxcolumn"},"MAX(column)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Finds the largest numerical value in the specified column for all rows in the group\n")))),(0,n.kt)("h3",{id:"mincolumn"},"MIN(column)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Finds the smallest numerical value in the specified column for all rows in the group")),(0,n.kt)("h3",{id:"mod"},"MOD()"),(0,n.kt)("h3",{id:"pi"},"PI()"),(0,n.kt)("h3",{id:"power"},"POWER()"),(0,n.kt)("h3",{id:"radians"},"RADIANS()"),(0,n.kt)("h3",{id:"rand"},"RAND()"),(0,n.kt)("h3",{id:"round"},"ROUND()"),(0,n.kt)("h3",{id:"sqrt"},"SQRT()"),(0,n.kt)("h3",{id:"std"},"STD()"),(0,n.kt)("h3",{id:"sumcolumn"},"SUM(column)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Finds the sum of all numerical values in the specified column for the rows in the group")),(0,n.kt)("h3",{id:"truncate"},"TRUNCATE"),(0,n.kt)("h2",{id:"special-functions-to-get-values"},"Special functions to get values"),(0,n.kt)("h3",{id:"now"},"NOW()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"get current time, when data is entered to database")),(0,n.kt)("h2",{id:"query-example"},"Query example"),(0,n.kt)("h3",{id:"alter-table"},"Alter table"),(0,n.kt)("h4",{id:"rename-table"},"Rename table"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"# rename 1 table\nRENAME TABLE oldtablename to newtablename;\n\n# rename multiple tables\nRENAME TABLE\ntablename1 to newtablename1,\ntablename2 to newtablename2;\n")),(0,n.kt)("h4",{id:"add-column"},"Add column"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"ALTER TABLE tablename \nADD columnname2 INT NOT NULL AFTER columnname1,\nADD columnname3 INT NOT NULL AFTER columnname1;\n")),(0,n.kt)("h4",{id:"modify-column-data-definition"},"Modify column data definition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"ALTER TABLE tablename MODIFY columnname newdatatype;\n")),(0,n.kt)("h4",{id:"rename-column-and--or-modify-data-definition"},"Rename column and / or modify data definition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"# Rename column AND modify data definition\nALTER TABLE tablename CHANGE columnname newcolumnname newdatatype;\n\n# Rename column\nALTER TABLE tablename CHANGE columnname newcolumnname null;\n")),(0,n.kt)("h4",{id:"delete-column"},"Delete column"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mysql"},"# Drop 1 column\nALTER TABLE tablename DROP columnname1;\n\n# Drop 1 or more columns\nALTER TABLE tablename DROP COLUMN columnname1;\n")),(0,n.kt)("h2",{id:"nodejs-configuration"},"NodeJS configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"install mysql with promise support",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"yarn add promise-mysql")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'import mysql from "promise-mysql";\n\nconst db = mysql.createConnection({\n  host: process.env.DB_HOST,\n  user: process.env.DB_USER,\n  password: process.env.DB_PASSWORD,\n  database: process.env.DB_DATABASE,\n});\n\nexport default async function query(queryStatement, arrValues) {\n  let conn;\n  try {\n    conn = await db;\n    return await conn.query(queryStatement, arrValues);\n  } catch (e) {\n    throw new Error(`db error: ${e}`);\n  } finally {\n    await conn.end();\n  }\n}\n')))}p.isMDXComponent=!0}}]);