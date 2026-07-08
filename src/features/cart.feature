@clearSession
Feature: Add product to cart

     As a user
     I want to add/remove a product to the cart
     so that I can purchase it later

     @loggedIn
     Scenario: Add product to cart
          Then the user should see the 'Products' page
          When the user adds 'Sauce Labs Backpack' to the cart
          Then the user should see that there is 1 item in the cart

     @loggedIn
     Scenario: Add multiple products to cart
          Then the user should see the 'Products' page
          When the user adds 'Sauce Labs Backpack' to the cart
          And the user adds 'Sauce Labs Bike Light' to the cart
          Then the user should see that there are 2 items in the cart
          When the user removes 'Sauce Labs Bike Light' from the cart
          Then the user should see that there is 1 item in the cart
