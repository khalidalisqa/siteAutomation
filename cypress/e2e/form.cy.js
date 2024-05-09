/// <reference types="cypress-xpath" />
describe('Test suit-001', () => {
  it('Automate the form', () => {
    // Clears cookies for the current domain
    cy.clearCookies();
    // Set viewport width and height
    cy.viewport(1280, 720);
    cy.visit('https://demoqa.com/');
    cy.contains('[class="card-body"] h5', 'Forms').click();
    cy.xpath('//span[text()="Practice Form"]').click({force:true});
    //cy.contains('#item-0', 'Practice Form').click();
    cy.get('#firstName').type("Ali");
    cy.get('#lastName').type("shan");
    cy.get('#userEmail').type("upmail@gmail.com");
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#userNumber').type("03009988776");
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('.subjects-auto-complete__value-container').click();
    cy.get('#subjectsInput',{ timeout: 10000}).type("English{enter}");
    cy.get('#uploadPicture', { timeout: 20000 }).selectFile(
      "cypress/fixtures/abc.text"
    );
    for (let i = 0; i < 10; i++) {
      cy.get('#dateOfBirthInput').type('{backspace}');
    }
    cy.get('#dateOfBirthInput').type('2 DEC 1995{enter}');
    cy.get('#currentAddress').type("abc@gmail.com");
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3', {timeout: 10000}).click();
    cy.get('#react-select-3-input', {timeout: 10000}).type("NCR{enter}");
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3', {timeout: 10000}).click();
    cy.get('#react-select-4-input', {timeout: 10000}).type("Delhi{enter}");
   })
})