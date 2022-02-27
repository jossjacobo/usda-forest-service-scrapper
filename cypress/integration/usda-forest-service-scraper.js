const notion = require("../../notion");

describe("usda forest service scrapper", () => {
  before(() => {
    cy.visit("https://www.fs.usda.gov/");
    notion.queryForestServiceTrails().then((results) => {
      Cypress.env("pages", results);
    });
  });

  beforeEach(() => {
    cy.visit(
      Cypress.env("pages")[0].properties["Forest Service Trail URL"].url
    );
  });

  it("Laruel Lakes Trail Status is Open", () => {
    cy.get("#centercol")
      .contains("Area Status")
      .parent()
      .should(async ($span) => {
        const text = $span
          .text()
          .toLocaleLowerCase()
          .replace("area status:", "")
          .trim();
        const pageId = Cypress.env("pages")[0].id;
        await notion.updateTrail(pageId, text);
      });
  });
});
