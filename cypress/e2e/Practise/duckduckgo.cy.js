//describe('The Home Page', () => {
 // it('successfully loads', () => {
   // cy.visit('http://localhost:8080') // change URL to match your dev URL
  //})
//})

describe("The home page",() => {

    it("Visitng the home page",()=>{

      cy.visit('https://www.duckduckgo.com/');
      cy.get('.logo_homepage').should('have.id','logo_homepage_link');

      cy.get('.badge-link__btn-wrap').
      should('have.text','Add DuckDuckGo to Chrome')
      cy.get('.content-info__title')
      .should('have.text','Privacy Protection For Any Device');

      cy.get('.search-wrap--home').within(()=>{

        cy.get('#search_form_homepage').type('Apple')
        .find('#search_button_homepage').click()

      })

      cy.go('back').go('forward').reload()
      cy.get('.header__logo')
      .should('be.visible')
      cy.get('[name="q"]').should('have.value','Apple').click()
      .type('{downArrow}',2).click()

    })

})