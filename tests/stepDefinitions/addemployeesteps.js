const { Given, When, Then } = require("@cucumber/cucumber");
// import expect for assertion
const { expect } = require("@playwright/test");

 When('user clicks on PIM Menu', async function () {
       await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()    
 })

  When('user clicks on Add Employee submenu', async function () {
      await page.locator("//a[text()='Add Employee']").click()     
});

  When('user enter firstname as {string} and last name as {string}', async function (firstname, lastname) {
    await page.locator('//input[@name="firstName"]').fill(firstname)
    await page.locator('//input[@name="lastName"]').fill(lastname)
});

 When('user clicks on save button', async function () {
     await page.locator('//button[@type="submit"]').click()     
});

Then('employee should be created successfully', async function () {
    await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible()
})

Then('user should see error message for firstname and lastname fields', async function(){
    await expect(page.locator("(//span[text()='Required'])[1]")).toBeVisible()
    await expect(page.locator("(//span[text()='Required'])[2]")).toBeVisible()
})