Feature: Verify Add Employee functionality

     Add Employee functionality positive and negative tests

    Background: Navigate add employee page

        Given user launch the Application
        When user enter username as "Admin" and password as "admin123"
        And user clicks on login button
        Then user should be navigated to dashboard page
        When user clicks on PIM Menu
        And user clicks on Add Employee submenu

    Scenario: Verify Adding Employee with Mandatory fields


        When user enter firstname as "<firstname>" and last name as "<lastname>"
        And user clicks on save button
        Then employee should be created successfully

        Examples:
            | firstname | lastname |
            | Praveen   | T        |
            | Sairo     | N        |
            | Teja      | P        |


    Scenario: Verify Error Messages for Mandatory fields

        And user clicks on save button
        Then user should see error message for firstname and lastname fields