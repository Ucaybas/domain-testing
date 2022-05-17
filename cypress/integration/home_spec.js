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

        // Wait for tracking event to fire & validate URL
        cy.wait(["@getTrackingEvent"], {timeout: 10000});
        home.validatePageUrl();
    });

    it('Navigate to RENT', () => {
        cy.intercept(trackingCall).as("getTrackingEvent");
        home.navigation.rent().click();

        // Wait for tracking event to fire & validate URL
        cy.wait(["@getTrackingEvent"], {timeout: 10000});
        home.validatePageUrl("/?mode=rent");
    });

    it('Navigate to HOUSE AND LAND', () => {
        cy.intercept(trackingCall).as("getTrackingEvent");
        home.navigation.houseAndLand().click();

        // Wait for tracking event to fire & validate URL
        cy.wait(["@getTrackingEvent"], {timeout: 10000}); 
        home.validatePageUrl("/house-and-land");
    });

    it('Navigate to NEW HOMES', () => {
        cy.intercept(trackingCall).as("getTrackingEvent");
        home.navigation.newHomes().click();

        // Wait for tracking event to fire & validate URL
        cy.wait(["@getTrackingEvent"], {timeout: 10000}); 
        home.validatePageUrl("/new-homes");
    });

    it('Navigate to SOLD', () => {
        cy.intercept(trackingCall).as("getTrackingEvent");
        home.navigation.sold().click();

        // Wait for tracking event to fire & validate URL
        cy.wait(["@getTrackingEvent"], {timeout: 10000});
        home.validatePageUrl("/?mode=sold");
    });

    it('Navigate to RETIREMENT', () => {
        cy.intercept(trackingCall).as("getTrackingEvent");
        home.navigation.retirement().click();

        // Wait for tracking event to fire & validate URL
        cy.wait(["@getTrackingEvent"], {timeout: 10000}); 
        home.validatePageUrl("/retirement");
    });

    it('Navigate to RURAL', () => {
        cy.intercept(trackingCall).as("getTrackingEvent");
        home.navigation.rural().click();

        // Wait for tracking event to fire & validate URL
        cy.wait(["@getTrackingEvent"], {timeout: 10000});
        home.validatePageUrl("/rural");
    });


  })
  