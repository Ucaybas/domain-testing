class HomePage {

    input = {
        search: () => {
            return cy.get('[data-testid="typeahead__input-item-wrapper"]');
        }
    }

    button = {
        search: () => {
            return cy.get('[data-testid="search-button"]');
        }
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

    visit() {
        cy.visit({
            url: "/",
            headers: {
                "Accept-Encoding": "gzip, deflate"
            }
        });
    }

    validatePageUrl(page = "/") {
        return cy.url().should('include', page);
    }

    interceptCall(call, alias) {
        return cy.intercept(call).as(alias);

    }
}

export default HomePage