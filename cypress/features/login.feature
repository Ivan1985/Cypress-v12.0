Feature: Check Login user

    Scenario: 1. Login with empty username and password
        Given Navigate to the web site
        When Login with empty username and pass
        Then Error message should be visible

    Scenario: 2. Login succesufully
        Given Navigate to the web site
        When Login with correct username and pass
        Then Open Products page

    Scenario: 3. Logout succesufully
        Given Navigate to the web site
        When Login with correct username and pass
        Then Open Products page
        Then Logout user
