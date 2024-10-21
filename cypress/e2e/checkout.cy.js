// eslint-disable-next-line max-len
/// <reference types='cypress' />

import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';

const homePage = new HomeAndCataloguePageObject();

const testData = {
  product: 'Sony vaio i7',
  category: 'Laptops',
  alertMessage: 'Product added',
  name: 'Vlad',
  country: 'Ukraine',
  city: 'Ivano-Frankivsk',
  card: '5457 7558 6985 2331',
  month: '10',
  year: '2024'
};

describe('Demoblaze Checkout Flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should complete checkout flow', () => {
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.product);
    homePage.addToCart();
    homePage.assertAlert(testData.alertMessage);

    homePage.clickOnCart();
    homePage.placeOrder();
    homePage.fillOrderForm(
      testData.name,
      testData.country,
      testData.city,
      testData.card,
      testData.month,
      testData.year
    );

    homePage.purchase();
    homePage.assertSuccessModal();
    homePage.confirmOk();
  });
});
