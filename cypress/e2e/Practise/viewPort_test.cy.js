describe('Testing different function',()=>{

    before(('Sample Text'),()=>{
        console.log('Runnings tests')
    })

    beforeEach(('Navigating to the URL'),()=>{
        cy.visit("https://duckduckgo.com/")
    })

    it(('Open in mackbook-13'),()=>{
        cy.viewport('iphone-6')
        cy.screenshot()
        cy.wait(200)
    })

    it(('Open in iphone-6'),()=>{
        cy.viewport('iphone-6')
        cy.screenshot()
        cy.wait(200)
    })

    it(('Open in macbook-15'),()=>{
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })
    
})