import loginPage from '../pages/loginPage'

describe('Teste de Login', () => {

  beforeEach(() => {
    loginPage.visit()
  })

  it('Deve logar com sucesso', () => {
    loginPage.fillUsername('standard_user')
    loginPage.fillPassword('secret_sauce')
    loginPage.clickLogin()
    loginPage.validateSuccessLogin()
  })

  it('Deve mostrar erro ao logar com senha inválida', () => {
    loginPage.fillUsername('standard_user')
    loginPage.fillPassword('senha_errada')
    loginPage.clickLogin()
    loginPage.validateError()
  })

  it('Deve mostrar erro ao logar com usuário inválido', () => {
    loginPage.fillUsername('usuario_errado')
    loginPage.fillPassword('secret_sauce')
    loginPage.clickLogin()
    loginPage.validateError()
  })

  it('Deve mostrar erro ao tentar logar sem preencher campos', () => {
    loginPage.clickLogin()
    loginPage.validateError()
  })

  it('Deve mostrar mensagem correta para senha inválida', () => {
    loginPage.fillUsername('standard_user')
    loginPage.fillPassword('senha_errada')
    loginPage.clickLogin()
    loginPage.validateErrorMessage('Username and password do not match')
  })

  it('Deve adicionar produto ao carrinho', () => {
    // login necessário
    loginPage.fillUsername('standard_user')
    loginPage.fillPassword('secret_sauce')
    loginPage.clickLogin()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('contain', '1')
  })

  it('Deve fazer logout com sucesso', () => {
    // login necessário
    loginPage.fillUsername('standard_user')
    loginPage.fillPassword('secret_sauce')
    loginPage.clickLogin()

    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    
    cy.url().should('include', '/')
  })

})