/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {SELECTORS} from '../../fixtures/selectors'
import {URLS} from '../../fixtures/urls'

const {HOME} = SELECTORS

describe('Blog Home page', function() {
  it('the carousel works correctly', function() {
    cy.visit(URLS.HOME)
      .get(HOME.ITEM.TITLE)
      .contains(HOME.TEXT.TITLE)

    // Carousel
    cy.get(HOME.ITEM.IMAGE_ACTIVE).then(response => {
      const src = response[0].attributes[0].value
      cy.get(HOME.ITEM.ARROW)
        .click()
        .get(HOME.ITEM.IMAGE_ACTIVE)
        .then(response => {
          const src2 = response[0].attributes[0].value

          expect(src).to.not.equal(src2)
        })
    })
  })
})
