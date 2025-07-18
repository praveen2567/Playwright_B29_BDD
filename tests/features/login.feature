Feature: Verify Login Functionality 

    This feature tests different login scenarios using valid and invalid credentials

Scenario: Verify login with valid credentials

Given user launch the Application
When user enter username as "Admin" and password as "admin123"
And user clicks on login button
Then user should be navigated to dashboard page


Scenario: Verify login with valid username and invalid password

Given user launch the Application
When user enter username as "Admin" and password as "adminahs123"
And user clicks on login button
Then user should login error message


Scenario: Verify login with invalid username and valid password

Given user launch the Application
When user enter username as "Admiahsn" and password as "admin123"
And user clicks on login button
Then user should login error message


Scenario: Verify login with invalid username and invalid password

Given user launch the Application
When user enter username as "Admiasdn" and password as "adminahs123"
And user clicks on login button
Then user should login error message