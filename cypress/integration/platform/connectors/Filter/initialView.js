/// <reference types="cypress" />

import { Given, Then, Before, When } from "cypress-cucumber-preprocessor/steps";

Then("I see {string} selected", filterType => {
    cy.get(".connectors-tabs").get(".active").contains(filterType)
});


And("I see all the connectors:", dataTable => {
    for (const x of dataTable.rows()) {
         cy.log(x); 
    }
});
