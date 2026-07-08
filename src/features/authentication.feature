Feature: Login

     Scenario Outline: As a user, I can log into the sauceDemo application with valid credentials
          Given the user is on the login page
          When the user logins with '<username>' and '<password>'
          Then the user should see the 'Products' page
          Examples:
               | username                | password     |
               | standard_user           | secret_sauce |
               | performance_glitch_user | secret_sauce |

     Scenario: I cannot log into the sauceDemo application with invalid credentials
          Given the user is on the login page
          When the user logins with 'standard_user' and 'invalid_password'
          Then the user should see an error message
