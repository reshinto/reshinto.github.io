# ASP.NET CORE terminal guide

## Create a new webapi

&gt; dotnet new webapi -n appName.API

## Run project

&gt; dotnet run

## Run project with auto update

&gt; dotnet watch run

## Connect and Manage database

- requires installation of "dotnet-ef"
  &gt; dotnet tool install --global dotnet-ef
- view help
  &gt; dotnet ef -h
- add migration
  - requires installation of nuget packages, install via nuget in project
    _ "Microsoft.EntityFrameworkCore"
    _ "Microsoft.EntityFrameworkCore.Design" \* "Microsoft.EntityFrameworkCore.NameOfSqlDatabase" -&gt; eg "Microsoft.EntityFrameworkCore.Sqlite"
    &gt; dotnet ef migrations add MigrationName
- remove migration
  &gt; dotnet ef migrations remove MigrationName

## Apply Migration

&gt; dotnet ef database update
