describe('sample test',()=>{

  it('Visiting the link',()=>{

      cy.visit("https://www.freshworks.com")

      cy.contains('FREE TRIALS').click({ waitForAnimations: false })
      cy.url().should('include','/products')
    

  })

})