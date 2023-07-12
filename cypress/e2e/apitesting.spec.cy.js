context('API Testing', () => {
    it('POST request', () => {
      const randomId = Math.floor(Math.random() * 100000);
      const requestBody = {
        id: randomId,
        name: "Xandim Dog Petty",
        photoUrls: ["DrvZ"],
        tags: [],
        status: "pending"
      };
  
      cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/pet',
        body: requestBody
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(randomId);
  
        const requestBody = {
          id: randomId,
          name: "Xandim Dog Petty",
          photoUrls: ["DrvZ"],
          tags: [],
          status: "pending"
        };
  
        cy.request({
          method: 'POST',
          url: 'https://petstore.swagger.io/v2/pet',
          body: requestBody
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.id).to.eq(randomId);
        });
      });
    });
  
    it('GET request', () => {
      const randomId = Math.floor(Math.random() * 100000);
  
      const requestBody = {
        id: randomId,
        name: 'Xandim Cat Petty',
        photoUrls: ["DrvZ"],
        tags: [],
        status: "pending"
      };
  
      cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/pet',
        body: requestBody
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(randomId);
  
        // GET Request based on the previous POST
  
        const petId = 12345;
  
        cy.request({
          method: 'GET',
          url: `https://petstore.swagger.io/v2/pet/${randomId}`
        }).then((response) => {
          expect(response.status).to.eq(200);
  
          const randomId = Math.floor(Math.random() * 100000);
  
          const requestBody = {
            id: randomId,
            name: 'Xandim Cat Petty',
            photoUrls: ["DrvZ"],
            tags: [],
            status: "pending"
          };
  
          cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            body: requestBody
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(randomId);
  
            const invalidPetId = 98765; // Replace with an invalid pet ID
  
            cy.request({
              method: 'GET',
              url: `https://petstore.swagger.io/v2/pet/${invalidPetId}`,
              failOnStatusCode: false
            }).then((response) => {
              expect(response.status).to.eq(404);
            });
  
            const nonExistingPetId = 99999; // Replace with a non-existing pet ID
  
            cy.request({
              method: 'GET',
              url: `https://petstore.swagger.io/v2/pet/${nonExistingPetId}`,
              failOnStatusCode: false
            }).then((response) => {
              expect(response.status).to.eq(404);
            });
          });
        });
      });
    });
  });
  