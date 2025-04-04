/// <reference types="cypress" />

describe('Dashbaord Details verifying',()=>{

    beforeEach('Logging to BuddyWeb',()=>{

        // loading the buddy dashbaord URL
        cy.visit('https://buddy.univiser.io/login')
        cy.wait(6000) 
        cy.get('#username').type('janaka+newbuddy@univiser.io')
        cy.wait(6000) 
        cy.get('#password').type('Test@123')
        cy.wait(6000) 
        cy.get('.ant-btn.ant-btn-primary', { timeout: 10000 }).should('be.visible').click();
    })

    it('Test01-verify the successfuly in the dashboard module',()=>{
        
        //verify the correct  path  in the dashbaord
        cy.get('.ant-menu-title-content') 
        .eq(0) 
        .should('be.visible') 
        .and('contain', 'Dashboard') 

        .then($el => {
        cy.wrap($el).invoke('css', 'outline', '3px solid red');
        })
        //.click();
        cy.wait(3000) 
    })

    it('Test02-Verify the Univiser Logo',()=>{
        
        //verify the univiser logo
        cy.get('.logo').should('have.attr', 'src').and('include', '/static/media/logo.ba9daf635b7c5efa3c3f.png');
        cy.wait(3000)
    })

    it("Test03-verify the naming dashboard ",()=>{

        //verify the heading of the dashboard
        cy.get('.ant-typography').eq(0)
        .should('be.visible')
        .should('contain','My Dashboard')
    })
    it("Test04-verify the font size dashboard ",()=>{

        //verify the heading of the dashboard
        cy.wait(4000)
        cy.get('.ant-typography').eq(0).then($module => {

        // Get the font size of the heading
        const fontSize = $module.css('font-size')
  
        // Assertions for heading font size
        expect(fontSize).to.equal('20px') 
     })
     

    })
    it("Test05-verify the naming sub heading ",()=>{

        //verify the heading of the dashboard
        cy.get('#root > section > main:nth-of-type(1) > div > div > div')
        .should('be.visible')
        .should('contain','Good Evening, Ronaldo')
    })
    it("Test06-verify the font size of sub heading ",()=>{

        //verify the heading of the dashboard
        cy.wait(4000)
        cy.get('#root > section > main:nth-of-type(1) > div > div > div').then($module => {

        // Get the font size of the heading
        const fontSize = $module.css('font-size')
  
        // Assertions for heading font size
        expect(fontSize).to.equal('14px') 
     })
     

    })
     it('Test07-verify the text font style of Dashboard Heading',()=>
        {
          
          cy.wait(4000);
          cy.get('.ant-typography').eq(0).then($button => {

            // Get the font style of the dashboard heading
            const fontStyle = $button.css('font-style')
      
            // Assertions for button font style
            expect(fontStyle ).to.equal('normal') 
      
           
        })
      })
      it('Test08-verify the text font family of Dashboard Heading',()=>
        {
          
            cy.wait(4000)
            cy.get('.ant-typography').then($button => {
              // Get the font style of the button
              const fontFamily = $button.css('font-family')
        
              // Assertions for button font style
              expect(fontFamily ).to.equal('Roboto, sans-serif') 
      
           
        })
      })
      it('Test09-verify the deatils of first card',()=>{

        //get the card details
        cy.get('.ant-card-body').eq(0).should('be.visible')

        .then($el => {
            cy.wrap($el).invoke('css', 'outline', '3px solid red');
            })
            cy.wait(3000)
    })
    it('Test10-verify the Counts of the first  card count',()=>{

        //get the counts of the first card
        cy.wait(3000)
         cy.get('.green').should('contain','0 New')

    })
    it("Test11-verify the font size first card count ",()=>{

        //verify the first card heading
        cy.wait(4000)
        cy.get('.green').then($module => {

        // Get the font size of the first card heading
        const fontSize = $module.css('font-size')
  
        // Assertions for  first card 
        // heading font size 
        expect(fontSize).to.equal('20px') 
     })
     
    })
    it('Test12-verify the text font style of first card count',()=>{
          
        cy.wait(4000);
        cy.get('.green').then($button => {

          // Get the font style of the first card count
          const fontStyle = $button.css('font-style')
    
          // Assertions for first card count font style
          expect(fontStyle ).to.equal('normal') 
    
         
      })
    })
    it('Test13-verify the text font family of first card count',()=> {
          
        cy.wait(4000)
        cy.get('.green').then($button => {

          // Get the font style of the first card count
          const fontFamily = $button.css('font-family')
    
          // Assertions for first card count font style
          expect(fontFamily ).to.equal('Roboto, sans-serif') 
    
    })
    })

    it("Test14-verify the naming dashboard first card ",()=>{

        //verify the naming of the first card
        cy.get('.details').eq(0)
        .should('be.visible')
        .should('contain','New chats')

    })
    it("Test15-verify the font size first card heading ",()=>{

        //verify the first card heading
        cy.wait(4000)
        cy.get('.details').eq(0).then($module => {

        // Get the font size of the first card heading
        const fontSize = $module.css('font-size')
  
        // Assertions for  first card 
        // heading font size 
        expect(fontSize).to.equal('15px') 
     })
     
    })
    it('Test16-verify the text font style of first card Heading',()=>{
          
          cy.wait(4000);
          cy.get('.details').eq(0).then($button => {

            // Get the font style of the first card heading
            const fontStyle = $button.css('font-style')
      
            // Assertions for first card heading font style
            expect(fontStyle ).to.equal('normal') 
      
           
        })
    })
    it('Test17-verify the text font family of first card Heading',()=> {
          
            cy.wait(4000)
            cy.get('.details').eq(0).then($button => {

              // Get the font style of the first card
              const fontFamily = $button.css('font-family')
        
              // Assertions for first card  font style
              expect(fontFamily ).to.equal('Roboto, sans-serif') 
      
           
        })
    })
    it('Test18-verify the first card icon',()=>{

        //get the first card icon
        cy.get('#root > section > div > main > div > div > div > div:nth-child(1) > div > div > div > div > div:nth-child(1) > img')
        .should('have.attr', 'src')
        .and('include', '/static/media/icon-dashboard-new.30006ab2bc7e86d83272defc80da7956.svg');

    })
    it('Test19-verify the pop up message of the first card',()=>{

        //get the mouseover of the ! icon
        cy.get('.info_icon').eq(0).trigger('mouseover');
        cy.wait(4000)
        cy.get('.ant-tooltip-inner', { timeout: 5000 }) 
        //.should('be.visible')
        .and('contain', 'New conversation to be attended');

    })
    it("Test20-verify the font size first card pop up message ",()=>{

        //verify the first card mousehover
         cy.get('.info_icon').eq(0).trigger('mouseover');
         cy.wait(4000)
         cy.get('.ant-tooltip-inner', { timeout: 5000 }) 
         .then($module => {

        // Get the font size of the first card heading
            const fontSize = $module.css('font-size')

        // Assertions for  first card pop up message font size
             expect(fontSize).to.equal('14px') 
        })
     
    })
    it('Test21-verify the text font style of first card pop up message',()=>{
         
        //get the first card pop up message
        cy.get('.info_icon').eq(0).trigger('mouseover');
        cy.wait(4000)
        cy.get('.ant-tooltip-inner', { timeout: 5000 })
        .then($button => {

          // Get the font style of the first card pop up message
          const fontStyle = $button.css('font-style')
    
          // Assertions for first card pop up message font style
          expect(fontStyle ).to.equal('normal') 
         
      })
  })
  it('Test22-verify the text font family of first card pop up message',()=>{
         
    //get the first card pop up message
    cy.get('.info_icon').eq(0).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 })
    .then($button => {

      // Get the font family of the first card pop up message
      const fontFamily = $button.css('font-family')

      // Assertions for first card pop up message font family
      expect(fontFamily ).to.equal('Roboto, sans-serif') 
     
  })
})
it('Test23-verify the deatils of Second card',()=>{

    //get the second card details
    cy.get('.ant-card-body').eq(1).should('be.visible')

    .then($el => {
        cy.wrap($el).invoke('css', 'outline', '3px solid red');
        })
        cy.wait(3000)
})
it('Test24-verify the Counts of the Second  card count',()=>{

    //get the counts of the Second card
     cy.get('.red').should('contain','2 Missed')

})
it("Test25-verify the font size Second card count ",()=>{

    //verify the Second card count 
    cy.wait(4000)
    cy.get('.red').then($module => {

    // Get the font size of the second card heading
    const fontSize = $module.css('font-size')

    // Assertions for  first card  
    expect(fontSize).to.equal('20px') 
 })
 
})
it('Test26-verify the text font style of second card count',()=>{
      
    cy.wait(4000);
    cy.get('.red').then($button => {

      // Get the font style of the second card count
      const fontStyle = $button.css('font-style')

      // Assertions for second card count font style
      expect(fontStyle ).to.equal('normal') 

     
  })
})
it('Test27-verify the text font family of second card count',()=> {
      
    cy.wait(4000)
    cy.get('.red').then($button => {

      // Get the font style of the second card count
      const fontFamily = $button.css('font-family')

      // Assertions for second card count font style
      expect(fontFamily ).to.equal('Roboto, sans-serif') 

})
})

