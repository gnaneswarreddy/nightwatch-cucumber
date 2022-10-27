module.exports = {
  elements: {
    googleInputBox: '//input[@type="text"]',
    searchButton: '(//input[@value="Google Search"])[2]',
    headingText: `//h3[contains(text(),'Nightwatch.js')]`
  },
  commands: [
    {
      openUrl() {
        return this.api.url('http://google.com').pause(2000);
      },

      verifyTitle(title) {
        return this.assert.titleEquals(title)
      },

      verifySearch() {
        return this.assert.visible('input[name="q"]')
      }
    }
  ]
};
