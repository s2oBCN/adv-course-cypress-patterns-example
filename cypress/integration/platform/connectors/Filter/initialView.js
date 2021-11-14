/// <reference types="cypress" />

import { Given, Then, Before, When } from "cypress-cucumber-preprocessor/steps";
import { Actor, AbilityFactory } from "cypress-screenplay";

const questions = require(   "../../../../support/screenplay/questions/questions");
const annonimousUser = new Actor()

Then("I see {string} selected", filterType => {
    annonimousUser.ask(questions.readSelectedFilter, undefined, filterConnector => {
        expect(filterConnector).to.contains(filterType)
    })
});


And("I see all the connectors:", dataTable => {
    for (const x of dataTable.rows()) {
         cy.log(x); 
    }
});
