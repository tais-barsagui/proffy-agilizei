/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

// Request URL: http://localhost:3333/classes
// Request Method: POST
// Status Code: 201 Created

context('Classes endpint', () => {
    it('POST - Cadastrar novo professor', () => {
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name":"Teste",
                "avatar":"Teste",
                "whatsapp":"1118585585",
                "bio":"Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste Testes teste ",
                "subject":"Ciências",
                "cost":100,
                "schedule":[
                  {
                    "week_day":"1",
                    "from":"08:00",
                    "to":"12:00"
                  },
                  {
                    "week_day":"3",
                    "from":"10:00",
                    "to":"13:00"
                  }
                ]
              }
        }).then((response) => {
            expect(response.status).to.eq(201)

        })
        
    });
});