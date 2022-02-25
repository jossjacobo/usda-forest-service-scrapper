import "dotenv/config";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
const databaseId = process.env.NOTION_DATABASE_ID;

describe("usda forest service scrapper", () => {
  beforeEach(() => {
    cy.visit(
      "https://www.fs.usda.gov/recarea/inyo/recreation/recarea/?recid=20464&actid=50"
    );
  });

  it("Laruel Lakes Trail Status is Open", () => {
    cy.get("#centercol")
      .contains("Area Status")
      .parent()
      .should(($span) => {
        const text = $span
          .text()
          .toLocaleLowerCase()
          .replace("area status:", "")
          .trim();

        expect(text).contains("open");
      });
  });
});
