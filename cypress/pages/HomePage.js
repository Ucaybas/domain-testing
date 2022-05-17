class HomePage {

    visit() {
        cy.visit({
            url: "https://www.domain.com.au/",
            headers: {
                "Accept-Encoding": "gzip, deflate"
            }
        });
    }

    navigation = {
        buy: () => {
            return cy.get('[data-testid="buy-navigation"]')
        },
        rent: () => {
            return cy.get('[data-testid="rent-navigation"]')
        },
        houseAndLand: () => {
            return cy.get('[data-testid="houseandland-navigation"]')
        },
        newHomes: () => {
            return cy.get('[data-testid="newhomes-navigation"]')
        },
        sold: () => {
            return cy.get('[data-testid="sold-navigation"]')
        },
        retirement: () => {
            return cy.get('[data-testid="retirement-navigation"]')
        },
        rural: () => {
            return cy.get('[data-testid="rural-navigation"]')
        }
    }


}

export default HomePage


