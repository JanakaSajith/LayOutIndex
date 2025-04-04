/// <reference types="cypress" />

describe('Dashbaord Details verifying',()=>{

    beforeEach('Logging to BuddyWeb',()=>{

        // loading the buddy dashbaord URL
        cy.visit('https://buddy.univiser.io/login')
        cy.wait(3000) 
        cy.get('#username').type('janaka+newbuddy@univiser.io')
        cy.wait(3000) 
        cy.get('#password').type('Test@123')
        cy.wait(3000) 
        cy.get('.ant-btn.ant-btn-primary', { timeout: 10000 }).should('be.visible').click();
        //get the new chat cards
        cy.wait(3000)
        cy.get('.stat_card_title').eq(0)
        .should('be.visible').click()
    })
    it('Test01-Verfiy the New chat cards clickability',()=>{

        //get the new chat cards
        cy.wait(3000)
        cy.get('.stat_card_title').eq(0)
        .should('be.visible').click()
    })
    it('Test02 - Verify the availability of the search prospect field', () => {
        // Wait for the page or relevant content to load
        cy.wait(3000); 
    
        // Check the visibility of the search input field
        cy.get('.ant-input-affix-wrapper.buddiesSearchInput') // Corrected the selector syntax
            .should('be.visible')
    })
    it('Test03-verify the availability of new chat description',()=>{
        //wait untill the page is loaded
        cy.wait(3000)
        //get the new chat description
        cy.get('[text-anchor="middle"]').should('be.visible')
        //check the content of the new chat description
        .should('contain','How is the campus life?')
    })
    it("Test04-verify the font size  new chat card heading ",()=>{

        //verify the new chat module heading
        cy.wait(4000)
        cy.get('[text-anchor="middle"]').then($module => {

        // Get the font size of the new chat module heading
        const fontSize = $module.css('font-size')
  
        // Assertions for  new chat module heading 
        // heading font size 
        expect(fontSize).to.equal('16.8px') 
     })
    })
    it('Test05-verify the text font style of new chat card module heading',()=>{
          
        cy.wait(4000);
        cy.get('[text-anchor="middle"]').then($button => {

          // Get the font style of the new chat card heading
          const fontStyle = $button.css('font-style')
    
          // Assertions for new chat  card heading font style
          expect(fontStyle ).to.equal('normal') 
    
         
      })
    })
    it.only('Test06-verify the text font family of new chat card heading',()=> {
          
        cy.wait(4000)
        cy.get('[text-anchor="middle"]').then($button => {

          // Get the font style of the new chat module heading
          const fontFamily = $button.css('font-family')
    
          // Assertions for new chat module heading font style
          expect(fontFamily ).to.equal('Roboto, sans-serif') 
    
    })
    })




})
