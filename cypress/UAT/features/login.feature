Feature: To validate OrangeHRM
# Scenario: Validate Login with valid Case
# Given open the browser and Navigatento the Login Page 
# When Enter the Name Admin
# And Enter the password admin123
# And Click on the Login
# Then Login should be Successful

@PositiveTesting
Scenario Outline: Validate Login with valid Case
Given open the browser and Navigatento the Login Page 
When Enter username <name>
And Enter the password <password>
And Click on the Login
Then Login should be Successful

Examples:
| name  | password  |
| Admin | admin123  |
| name  | admnin1234|
@NegativeTesting
Scenario:Test OrangeHRM with invalid data
And Enter the Name Amit
And Enter the password amit
And Click on the 
Then Login should be Successful