it("Test28-verify the naming of  dashboard second card ",()=>{

    //verify the naming of the second card
    cy.get('.details').eq(1)
    .should('be.visible')
    .should('contain','Within SLA 12hrs')

})
it("Test29-verify the font size second card heading ",()=>{

    //verify the second card heading
    cy.wait(4000)
    cy.get('.details').eq(1).then($module => {

    // Get the font size of the second card heading
    const fontSize = $module.css('font-size')

    // Assertions for  second card font size
    expect(fontSize).to.equal('15px') 
 })
 
})
it('Test30-verify the text font style of second card Heading',()=>{
      
      cy.wait(4000);
      cy.get('.details').eq(1).then($button => {

        // Get the font style of the second card heading
        const fontStyle = $button.css('font-style')
  
        // Assertions for second card heading font style
        expect(fontStyle ).to.equal('normal') 
  
       
    })
})
it('Test31-verify the text font family of second card Heading',()=> {
      
        cy.wait(4000)
        cy.get('.details').eq(1).then($button => {

          // Get the font style of the second card
          const fontFamily = $button.css('font-family')
    
          // Assertions for second card  font style
          expect(fontFamily ).to.equal('Roboto, sans-serif') 
  
       
    })
})
it('Test32-verify the second card icon',()=>{

    //get the second card icon
    cy.get('#root > section > div > main > div > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(1) > img')
    .should('have.attr', 'src')
    .and('include', '/static/media/icon-dashboard-missed.3a7fd39d20e5ca2a71dd7c8679fb351c.svg');

})
it('Test33-verify the pop up message of the second card',()=>{

    //get the mouseover of the ! icon of second card
    cy.get('.info_icon').eq(1).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 }) 
    
    .and('contain', 'Conversations not attended within 12hrs');

})
it("Test34-verify the font size second card pop up message ",()=>{

    //verify the second card mousehover
     cy.get('.info_icon').eq(1).trigger('mouseover');
     cy.wait(4000)
     cy.get('.ant-tooltip-inner', { timeout: 5000 }) 
     .then($module => {

    // Get the font size of the second card heading
        const fontSize = $module.css('font-size')

    // Assertions for  second card pop up message font size
         expect(fontSize).to.equal('14px') 
    })
 
})
it('Test35-verify the text font style of second card pop up message',()=>{
     
    //get the second card pop up message
    cy.get('.info_icon').eq(1).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 })
    .then($button => {

      // Get the font style of the second card pop up message
      const fontStyle = $button.css('font-style')

      // Assertions for second card pop up message font style
      expect(fontStyle ).to.equal('normal') 
     
  })
})
it('Test36-verify the text font family of second card pop up message',()=>{
     
    //get the second card pop up message
    cy.get('.info_icon').eq(1).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 })
    .then($button => {

  // Get the font family of the second card pop up message
  const fontFamily = $button.css('font-family')

  // Assertions for second card pop up message font family
  expect(fontFamily ).to.equal('Roboto, sans-serif') 
 
})
})
it('Test37-verify the deatils of Third card',()=>{

    //get the Third card details
    cy.get('.ant-card-body').eq(2).should('be.visible')

    .then($el => {
        cy.wrap($el).invoke('css', 'outline', '3px solid red');
        })
        cy.wait(3000)
})
it('Test38-verify the Counts of the Third  card count',()=>{

    //get the counts of the Third card
     cy.get('.orange').should('contain','29 Ongoing')

})
it("Test39-verify the font size Third card count ",()=>{

    //verify the Third card count 
    cy.wait(4000)
    cy.get('.orange').then($module => {

    // Get the font size of the Third card heading
    const fontSize = $module.css('font-size')

    // Assertions for  Third card  
    expect(fontSize).to.equal('20px') 
 })
 
})
it('Test40-verify the text font style of Third card count',()=>{
      
    cy.wait(4000);
    cy.get('.orange').then($button => {

      // Get the font style of the Third card count
      const fontStyle = $button.css('font-style')

      // Assertions for second card count font style
      expect(fontStyle ).to.equal('normal') 

     
  })
})
it('Test41-verify the text font family of Third card count',()=> {
      
    cy.wait(4000)
    cy.get('.orange').then($button => {

      // Get the font style of the Third card count
      const fontFamily = $button.css('font-family')

      // Assertions for Third card count font style
      expect(fontFamily ).to.equal('Roboto, sans-serif') 

})
})

