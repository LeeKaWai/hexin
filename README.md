# HEXIN Node Framework

This is a node framework that enforces scalability, seperation of concern, and obscuring redundent code while empowering developers with what they need to implement additional features without looking at bloated files. This framework was built with .NET's MVC ideology in mind, and takes ideas from their use of Service & Repository (Repo coming soon) Pattern, Auto-Mapper, Inversion of Control, app_start config.

### Setup

    npm install

### Run

    npm start

|`npm run <script>`    |Description|
|-------------------|-----------|
|`start`            |Serves your app at `localhost:3000`|
|`build`            |Builds the application|
|`test`             |Test the application using mocha|
|`apidoc`           |Build apidoc page to public/docs/|


### Documentation

#### File Scaffolding

    $ npm install -g plop

We use plop to generate scaffolds to maintain consistancy in code and folder structure, as well as speeding up development time.


(Coming Soon)

## Todo
- [ ] Move /views to /app/views
- [ ] Use plop for generating files
- [ ] Enhance User functionalities (reset/change password, upload avatar)
