/* eslint-disable */
describe('ui test',()=>{

        let email = Math.random().toString() + "abc" +"@gmail.com"
        let password = "password1"

        // let email = "nigup16@gmail.com"
        // let password = "nitya1234"
        
     it('registration of user',() =>{
            cy.visit('http://localhost:3000/')

            //close the popup
            cy.get('.close-dialog').click(-50,-50 ,{force:true})
            
            //click on Account button
            cy.get('#navbarAccount').click()
            
            //click on Login button
            cy.get('#navbarLoginButton').click()
            
            //click on 'not yet a customer?'
            cy.wait(5000)
            cy.get('#newCustomerLink').click()
            
            //pass the random generate emailid and password
            cy.get('#emailControl').type(email)
            cy.get('#passwordControl').type(password)
            cy.get('#repeatPasswordControl').type(password)
            
            //click on security question
            cy.get('#mat-select-value-3').click()
            cy.get('#mat-option-6').click()
            
            //pass security answer control
            cy.get('#securityAnswerControl').type('hello')
            
            //click on register button
            cy.get('#registerButton').click()

     })

    it('user login',() =>{
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#loginButton').click()

        cy.url().should('include', '/search')

    })

})
