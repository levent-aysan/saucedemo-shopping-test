describe("SauceDemo Shopping Test", () => {
  it("should login and add the highest priced item to the cart", () => {
    // Step 1: Navigate to the URL
    cy.then(Cypress.session.clearCurrentSessionData);
    cy.visit("https://www.saucedemo.com/");

    // Step 2: Login
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Step 3: Identify and select the highest priced item
    cy.get(".inventory_item_price").then(($prices) => {
      // Convert prices text to numbers and find the highest price
      const prices = $prices
        .map((i, el) => parseFloat(el.innerText.replace("$", "")))
        .get();
      const highestPrice = Math.max(...prices);

      // Find the element that matches the highest price and click the associated add-to-cart button
      cy.get(".inventory_item").each(($item) => {
        if ($item.find(".inventory_item_price").text().includes(highestPrice.toFixed(2))) {
          cy.wrap($item).find("button").click();
        }
      });
    });

    // Step 4: Verify that the item is added to the cart
    cy.get(".shopping_cart_badge").should("contain", "1");
  });
});