it("Test42-verify the naming of  dashboard Third card ",()=>{

    //verify the naming of the second card
    cy.get('.details').eq(2)
    .should('be.visible')
    .should('contain','Ongoing chats')

})
it("Test42-verify the font size Third card heading ",()=>{

    //verify the second card heading
    cy.wait(4000)
    cy.get('.details').eq(2).then($module => {

    // Get the font size of the Third card heading
    const fontSize = $module.css('font-size')

    // Assertions for  second card font size
    expect(fontSize).to.equal('15px') 
 })
 
})
it('Test43-verify the text font style of Third card Heading',()=>{
      
      cy.wait(4000);
      cy.get('.details').eq(2).then($button => {

        // Get the font style of the Third card heading
        const fontStyle = $button.css('font-style')
  
        // Assertions for Third card heading font style
        expect(fontStyle ).to.equal('normal') 
  
       
    })
})
it('Test44-verify the text font family of Third card Heading',()=> {
      
        cy.wait(4000)
        cy.get('.details').eq(2).then($button => {

          // Get the font style of the Third card
          const fontFamily = $button.css('font-family')
    
          // Assertions for Third card  font style
          expect(fontFamily ).to.equal('Roboto, sans-serif') 
  
       
    })
})
it('Test45-verify the Third card icon',()=>{

    //get the Third card icon
    cy.get('#root > section > div > main > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(1) > img')
    .should('have.attr', 'src')
    .and('include', '/static/media/icon-dashboard-ongoing.3e1286425c3db316af0d13557d84538e.svg')

})
it('Test46-verify the pop up message of the Third card',()=>{

    //get the mouseover of the ! icon of Third card
    cy.get('.info_icon').eq(2).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 }) 
    .and('contain', 'Conversation that are currently on going')

})
it("Test47-verify the font size Third card pop up message ",()=>{

    //verify the Third card mousehover
     cy.get('.info_icon').eq(2).trigger('mouseover');
     cy.wait(4000)
     cy.get('.ant-tooltip-inner', { timeout: 5000 }) 
     .then($module => {

    // Get the font size of the Third card heading
        const fontSize = $module.css('font-size')

    // Assertions for  Third card pop up message font size
         expect(fontSize).to.equal('14px') 
    })
 
})
it('Test48-verify the text font style of Third card pop up message',()=>{
     
    //get the Third card pop up message
    cy.get('.info_icon').eq(2).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 })
    .then($button => {

      // Get the font style of the Third card pop up message
      const fontStyle = $button.css('font-style')

      // Assertions for Third card pop up message font style
      expect(fontStyle ).to.equal('normal') 
     
  })
})
it('Test49-verify the text font family of Third card pop up message',()=>{
     
    //get the Third card pop up message
    cy.get('.info_icon').eq(2).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 })
    .then($button => {

    // Get the font family of the Third card pop up message
    const fontFamily = $button.css('font-family')

     // Assertions for Third card pop up message font family
    expect(fontFamily ).to.equal('Roboto, sans-serif') 
 
    })
})
it('Test50-verify the deatils of forth card',()=>{

    //get the forth card details
    cy.get('.ant-card-body').eq(3).should('be.visible')

    .then($el => {
        cy.wrap($el).invoke('css', 'outline', '3px solid red');
        })
        cy.wait(3000)
})
it('Test51-verify the Counts of the forth  card count',()=>{

    //get the counts of the forth card
     cy.get('.black').should('contain','15 Referred')

})
it("Test52-verify the font size forth card count ",()=>{

    //verify the forth card count 
    cy.wait(4000)
    cy.get('.black').then($module => {

    // Get the font size of the forth card heading
    const fontSize = $module.css('font-size')

    // Assertions for  Third card  
    expect(fontSize).to.equal('20px') 
 })
 
})
it('Test53-verify the text font style of forth card count',()=>{
      
    cy.wait(4000);
    cy.get('.black').then($button => {

      // Get the font style of the Third card count
      const fontStyle = $button.css('font-style')

      // Assertions for Third card count font style
      expect(fontStyle ).to.equal('normal') 

     
  })
})
it('Test54-verify the text font family of forth card count',()=> {
      
    cy.wait(4000)
    cy.get('.black').then($button => {

      // Get the font style of the forth card count
      const fontFamily = $button.css('font-family')

      // Assertions for forth card count font style
      expect(fontFamily ).to.equal('Roboto, sans-serif') 

})
})

