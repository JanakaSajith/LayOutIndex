describe('LayOutIndex APITestAutomation', () => {
  
    // Positive Test Case 01 - Create booking with valid data
    it('should create a booking with valid data', () => {
      const validBooking = {
        firstname: "Test",
        lastname: "User",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2025-04-04",
          checkout: "2025-04-04"
        },
        additionalneeds: "Breakfast"
      }
  
      cy.request({
        method: 'POST',
        url: '/https://restful-booker.herokuapp.com/booking',
        body: validBooking,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200) 
        expect(response.body).to.have.property('bookingid') 
        expect(response.body.firstname).to.eq('Test')
        expect(response.body.lastname).to.eq('User')
        expect(response.body.totalprice).to.eq(111)
      })
    })
  
    // Negative Test Case 1 - Missing required fields 
    it('should return an error when required fields are missing', () => {
      const invalidBooking = {
        firstname: " ",// leave the first  name field  
        lastname: "User ",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2025-04-04",
          checkout: "2025-04-04"
        },
        additionalneeds: "Breakfast"
      };
  
      cy.request({
        method: 'POST',
        url: '/booking',
        body: invalidBooking,
      }).then((response) => {
        expect(response.status).to.eq(400) // Bad Request error is  expected here
        expect(response.body).to.have.property('error') // Error message should be in response(network tab)
      })
    })
  
    // Negative Test Case 2 - Invalid data format (incorrect boolean format)
    it('should return an error with invalid data format', () => {
      const invalidBooking = {
        firstname: "Test",
        lastname: "User",
        totalprice: 111,
        depositpaid: " ",  // Invalid data format for boolean
        bookingdates: {
          checkin: "2025-04-04",
          checkout: "2025-04-04"
        },
        additionalneeds: "Breakfast"
      }
  
      cy.request({
        method: 'POST',
        url: '/booking',
        body: invalidBooking,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400) // Bad Request error is  expected here
        expect(response.body).to.have.property('error') // Error message should be in response(network tab)
      })
    })
  
    // Negative Test Case 3 - Non-existent endpoint
    it('should return an error for a non-existent endpoint', () => {
      cy.request({
        method: 'POST',
        //url: 'https://restful-booker.herokuapp.com/booking',
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404); // Not Found error expected here(Headers of network tab)
      })
    })
  
    // Negative Test Case 4 - Missing or invalid booking dates
    it('should return an error when booking dates are missing', () => {
      const invalidBooking = {
        firstname: "Test",
        lastname: "User",
        totalprice: 111,
        depositpaid: true,
        additionalneeds: "Breakfast"
      };
  
      cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        body: invalidBooking,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400)// Bad Request error is  expected here
        expect(response.body).to.have.property('error')// Error message should be in response(network tab)
      })
    })
  })
