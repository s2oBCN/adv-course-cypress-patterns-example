/// <reference types="cypress" />

import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given("I'm at {string} page", page => {
  if (page === 'Home'){
    cy.visit("/")
  } else {
    cy.visit("/" + page)
  }
});

When("I go to {string} page", page => {
  cy.log("go to page:"+ page)
  cy.visit(`/${page}`)
});
