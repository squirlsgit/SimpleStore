# Introduction

This test will assess your capabilities within the Angular Framework. As this test is mainly focused on Angular, you are provided with everything else (predefined css, html). The test has been made with Angular 6, as this is the version currently being used at HD.ca. You are free to code however you like, but you will be graded based on the requirements below. Each requirement has points totalling 80. Part marks may be given per a requirement. If your application fails to launch, you will automatically fail and not be considered further. No points will be awarded for any features outside of the requirements. You have 48 hours.

# Startup

Make sure your versions are these or higher: 

node version: >= 9.8.0
npm version: >= 6.2.0

## Run these commands to get started:

npm i
npm run mock-server
npm start

The mock server endpoints include '/products' which will return you a json of all the products, and '/products/:id', which will return you a json of that specific product.

# Instructions

You have been allocated to a project already in progress. Some of the boilerplate for this project has already been done for you. It contains AppModule, CoreModule, SharedModule, and three other Modules that are lazy loaded with routes (/product:id and /products and /landing). The landing page for the app contains a list of links to various products. The ProductsModule (/products) is only there for demonstration purposes (think of it as your mocks) and contains the template code complete with CSS for each product and it’s variation, which corresponds to the data found in db.json. The ProductModule is your main concern and it is where most of your additions will go.

# Requirements

1. When a user clicks on a product from the landing page, the correct product is shown in the product route (5)
2. Makes use of structural directives (such as ngIf or ngFor) to form the DOM (5)
3. Makes use of string interpolation to display the data (5)
4. Implements appropriately partialized components (5)
5. Implements at least one smart component (ie page or containers) to make use of services (5)
6. Implements at least one dumb component(s) for displaying data which is passed via input (5)
7. Formatting (5)
8. Implements json-server for product data (5)

Rxjs / Services
9. Creation of a service to fetch data and return as an observable (5)
10. Implements operators and selectors to map the data accordingly (5)
11. Implements async pipe to input data to components (5)

Ngrx
12. Implements actions (5)
13. Implements reducers (5)
14. Implements effects (5)
15. Implements entity adapter for state creation (5)
16. Implements entity adapter to initialize state (2.5)
17. Implements entity adapter to store state in reducer (2.5)




###### Editor: Nicholas C. Taggart-Janes

# Where to find solutions to the above Requirements

All solutions for UI (that is 1-8 and in part 11) can be found under src/app/modules/product/pages as @product from here on out in this comment section

Solution for 2. can be found in @product/pages/components and in particular @product/pages/components/product
Solution for 3. can also be found here.
Solution for 4. I hope @product/pages/components will suffice for this requirement.
Solution for 5. can be found in @product/pages/components/product and @product/pages/components/rating; rating achieves solution 5 by using the ngrx store service class.
Solution for 6. can be found in @product/pages/components/badge where the badge component recieves a url extension and acquires the correct svg with a simple Input.
Solution for 7. is @product I believe. I did not know if formatting referred to the ... minimalist styling of the pages. 

I did format the product as best I could, but I would describe this as html interpolation, not formatting.

Solution for 8. is <Already Sufficiently Implemented By Initial App>?

Rxjs solutions can be found primarily in src/app/rxjs/ProductsService
Rxjs problem 10 and 11 are tied into the Ngrx implementation though

Ngrx solution can be found primarily in src/app/rxjs/Store.
12-14 solutions can be found in files with those respective names.
Entity adapter solutions can be found in src/app/rxjs/Store/session and src/app/rxjs/Store/reducers and src/app/rxjs/Store/definitions


# Important Comments

Hi to whom it may concern at Home Depot or some associate,

I'm using the online IDE to test that it works (already tested it locally). I am not sure how to go about testing it with the online IDE really, besides ensuring it compiles, 

since I don't think I can access the webapp from where I am, just as I'm not sure what environment the solution will be run in.

However, it seems the addresses used by default are being listened on already. For Node and Angular: 3000 and 8000 respectively. I've changed the port for angular cli to 8400, and it compiles, 

but I'm more nervous to change the port for the proxy server.


# Additional Comments: Might be useful if one is confused about why I implemented components in the way I did.

I sent an email to ask for clarification earlier, but I may not receive a response in time, if at all.

I am confused by what is meant by partialized components. It is not a term I am familiar with, nor is it one I can find easily with google, if at all? 

So I interpretted it based on what I have experience with which is nesting components inside other components for modularity.

I am confused why Requirement 8 is here since it is not clear how I should change the json file or the service based on this and any other requirement.


