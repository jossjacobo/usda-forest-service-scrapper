// const notionToken = Cypress.env("notionToken");
// const notionDatabase = Cypress.env("notionDatabaseId");

// const notionBase = "https://api.notion.com/v1";
// const notionDatabasesQuery = `${notionBase}/databases/${notionDatabase}/query`;
// const notionPages = `${notionBase}/pages`;
// const notionTrailUpdaterTag = "Forest Service Trail Update";
// const notionTrailStatusProperty = "Trail Status";

// const headers = {
//   Authorization: `Bearer ${notionToken}`,
//   "Notion-Version": "2021-08-16",
//   "Content-Type": "application/json",
// };

// Cypress.Commands.add("loadPages", () => {
//   cy.request({
//     method: "POST",
//     url: notionDatabasesQuery,
//     headers,
//     body: {
//       filter: {
//         and: [
//           {
//             property: "Tags",
//             multi_select: {
//               contains: notionTrailUpdaterTag,
//             },
//           },
//         ],
//       },
//     },
//   }).then((response) => {
//     const {
//       body: { results },
//     } = response;
//     Cypress.env("pages", results);
//     // cy.writeFile("cypress/fixtures/pages.json", results);
//   });
// });
