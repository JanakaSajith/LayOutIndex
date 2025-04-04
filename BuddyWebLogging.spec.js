/// <reference types="cypress" />

describe('Buddy Web Loagging',function(){

    beforeEach('Loading the URl',()=>{
        cy.visit('https://buddy.univiser.io/login')
    })

    it("Test01-Logging with invalid credentials",()=>{

        // loading the buddy dashbaord URL
        //cy.visit('https://buddy.univiser.io/login')
    
        //input the invalid username
        cy.get('#username').type('janaka+newbuddy01@univiser.io')
        cy.wait(3000)
    
        //unput the invalid password
        cy.get('#password').type('Test@1234')
        cy.wait(3000)
    
        //click the submit button
        cy.get('.ant-btn.ant-btn-primary', { timeout: 10000 }).should('be.visible').click();

        //verify the pop up message
        cy.get('.ant-message').should('contain','Invalid user credentials')
    
    })

    it("Test02-Logging with invalid username and valid password ",()=>{

        // loading the buddy dashbaord URL
        //cy.visit('https://buddy.univiser.io/login')
    
        //input the invalid username
        cy.get('#username').type('janaka+newbuddy01@univiser.io')
        cy.wait(3000)
    
        //input the valid password
        cy.get('#password').type('Test@123')
        cy.wait(4000)
    
        //click the submit button
        cy.get('.ant-btn.ant-btn-primary', { timeout: 10000 }).should('be.visible').click();

        //verify the pop up message
        cy.get('.ant-message').should('contain','Invalid user credentials')

    })
    it("Test03-Logging with invalid username and empty password ",()=>{

        // loading the buddy dashbaord URL
        //cy.visit('https://buddy.univiser.io/login')
    
        //input the invalid username
        cy.get('#username').type('janaka+newbuddy01@univiser.io')
        cy.wait(3000)
    
    
        //click the submit button
        cy.get('.ant-btn.ant-btn-primary', { timeout: 10000 }).should('be.visible').click();

        //verify the pop up message
        cy.get('.ant-form-item-explain-error').should('contain','This field is required')

    })
    it("Test04-Logging with valid username and empty password ",()=>{

        // loading the buddy dashbaord URL
        //cy.visit('https://buddy.univiser.io/login')
    
        //input the invalid username
        cy.get('#username').type('janaka+newbuddy@univiser.io')
        cy.wait(3000)
    
        
    
        //click the submit button
        cy.get('.ant-btn.ant-btn-primary', { timeout: 10000 }).should('be.visible').click();

        //verify the pop up message
        cy.get('.ant-form-item-explain-error').should('contain','This field is required')

    })
    it("Test05-Logging with empty username and valid  password ",()=>{

        // loading the buddy dashbaord URL
        //cy.visit('https://buddy.univiser.io/login')
    
        //input the invalid username
        //cy.get('#username').type('')
        cy.wait(3000)
    
        //unput the valid password
        cy.get('#password').type('Test@123')
        cy.wait(4000)
    
        //click the submit button
        cy.get('.ant-btn.ant-btn-primary', { timeout: 10000 }).should('be.visible').click();

        //verify the pop up message
        cy.get('.ant-form-item-explain-error').eq(0).should('contain','This field is required')

    })
    it("Test06-Logging with empty username and invalid  password ",()=>{

        // loading the buddy dashbaord URL
        //cy.visit('https://buddy.univiser.io/login')
    
        //input the invalid username
        //cy.get('#username').type('')
        cy.wait(3000)
    
        //input the invalid password
        cy.get('#password').type('Test@12344')
        cy.wait(4000)
    
        //click the submit button
        cy.get('.ant-btn.ant-btn-primary', { timeout: 10000 }).should('be.visible').click();

        //verify the pop up message
        cy.get('.ant-form-item-explain-error').eq(0).should('contain','This field is required')

    })
    it("Test07-Logging with empty username and empty  password ",()=>{

        // loading the buddy dashbaord URL
        //cy.visit('https://buddy.univiser.io/login')
    
        //input the invalid username
        //cy.get('#username').type('')
        cy.wait(3000)
    
        //unput the valid password
        //cy.get('#password').type('')
        cy.wait(4000)
    
        //click the submit button
        cy.get('.ant-btn.ant-btn-primary', { timeout: 10000 }).should('be.visible').click();

        //verify the pop up message
        cy.get('.ant-form-item-explain-error').eq(0).should('contain','This field is required')
        cy.get('.ant-form-item-explain-error').eq(1).should('contain','This field is required')

    })

    it("Test08-Logging with invalid username and valid password ",()=>{

        // loading the buddy dashbaord URL
        //cy.visit('https://buddy.univiser.io/login')
    
        //input the valid username
        cy.get('#username').type('janaka+newbuddy01@univiser.io')
        cy.wait(3000)
    
        //unput the invalid password
        cy.get('#password').type('Test@123')
        cy.wait(4000)
    
        //click the submit button
        cy.get('.ant-btn.ant-btn-primary', { timeout: 10000 }).should('be.visible').click();

        //verify the pop up message
        cy.get('.ant-message').should('contain','Invalid user credentials')

    })
    
    it("Test09-Logging with valid credentials",()=>{

    // loading the buddy dashbaord URL
    //cy.visit('https://buddy.univiser.io/login')

    //input the valid username
    cy.get('#username').type('janaka+newbuddy@univiser.io')
    cy.wait(2000)

    //unput the valid password
    cy.get('#password').type('Test@123')
    cy.wait(4000)

    //click the submit button
    cy.get('.ant-btn.ant-btn-primary', { timeout: 10000 }).should('be.visible').click();

    //verify the dashboard heading of the buddy web
    cy.get('.ant-typography').eq(0).should('contain','My Dashboard')
    

})

})