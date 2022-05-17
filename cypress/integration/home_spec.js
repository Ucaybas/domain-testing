import HomePage from "../pages/HomePage"

describe('Scenario 1 - Navigate to all menu items and verify pages load', () => {
    const home = new HomePage();
    const trackingCall = "https://api-js.mixpanel.com/track/*";

    before('Go to home page', () => {
        home.visit();
    });

    it('Navigate to BUY', () => {
        cy.intercept(trackingCall).as("getTrackingEvent");
        home.navigation.buy().click();
        cy.wait(["@getTrackingEvent"], {timeout: 10000}); // Wait for tracking event to fire & validate URL
        home.validatePageUrl();
    });

    it('Navigate to RENT', () => {
        cy.intercept(trackingCall).as("getTrackingEvent");
        home.navigation.rent().click();
        cy.wait(["@getTrackingEvent"], {timeout: 10000}); // Wait for tracking event to fire & validate URL
        home.validatePageUrl("/?mode=rent");
    });

    it('Navigate to HOUSE AND LAND', () => {
        cy.intercept(trackingCall).as("getTrackingEvent");
        home.navigation.houseAndLand().click();
        cy.wait(["@getTrackingEvent"], {timeout: 10000}); // Wait for tracking event to fire & validate URL
        home.validatePageUrl("/house-and-land");
    });

    it('Navigate to NEW HOMES', () => {
        cy.intercept(trackingCall).as("getTrackingEvent");
        home.navigation.newHomes().click();
        cy.wait(["@getTrackingEvent"], {timeout: 10000}); // Wait for tracking event to fire & validate URL
        home.validatePageUrl("/new-homes");
    });

    it('Navigate to SOLD', () => {
        cy.intercept(trackingCall).as("getTrackingEvent");
        home.navigation.sold().click();
        cy.wait(["@getTrackingEvent"], {timeout: 10000}); // Wait for tracking event to fire & validate URL
        home.validatePageUrl("/?mode=sold"); 
    });

    it('Navigate to RETIREMENT', () => {
        cy.intercept(trackingCall).as("getTrackingEvent");
        home.navigation.retirement().click();
        cy.wait(["@getTrackingEvent"], {timeout: 10000}); // Wait for tracking event to fire & validate URL
        home.validatePageUrl("/retirement");
    });

    it('Navigate to RURAL', () => {
        cy.intercept(trackingCall).as("getTrackingEvent");
        home.navigation.rural().click();
        cy.wait(["@getTrackingEvent"], {timeout: 10000}); // Wait for tracking event to fire & validate URL
        home.validatePageUrl("/rural");
    });
});

describe('Scenario 2 - Search for Sydney and verify page loads', () => {
    const home = new HomePage();
    const trackingCall = "https://api-js.mixpanel.com/track/*";

    before('Go to home page', () => {
        home.visit();
    });

    it('Search for Sydney', () => {
        home.input.search().type('Sydney');
        home.button.search().click();
        cy.intercept(trackingCall).as("getTrackingEvent");
        cy.wait(["@getTrackingEvent"], {timeout: 10000}); // Wait for tracking event to fire & validate URL
        home.validatePageUrl("/sale/?excludeunderoffer=1&suburb=sydney-nsw-2000");
    })
});