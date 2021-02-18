/* eslint-disable */

describe('API testing', () => {

    let email = "nigup16@gmail.com"
    let password = "nitya1234"
    // let email = Math.random().toString() + "abc" +"@gmail.com"
    // let password = "password1"
   
    it('Non UI Login', () => {

        cy.request('POST', 'http://localhost:3000/rest/user/login',{
            "email": email,
            "password": password
        }).its('body').then(a =>{
            let usertoken = a.authentication.token

            cy.visit('http://localhost:3000/')
            window.localStorage.setItem('token', usertoken)

            
        })
        
    })

})

