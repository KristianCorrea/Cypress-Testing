// My first test
// describe('My First Test', function(){
//     it('Does not do much', function(){
//         expect(true).to.equal(true)
//     })
// })

describe('Input and submission tests', function(){
    beforeEach(function(){
        cy.visit('http://localhost:3000/');
    })
    it('Testing Username, Email, Password, and Checkbox Input and Button Submission', function(){
        cy.get(`input[name='name']`)
          .type('Tyrone Williams')
          .should('have.value', 'Tyrone Williams')
        cy.get(`input[name='email']`)
          .type('BigTyrone@swag.com')
          .should('have.value', 'BigTyrone@swag.com')
        cy.get(`input[name='password']`)
          .type('Ubereatschickenwings')
          .should('have.value', 'Ubereatschickenwings')
        cy.get(`input[name='term']`)
          .check()
          .should('be.checked');
        cy.get(`button`)
          .click()
    })
    it('Test Blank Input Valid',function(){
        cy.get(`input[name='name']`).type('h{backspace}')
        cy.contains('Name cannot be blank')
    })
    //stretch
    it('Test Min Characters Input Validation', function(){
        cy.get(`input[name='name']`).type('hi').should('have.value', 'hi')
        cy.contains('Name must be more than 2 characters long')
    })
})

