const { Given, When, Then } = require("@cucumber/cucumber");
// import expect for assertion
const { expect } = require("@playwright/test");

Given("user launch the Application", async function () {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

When("user enter username as {string} and password as {string}", async function(username, password) {
   await page.locator('//input[@name="username"]').fill(username);
    await page.locator('//input[@name="password"]').fill(password);
  
})

When("user clicks on login button", async function () {
  await page.locator('//button[@type="submit"]').click();
})

Then("user should be navigated to dashboard page", async function () {
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
})

Then("user should login error message", async function () {
  await expect (page.locator("//p[text()='Invalid credentials']")).toBeVisible();
})
