class LoginPage {

  visit() {
    cy.visit('https://www.saucedemo.com/')
  }

  fillUsername(username) {
    cy.get('[data-test="username"]').type(username)
  }

  fillPassword(password) {
    cy.get('[data-test="password"]').type(password)
  }

  clickLogin() {
    cy.get('[data-test="login-button"]').click()
  }

  validateSuccessLogin() {
    cy.url().should('include', '/inventory')
  }

  validateError() {
    cy.get('[data-test="error"]').should('be.visible')
  }

  validateErrorMessage(message) {
  cy.get('[data-test="error"]').should('contain', message)

  }
}

export default new LoginPage()