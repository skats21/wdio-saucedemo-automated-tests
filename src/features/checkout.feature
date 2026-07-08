
Feature: Checkout

     As a user
     I want to checkout my cart
     so that I can purchase the products

     @loggedIn
     Scenario: Checkout one product in the cart
          Then the user should see the 'Products' page
          When the user adds 'Sauce Labs Backpack' to the cart
          Then the user should see that there is 1 item in the cart
          When the user clicks on the cart icon
          Then the user should see the 'Cart' page
          When the user clicks the checkout button
          Then the user should see the 'CheckoutInformation' page
          When the user sets the value 'Sakis' in the 'First Name' field
          And the user sets the value 'Kats' in the 'Last Name' field
          And the user sets the value '35' in the 'Postal Code' field
          And the user clicks the continue button
          Then the user should see the 'CheckoutOverview' page
          When the user clicks the finish button
          Then the user should see the 'CheckoutComplete' page
