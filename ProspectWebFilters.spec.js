/// <reference types="cypress" />

describe(' ProspectWeb test suit',()=>{
    
    
    
    it('Test 01-Loading the Page',()=>{
        
        cy.visit('https://atu.univiser.io/')
    })
    it('Test 02-Program filteration',()=>{

        cy.visit('https://atu.univiser.io/')
        cy.wait(1000)
        // go to the program filter field
        cy.get('.ant-select-selector').eq(0).click().type('Arts')
        cy.wait(150000)
        cy.get('.ant-select-item-option-content').eq(0).click()
        //go to the course filter
        cy.get('.ant-select-selector').eq(1).type(Accounting)
        cy.wait(2000)
        cy.get('.ant-select-item-option-content').eq(1).click()
      
})
    })
    

        
    
    

