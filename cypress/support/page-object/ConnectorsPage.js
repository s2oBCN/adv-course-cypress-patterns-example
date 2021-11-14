export class ConnectorsPage {
    getActiveFilter(){
        return cy.get(".connectors-tabs").get(".active")
    }

    getConnectors(){
        return cy.get('.connectors-list > ul > li')
    }
}