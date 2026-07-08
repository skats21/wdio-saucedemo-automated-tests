Feature: Products page

     As a user
     I want to see the products page after logging in
     so that I can view the available products

     @loggedIn
     Scenario: User should see the products page after logging in
          Then the user should see the 'Products' page
          And the user should see 6 products
          And each product should have a name, description, and price

     @loggedIn
     Scenario: User sort products by price (low to high)
          When the user sorts products by "Price (low to high)"
          Then the products should be sorted by price in ascending order

     @loggedIn
     Scenario: User sort products by price (high to low)
          When the user sorts products by "Price (high to low)"
          Then the products should be sorted by price in descending order