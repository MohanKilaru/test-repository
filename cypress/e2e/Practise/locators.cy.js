describe("Loactors",()=>{

    it("Element testing",()=>{

        cy.visit("https://www.freshworks.com/", {waitForAnimations: false}, {failOnStatusCode: false})
        cy.contains('Support').click({force: true})

        cy.url().should('include', '/support')
        
        cy.get('div.container.font-color-light.banner-content.l-banner h1:nth-of-type(2)')
        .should('be.visible')
        .and('have.text','Need support? We are here to help')
        .and('have.length',1)

        cy.get('ul.footer-nav li')
        .should('have.length', 25)
        .find("a[href*='footer']").should('have.length',7)

        cy.get('.icon-arrow-down nav-sub-toggle').select(0)
        
        
        

    })

})