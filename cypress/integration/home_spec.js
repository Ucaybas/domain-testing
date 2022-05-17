import HomePage from "../pages/HomePage"

const home = new HomePage();

describe('Scenario 1 - Navigate to all menu items and verify pages load', () => {
    before('Go to home page', () => {
        home.visit();
    });

    it('Navigate to BUY', () => {
      home.navigation.buy().click();
    });

    it('Navigate to RENT', () => {
        home.navigation.rent().click();
      });

      it('Navigate to HOUSE AND LAND', () => {
        home.navigation.houseAndLand().click();
      });

      it('Navigate to NEW HOMES', () => {
        home.navigation.newHomes().click();
      });

      it('Navigate to SOLD', () => {
        home.navigation.sold().click();
      });

      it('Navigate to RETIREMENT', () => {
        home.navigation.retirement().click();
      });

      it('Navigate to RURAL', () => {
        home.navigation.rural().click();
      });


  })
  