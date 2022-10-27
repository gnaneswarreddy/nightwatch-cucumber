
const { Given, Then, Before} = require('@cucumber/cucumber');

Before(() => {
  this.google = browser.page.googlePage();
})

Given(/^I open Google's search page$/, () => {
  return this.google.openUrl();
});


Then(/^the title is \"([^\"]*)\"$/, title => {
  return this.google.verifyTitle(title);
});

Then(/^the Google search form exists$/, () => {
  return this.google.verifySearch();
});

