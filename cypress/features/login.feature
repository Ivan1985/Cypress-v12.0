Feature: Check Login user

    Scenario: 1. Login with empty username and password
        Given Navigate to web site
        When Enter login credentials
        Then Should be logged in
