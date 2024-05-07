describe('template spec', () => {
  it('passes', () => {
    // Clears cookies for the current domain
    cy.clearCookies();
    // Set viewport width and height
    cy.viewport(1280, 720);
    cy.visit('https://demoqa.com/');
    cy.contains('[class="card-body"] h5', 'Forms').click();
    cy.contains('#item-0', 'Practice Form').click();
    cy.get('#firstName').type("Ali");
  })
})