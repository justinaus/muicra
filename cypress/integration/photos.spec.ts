// type definitions for Cypress object "cy"

/// <reference path="../support/index.d.ts" />

describe('기업주문 주문등록', function () {
  beforeEach(function () {
    cy.visit('/photos');
  });

  it('진입 | 페이지가 정상 노출된다', () => {
    cy.findByText('Photos').should('exist');
  });

  it('Photo 수정', () => {
    cy.get('table a').first().click();

    cy.url().should('include', '/photos/');

    cy.findByText('수정').should('exist');

    cy.findByText('수정').click();

    cy.url().should('include', '/photo-modify/');

    cy.dataCy('albumId').type('hello');

    cy.findByText('수정').click();

    cy.url().should('eq', 'http://localhost:3000/photos');
  });
});
