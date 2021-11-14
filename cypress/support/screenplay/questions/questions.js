import { createQuestion } from "cypress-screenplay";
  
const readSelectedFilter = createQuestion((cy, param, answer) => {
    cy.get(".connectors-tabs").get(".active").should(item => answer(item.text()))
})

export { readSelectedFilter };
