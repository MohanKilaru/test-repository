describe("Verifying Job status",()=>{

    it("Application Status",()=>{

        cy.visit("https://sky.wd3.myworkdayjobs.com/en-US/sky_careers/userHome");
        cy.get('#input-4').type('saimohankilaru@gmail.com')
        cy.get('#input-5').type('Mohan@1106')
          
        //cy.get('div.css-60etfs').click()

        cy.get(':nth-child(3) > .css-14pfav7').click()
    })


})