it("Test55-verify the naming of  dashboard forth card ",()=>{

    //verify the naming of the forth card
    cy.get('.details').eq(3)
    .should('be.visible')
    .should('contain','My prospect referrals')

})
it("Test56-verify the font size forth card heading ",()=>{

    //verify the forth card heading
    cy.wait(4000)
    cy.get('.details').eq(3).then($module => {

    // Get the font size of the forth card heading
    const fontSize = $module.css('font-size')

    // Assertions for  forth card font size
    expect(fontSize).to.equal('15px') 
 })
 
})
it('Test57-verify the text font style of forth card Heading',()=>{
      
      cy.wait(4000);
      cy.get('.details').eq(3).then($button => {

        // Get the font style of the forth card heading
        const fontStyle = $button.css('font-style')
  
        // Assertions for forth card heading font style
        expect(fontStyle ).to.equal('normal') 
  
       
    })
})
it('Test58-verify the text font family of forth card Heading',()=> {
      
        cy.wait(4000)
        cy.get('.details').eq(3).then($button => {

          // Get the font style of the forth card
          const fontFamily = $button.css('font-family')
    
          // Assertions for forth card  font style
          expect(fontFamily ).to.equal('Roboto, sans-serif')   
    })
})
it('Test59-verify the pop up message of the forth card',()=>{

    //get the mouseover of the ! icon of forth card
    cy.get('.info_icon').eq(3).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 }) 
    .and('contain', 'Number of prospects that have inquired on Univiser using your unique referral link')

})
it("Test60-verify the font size forth card pop up message ",()=>{

    //verify the forth card mousehover
     cy.get('.info_icon').eq(3).trigger('mouseover');
     cy.wait(4000)
     cy.get('.ant-tooltip-inner', { timeout: 5000 }) 
     .then($module => {

    // Get the font size of the forth card heading
        const fontSize = $module.css('font-size')

    // Assertions for  forth card pop up message font size
         expect(fontSize).to.equal('14px') 
    })
 
})
it('Test61-verify the text font style of forth card pop up message',()=>{
     
    //get the forth card pop up message
    cy.get('.info_icon').eq(3).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 })
    .then($button => {

      // Get the font style of the forth card pop up message
      const fontStyle = $button.css('font-style')

      // Assertions for forth card pop up message font style
      expect(fontStyle ).to.equal('normal') 
     
  })
})
it('Test62-verify the text font family of forth card pop up message',()=>{
     
    //get the forth card pop up message
    cy.get('.info_icon').eq(3).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 })
    .then($button => {

    // Get the font family of the forth card pop up message
    const fontFamily = $button.css('font-family')

     // Assertions for forth card pop up message font family
    expect(fontFamily ).to.equal('Roboto, sans-serif') 
 
    })
})
it('Test63 - Verify the availability of the share button in the fourth card', () => {

    // Wait for the cards to load
    cy.wait(3000);

    // Target the fourth card and check for the "Share" button
    cy.get('.ant-btn.ant-btn-default.shareButtonCustom.share_select')
    .should('contain', 'Share');
}) 
it('Test64-verify the clickability of the share button in the forth card',()=>{

    //get the share button in the forth card
    cy.wait(3000)
    cy.get('.ant-btn.ant-btn-default.shareButtonCustom.share_select').click()
})
it('Test65-verify the heading of ambassador leaderboard', () => {
    // Wait for 4 seconds
    cy.wait(4000);
    
    // Get the ambassador leaderboard heading
    cy.get('.ant-typography.col_title')
    .eq(0)
    .should('be.visible')
    .and('contain', 'Ambassador Leaderboard')
})
it("Test66-verify the font size ambassador leaderboard heading ",()=>{
    // Wait for 4 seconds
    cy.wait(4000); 

    //verify the second card heading
    cy.wait(4000)
    cy.get('.ant-typography.col_title').eq(0).then($module => {

    // Get the font size of the ambassador leaderboard heading
    const fontSize = $module.css('font-size')

    // Assertions for  ambassador leaderboard font size
    expect(fontSize).to.equal('17px') 
 })

})
it('Test67-verify the text font style of ambassador leaderboard Heading',()=>{
      
      cy.wait(4000);
      cy.get('.ant-typography.col_title').eq(0).then($button => {

        // Get the font style of the ambassador leaderboard heading
        const fontStyle = $button.css('font-style')
  
        // Assertions for ambassador leaderboard heading font style
        expect(fontStyle ).to.equal('normal')    
    })
})
it('Test68-verify the text font family of ambassador leaderboard Heading',()=> {
      
        cy.wait(4000)
        cy.get('.ant-typography.col_title').eq(0).then($button => {

          // Get the font style of the ambassador leaderboard
          const fontFamily = $button.css('font-family')
    
          // Assertions for ambassador leaderboard font style
          expect(fontFamily ).to.equal('Roboto, sans-serif')   
    })
})
it('Test69-verify the heading of My Stats', () => {
    // Wait for 4 seconds
    cy.wait(4000);
    
    // Get the My Stats heading
    cy.get('.ant-typography.col_title')
    .eq(1)
    .should('be.visible')
    .and('contain', 'My Stats')
})
it("Test70-verify the font size My Stats heading ",()=>{
    // Wait for 4 seconds
    cy.wait(4000); 

    //verify the My Stats heading
    cy.wait(4000)
    cy.get('.ant-typography.col_title').eq(1).then($module => {

    // Get the font size of the My Stats heading
    const fontSize = $module.css('font-size')

    // Assertions for  My Stats font size
    expect(fontSize).to.equal('17px') 
 })

})
it('Test71-verify the text font style of My Stats Heading',()=>{
      
      cy.wait(4000);
      cy.get('.ant-typography.col_title').eq(1).then($button => {

        // Get the font style of the My Stats heading
        const fontStyle = $button.css('font-style')
  
        // Assertions for ambassador My Stats font style
        expect(fontStyle ).to.equal('normal')    
    })
})
it('Test72-verify the text font family of My Stats Heading',()=> {
      
        cy.wait(4000)
        cy.get('.ant-typography.col_title').eq(1).then($button => {

          // Get the font style of the My Stats
          const fontFamily = $button.css('font-family')
    
          // Assertions for My Stats font style
          expect(fontFamily ).to.equal('Roboto, sans-serif')   
    })
})
it('Test73-verify the pop up message of the My Stats',()=>{

    //get the mouseover of the ! icon of My Stats
    cy.get('.info_icon').eq(4).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 }) 
    .and('contain', 'Ambassador KPI’s')

})
it("Test74-verify the font size My Stats pop up message ",()=>{

    //verify the My Stats mousehover
     cy.get('.info_icon').eq(4).trigger('mouseover');
     cy.wait(4000)
     cy.get('.ant-tooltip-inner', { timeout: 5000 }) 
     .then($module => {

    // Get the font size of the My Stats heading
        const fontSize = $module.css('font-size')

    // Assertions for  My Stats pop up message font size
         expect(fontSize).to.equal('14px') 
    })
 
})
it('Test75-verify the text font style of My Stats pop up message',()=>{
     
    //get the forth card pop up message
    cy.get('.info_icon').eq(4).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 })
    .then($button => {

      // Get the font style of the My Stats pop up message
      const fontStyle = $button.css('font-style')

      // Assertions for My Stats pop up message font style
      expect(fontStyle ).to.equal('normal') 
     
  })
})
it('Test77-verify the text font family of My Stats pop up message',()=>{
     
    //get the My Stats pop up message
    cy.get('.info_icon').eq(4).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 })
    .then($button => {

    // Get the font family of the My Stats pop up message
    const fontFamily = $button.css('font-family')

     // Assertions for My Stats pop up message font family
    expect(fontFamily ).to.equal('Roboto, sans-serif') 
 
    })
})
it('Test78-verify the deatils of My Stats First Card',()=>{

    //get the My Stats First Card details
    cy.get('.ant-card-body').eq(4).should('be.visible')

    .then($el => {
        cy.wrap($el).invoke('css', 'outline', '3px solid red');
        })
        cy.wait(3000)
})
it('Test79-verify the Counts of the My Stats First Card count',()=>{

    //get the counts of the My Stats First card
    cy.get('.ant-typography.stat_card_title', { timeout: 10000 }).eq(0) // Waits up to 10 seconds
    .should('contain', '23 days 2 hours 8 mins');

})
it("Test80-verify the font size My Stats First Card count ",()=>{

    //verify the My Stats First Card count 
    cy.wait(4000)
    cy.get('.ant-typography.stat_card_title').eq(0).then($module => {

    // Get the font size of the My Stats First Card heading
    const fontSize = $module.css('font-size')

    // Assertions for  My Stats First card  
    expect(fontSize).to.equal('20px') 
 })
 
})
it('Test81-verify the text font style of My Stats First card count',()=>{
      
    cy.wait(4000);
    cy.get('.ant-typography.stat_card_title').eq(0).then($button => {

      // Get the font style of the My Stats First card count
      const fontStyle = $button.css('font-style')

      // Assertions for My Stats First  card count font style
      expect(fontStyle ).to.equal('normal') 

     
  })
})
it('Test82-verify the text font family of My Stats First card count',()=> {
      
    cy.wait(4000)
    cy.get('.ant-typography.stat_card_title').eq(0).then($button => {

      // Get the font style of the My Stats First card count
      const fontFamily = $button.css('font-family')

      // Assertions for My Stats Firstd card count font style
      expect(fontFamily ).to.equal('Roboto, sans-serif') 

})
})

