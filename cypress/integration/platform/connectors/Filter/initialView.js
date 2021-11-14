/// <reference types="cypress" />

import { Given, Then, Before, When } from "cypress-cucumber-preprocessor/steps";
import { ConnectorsPage } from "../../../../support/page-object/ConnectorsPage";

const conectorsPage = new ConnectorsPage()

Then("I see {string} selected", filterType => {
    conectorsPage.getActiveFilter().contains(filterType)
});


And("I see all the connectors:", dataTable => {
    for (const x of dataTable.rows()) {
         cy.log(x); 
    }
    cy.log("Current page connectors")
    conectorsPage.getConnectors().each(($el) => {
        cy.log($el.children().prop('href')); 
    })
});
