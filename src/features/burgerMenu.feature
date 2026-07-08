Feature: Burger Menu

     As a user
     I want to click on the burger menu
     so that I can navigate to other pages

     @loggedIn
     Scenario: Navigate to the Logout page using the burger menu
          Then the user should see the 'Products' page
          When the user clicks on the burger menu icon
          Then the user should see the burger menu options:
               | All Items       |
               | About           |
               | Logout          |
               | Reset App State |
          When the user clicks on the 'Logout' option from the burger menu
          Then the user should see the 'Login' page