it("Test83-verify the naming of  dashboard My Stats First card ",()=>{

    //verify the naming of the My Stats First card
    cy.get('.details').eq(4)
    .should('be.visible')
    .should('contain','Average response time')

})
it("Test84-verify the font size My Stats First card heading ",()=>{

    //verify the My Stats First card heading
    cy.wait(4000)
    cy.get('.details').eq(4).then($module => {

    // Get the font size of the My Stats First card heading
    const fontSize = $module.css('font-size')

    // Assertions for  My Stats First card font size
    expect(fontSize).to.equal('14px') 
 })
 
})
it('Test85-verify the text font style of My Stats First card Heading',()=>{
      
      cy.wait(4000);
      cy.get('.details').eq(4).then($button => {

        // Get the font style of the My Stats First card heading
        const fontStyle = $button.css('font-style')
  
        // Assertions for My Stats First card heading font style
        expect(fontStyle ).to.equal('normal') 
  
       
    })
})
it('Test86-verify the text font family of My Stats First card Heading',()=> {
      
        cy.wait(4000)
        cy.get('.details').eq(4).then($button => {

          // Get the font style of the My Stats First card
          const fontFamily = $button.css('font-family')
    
          // Assertions for My Stats First card  font style
          expect(fontFamily ).to.equal('Roboto, sans-serif') 
  
       
    })
})
it('Test87-verify the pop up message of the My Stats First card',()=>{

    //get the mouseover of the ! icon of My Stats First card
    cy.get('.info_icon').eq(5).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 }) 
    .and('contain', 'Time taken to send the first message to your prospects')

})
it("Test88-verify the font size Third card pop up message ",()=>{

    //verify the Third card mousehover
     cy.get('.info_icon').eq(5).trigger('mouseover');
     cy.wait(4000)
     cy.get('.ant-tooltip-inner', { timeout: 5000 })
     .then($module => {

    // Get the font size of the My Stats First card heading
        const fontSize = $module.css('font-size')

    // Assertions for  My Stats First card pop up message font size
         expect(fontSize).to.equal('14px') 
    })
 
})
it('Test89-verify the text font style of My Stats First card pop up message',()=>{
     
    //get the My Stats First card pop up message
    cy.get('.info_icon').eq(5).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 })
    .then($button => {

      // Get the font style of the My Stats First card pop up message
      const fontStyle = $button.css('font-style')

      // Assertions for My Stats First card pop up message font style
      expect(fontStyle ).to.equal('normal') 
     
  })
})
it('Test90-verify the text font family of My Stats First card pop up message',()=>{
     
    //get the My Stats First card pop up message
    cy.get('.info_icon').eq(5).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 })
    .then($button => {

    // Get the font family of the My Stats First card pop up message
    const fontFamily = $button.css('font-family')

     // Assertions for My Stats First card pop up message font family
    expect(fontFamily ).to.equal('Roboto, sans-serif') 
 
    })
})
it('Test91-verify the deatils of My Stats Second Card',()=>{

    //get the My Stats Second Card details
    cy.get('.ant-card-body').eq(5).should('be.visible')

    .then($el => {
        cy.wrap($el).invoke('css', 'outline', '3px solid red');
        })
        cy.wait(3000)
})
it('Test92-verify the Counts of the My Stats Second Card count',()=>{

    //get the counts of the My Stats Second card
    cy.get('.ant-typography.stat_card_title', { timeout: 10000 }).eq(1) // Waits up to 10 seconds
    .should('contain', '97%');

})
it("Test93-verify the font size My Stats Second Card count ",()=>{

    //verify the My Stats Second Card count 
    cy.wait(4000)
    cy.get('.ant-typography.stat_card_title').eq(1).then($module => {

    // Get the font size of the My Stats Second Card heading
    const fontSize = $module.css('font-size')

    // Assertions for  My Stats Second card  
    expect(fontSize).to.equal('20px') 
 })
 
})
it('Test94-verify the text font style of My Stats Second card count',()=>{
      
    cy.wait(4000);
    cy.get('.ant-typography.stat_card_title').eq(1).then($button => {

      // Get the font style of the My Stats Second card count
      const fontStyle = $button.css('font-style')

      // Assertions for My Stats Second  card count font style
      expect(fontStyle ).to.equal('normal') 

     
  })
})
it('Test95-verify the text font family of My Stats Second card count',()=> {
      
    cy.wait(4000)
    cy.get('.ant-typography.stat_card_title').eq(1).then($button => {

      // Get the font style of the My Stats Second card count
      const fontFamily = $button.css('font-family')

      // Assertions for My Stats Second card count font style
      expect(fontFamily ).to.equal('Roboto, sans-serif') 

    })
})
it("Test96-verify the naming of  dashboard My Stats Second card ",()=>{

    //verify the naming of the My Stats Second card
    cy.get('.details').eq(5)
    .should('be.visible')
    .should('contain','Response rate')

})
it("Test97-verify the font size My Stats Second card heading ",()=>{

    //verify the My Stats First card heading
    cy.wait(4000)
    cy.get('.details').eq(5).then($module => {

    // Get the font size of the My Stats Second card heading
    const fontSize = $module.css('font-size')

    // Assertions for  My Stats Second card font size
    expect(fontSize).to.equal('14px') 
 })
 
})
it('Test98-verify the text font style of My Stats Second card Heading',()=>{
      
      cy.wait(4000);
      cy.get('.details').eq(5).then($button => {

        // Get the font style of the My Stats Second card heading
        const fontStyle = $button.css('font-style')
  
        // Assertions for My Stats Second card heading font style
        expect(fontStyle ).to.equal('normal') 
  
       
    })
})
it('Test99-verify the text font family of My Stats Second card Heading',()=> {
      
        cy.wait(4000)
        cy.get('.details').eq(5).then($button => {

          // Get the font style of the My Stats Second card
          const fontFamily = $button.css('font-family')
    
          // Assertions for My Stats Second card  font style
          expect(fontFamily ).to.equal('Roboto, sans-serif') 
  
       
    })
})
it('Test100-verify the pop up message of the My Stats Second card',()=>{

    //get the mouseover of the ! icon of My Stats Second card
    cy.get('.info_icon').eq(6).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 }) 
    .and('contain', 'Number of prospect inquiries you have replied compared to total received')

})
it("Test101-verify the font size My Stats Second card pop up message ",()=>{

    //verify the My Stats Second card mousehover
     cy.get('.info_icon').eq(6).trigger('mouseover');
     cy.wait(4000)
     cy.get('.ant-tooltip-inner', { timeout: 5000 })
     .then($module => {

    // Get the font size of the My Stats Second card heading
        const fontSize = $module.css('font-size')

    // Assertions for  My Stats Second card pop up message font size
         expect(fontSize).to.equal('14px') 
    })
 
})
it('Test102-verify the text font style of My Stats Second card pop up message',()=>{
     
    //get the My Stats Second card pop up message
    cy.get('.info_icon').eq(6).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 })
    .then($button => {

      // Get the font style of the My Stats Second card pop up message
      const fontStyle = $button.css('font-style')

      // Assertions for My Stats Second card pop up message font style
      expect(fontStyle ).to.equal('normal') 
     
  })
})
it('Test103-verify the text font family of My Stats Second card pop up message',()=>{
     
    //get the My Stats First card pop up message
    cy.get('.info_icon').eq(6).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 })
    .then($button => {

    // Get the font family of the My Stats Second card pop up message
    const fontFamily = $button.css('font-family')

     // Assertions for My Stats Second card pop up message font family
    expect(fontFamily ).to.equal('Roboto, sans-serif') 
 
    })
})
it('Test104-verify the deatils of My Stats Third Card',()=>{

    //get the My Stats Third Card details
    cy.get('.ant-card-body').eq(6).should('be.visible')

    .then($el => {
        cy.wrap($el).invoke('css', 'outline', '3px solid red');
        })
        cy.wait(3000)
})
it('Test105-verify the Counts of the My Stats Third Card count',()=>{

    //get the counts of the My Stats Third card
    cy.get('.ant-typography.stat_card_title', { timeout: 10000 }).eq(2) // Waits up to 10 seconds
    .should('contain', '6 Resovled');

})
it("Test106-verify the font size My Stats Third Card count ",()=>{

    //verify the My Stats Third Card count 
    cy.wait(4000)
    cy.get('.ant-typography.stat_card_title').eq(2).then($module => {

    // Get the font size of the My Stats Third Card heading
    const fontSize = $module.css('font-size')

    // Assertions for  My Stats Third card  
    expect(fontSize).to.equal('20px') 
 })
 
})
it('Test107-verify the text font style of My Stats Third card count',()=>{
      
    cy.wait(4000);
    cy.get('.ant-typography.stat_card_title').eq(2).then($button => {

      // Get the font style of the My Stats Third card count
      const fontStyle = $button.css('font-style')

      // Assertions for My Stats Third  card count font style
      expect(fontStyle ).to.equal('normal') 

     
  })
})
it('Test108-verify the text font family of My Stats Third card count',()=> {
      
    cy.wait(4000)
    cy.get('.ant-typography.stat_card_title').eq(2).then($button => {

      // Get the font style of the My Stats Third card count
      const fontFamily = $button.css('font-family')

      // Assertions for My Stats Third card count font style
      expect(fontFamily ).to.equal('Roboto, sans-serif') 

    })
})
it("Test109-verify the naming of  dashboard My Stats Third card ",()=>{

    //verify the naming of the My Stats Third card
    cy.get('.details').eq(6)
    .should('be.visible')
    .should('contain','Resolved chats')

})
it("Test110-verify the font size My Stats Third card heading ",()=>{

    //verify the My Stats Third card heading
    cy.wait(4000)
    cy.get('.details').eq(6).then($module => {

    // Get the font size of the My Stats Third card heading
    const fontSize = $module.css('font-size')

    // Assertions for  My Stats Third card font size
    expect(fontSize).to.equal('14px') 
 })
 
})
it('Test111-verify the text font style of My Stats Third card Heading',()=>{
      
      cy.wait(4000);
      cy.get('.details').eq(6).then($button => {

        // Get the font style of the My Stats Third card heading
        const fontStyle = $button.css('font-style')
  
        // Assertions for My Stats Third card heading font style
        expect(fontStyle ).to.equal('normal') 
  
       
    })
})
it('Test112-verify the text font family of My Stats Third card Heading',()=> {
      
        cy.wait(4000)
        cy.get('.details').eq(6).then($button => {

          // Get the font style of the My Stats Third card
          const fontFamily = $button.css('font-family')
    
          // Assertions for My Stats Third card  font style
          expect(fontFamily ).to.equal('Roboto, sans-serif') 
  
       
    })
})
it('Test113-verify the pop up message of the My Stats Third card',()=>{

    //get the mouseover of the ! icon of My Stats Third card
    cy.get('.info_icon').eq(7).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 }) 
    .and('contain', 'Total number of prospect’s you’ve helped')

})
it("Test114-verify the font size My Stats Third card pop up message ",()=>{

    //verify the My Stats Second card mousehover
     cy.get('.info_icon').eq(7).trigger('mouseover');
     cy.wait(4000)
     cy.get('.ant-tooltip-inner', { timeout: 5000 })
     .then($module => {

    // Get the font size of the My Stats Second card heading
        const fontSize = $module.css('font-size')

    // Assertions for  My Stats Second card pop up message font size
         expect(fontSize).to.equal('14px') 
    })
 
})
it('Test115-verify the text font style of My Stats Third card pop up message',()=>{
     
    //get the My Stats Third card pop up message
    cy.get('.info_icon').eq(7).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 })
    .then($button => {

      // Get the font style of the My Stats Third card pop up message
      const fontStyle = $button.css('font-style')

      // Assertions for My Stats Third card pop up message font style
      expect(fontStyle ).to.equal('normal') 
     
  })
})
it('Test116-verify the text font family of My Stats Third card pop up message',()=>{
     
    //get the My Stats Third card pop up message
    cy.get('.info_icon').eq(7).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 })
    .then($button => {

    // Get the font family of the My Stats Third card pop up message
    const fontFamily = $button.css('font-family')

     // Assertions for My Stats Third card pop up message font family
    expect(fontFamily ).to.equal('Roboto, sans-serif') 
 
    })
})
it('Test117-verify the deatils of My Stats fouth Card',()=>{

    //get the My Stats fouth Card details
    cy.get('.ant-card-body').eq(7).should('be.visible')

    .then($el => {
        cy.wrap($el).invoke('css', 'outline', '3px solid red');
        })
        cy.wait(3000)
})
it('Test118-verify the Counts of the My Stats fouth Card count',()=>{

    //get the counts of the My Stats fouth card
    cy.get('.ant-typography.stat_card_title', { timeout: 10000 }).eq(3) // Waits up to 10 seconds
    .should('contain', '25 Prospects');

})
it("Test119-verify the font size My Stats fouth Card count ",()=>{

    //verify the My Stats fouth Card count 
    cy.wait(4000)
    cy.get('.ant-typography.stat_card_title').eq(3).then($module => {

    // Get the font size of the My Stats fouth Card heading
    const fontSize = $module.css('font-size')

    // Assertions for  My Stats fouth card  
    expect(fontSize).to.equal('20px') 
 })
 
})
it('Test120-verify the text font style of My Stats fouth card count',()=>{
      
    cy.wait(4000);
    cy.get('.ant-typography.stat_card_title').eq(3).then($button => {

      // Get the font style of the My Stats fouth card count
      const fontStyle = $button.css('font-style')

      // Assertions for My Stats fouth  card count font style
      expect(fontStyle ).to.equal('normal') 

     
  })
})
it('Test121-verify the text font family of My Stats fouth card count',()=> {
      
    cy.wait(4000)
    cy.get('.ant-typography.stat_card_title').eq(3).then($button => {

      // Get the font style of the My Stats fouth card count
      const fontFamily = $button.css('font-family')

      // Assertions for My Stats fouth card count font style
      expect(fontFamily ).to.equal('Roboto, sans-serif') 

    })
})
it("Test122-verify the naming of  dashboard My Stats fouth card ",()=>{

    //verify the naming of the My Stats fouth card
    cy.get('.details').eq(7)
    .should('be.visible')
    .should('contain','Transferred to admin')

})
it("Test123-verify the font size My Stats fouth card heading ",()=>{

    //verify the My Stats fouth card heading
    cy.wait(4000)
    cy.get('.details').eq(7).then($module => {

    // Get the font size of the My Stats fouth card heading
    const fontSize = $module.css('font-size')

    // Assertions for  My Stats fouth card font size
    expect(fontSize).to.equal('14px') 
 })
 
})
it('Test124-verify the text font style of My Stats fouth card Heading',()=>{
      
      cy.wait(4000);
      cy.get('.details').eq(7).then($button => {

        // Get the font style of the My Stats fouth card heading
        const fontStyle = $button.css('font-style')
  
        // Assertions for My Stats fouth card heading font style
        expect(fontStyle ).to.equal('normal') 
  
       
    })
})
it('Test125-verify the text font family of My Stats fouth card Heading',()=> {
      
        cy.wait(4000)
        cy.get('.details').eq(7).then($button => {

          // Get the font style of the My Stats fouth card
          const fontFamily = $button.css('font-family')
    
          // Assertions for My Stats fouth card  font style
          expect(fontFamily ).to.equal('Roboto, sans-serif') 
  
       
    })
})
it('Test126-verify the pop up message of the My Stats fouth card',()=>{

    //get the mouseover of the ! icon of My Stats fouth card
    cy.get('.info_icon').eq(8).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 }) 
    .and('contain', 'Total number of prospect’s you’ve transferred to admin')

})
it("Test127-verify the font size My Stats fouth card pop up message ",()=>{

    //verify the My Stats fouth card mousehover
     cy.get('.info_icon').eq(8).trigger('mouseover');
     cy.wait(4000)
     cy.get('.ant-tooltip-inner', { timeout: 5000 })
     .then($module => {

    // Get the font size of the My Stats fouth card heading
        const fontSize = $module.css('font-size')

    // Assertions for  My Stats fouth card pop up message font size
         expect(fontSize).to.equal('14px') 
    })
 
})
it('Test128-verify the text font style of My Stats fouth card pop up message',()=>{
     
    //get the My Stats Third card pop up message
    cy.get('.info_icon').eq(8).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 })
    .then($button => {

      // Get the font style of the My Stats fouth card pop up message
      const fontStyle = $button.css('font-style')

      // Assertions for My Stats fouth card pop up message font style
      expect(fontStyle ).to.equal('normal') 
     
  })
})
it('Test129-verify the text font family of My Stats fouth card pop up message',()=>{
     
    //get the My Stats fouth card pop up message
    cy.get('.info_icon').eq(8).trigger('mouseover');
    cy.wait(4000)
    cy.get('.ant-tooltip-inner', { timeout: 5000 })
    .then($button => {

    // Get the font family of the My Stats fouth card pop up message
    const fontFamily = $button.css('font-family')

     // Assertions for My Stats fouth card pop up message font family
    expect(fontFamily ).to.equal('Roboto, sans-serif') 
 
    })
})
it('Test130 - Verify the availability of the date filter on the Buddy Dashboard', () => {
    // Wait for the page to render
    cy.wait(4000);
  
    // Corrected selector using proper class formatting
    cy.get('.ant-picker.ant-picker-range')
      .should('exist') // Ensure the date picker exists
      .and('be.visible'); // Ensure the date picker is visible
})
it('Test130 - Verify the bottom logo source on the Buddy Dashboard', () => {
    cy.wait(4000);
  
    // Assert the logo's src attribute inside the footer
    cy.get('.ant-layout-footer img') // Replace with the actual logo selector
      .should('have.attr', 'src') // Ensure the src attribute exists
      .and('include', '/static/media/logo.ba9daf635b7c5efa3c3f.png'); // Validate the src value
  });
  
  
  

  
  

    

    

      
})
    


    
