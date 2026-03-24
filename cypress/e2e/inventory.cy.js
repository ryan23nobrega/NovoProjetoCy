import loginPage from '../pages/loginPage'

describe('Fluxos após login', () => {

  beforeEach(() => {
    loginPage.visit()
    loginPage.fillUsername('standard_user')
    loginPage.fillPassword('secret_sauce')
    loginPage.clickLogin()
  })

  it('Deve validar que o login foi feito com sucesso', () => {
    loginPage.validateSuccessLogin()
  })

  it('Deve adicionar produto ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('contain', '1')
  })

  it('Deve fazer logout com sucesso', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('include', '/')
  })

})