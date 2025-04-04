
describe('LayOutIndexAutomation Assignment', () => {

    beforeEach(() => {
        //load the website bofore each tests(It blocks)
        cy.visit('https://magento.softwaretestingboard.com')
    })

    it('Test 01 - User should be able to search a product using the main search', () => {
        const item = 'Tee';
    
        // Type the item into the search bar
        cy.get('#search').type(`${item}{enter}`)
    
        // Verify URL contains the search result path
        cy.url().should('include', 'catalogsearch/result')
    
        // Verify each product title contains the search term
        cy.get('.product-item-link').each(($el) => {
            cy.wrap($el)
              .invoke('text')
              .then((text) => {
                expect(text.toLowerCase()).to.include(item.toLowerCase())

              })
        })
    })
    
    

    it.only('Test 02-User should be able  to filter search results under Women’s Tops by CATEGORY and COLOR', () => {

        //get the sub module Women and mouseover on women category
        cy.get('a').contains('Women').trigger('mouseover')
        cy.wait(1000)

        // go to the tops sub module by clicking it
        cy.get('a').contains('Tops').click()
        cy.wait(1000)

        // Select the category filed by its'class Name
        cy.get('.filter-options-title').contains('Category').click()
        cy.wait(1000)

        //select the Tees from the category dropdown
        cy.get('.filter-options-content').contains('Tees').click()
        cy.wait(1000)
        
        // Select a COLOR filter
        cy.get('.filter-options-title').contains('Style').click();

        cy.get('.filter-options-content')
        .find('a')
        .first()
        .click({ force: true }); // not recommended for stable tests


        // Validate the results match the filter criteria
        cy.get('.filter-current').should('contain', 'Jackets')
        cy.get('.filter-current').should('contain', 'Color')
    })
})
