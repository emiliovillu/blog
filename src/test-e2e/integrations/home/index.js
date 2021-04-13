/* eslint-disable no-undef */
import {SELECTORS} from '..'
import {URLS} from '../../fixtures/urls'

const {HOME} = SELECTORS

describe('Filters Lead page', function() {
  it('load page', function() {
    // let ref = ''

    cy.visit(URLS.HOME)

    // Search Filters
    // cy.get(LEADS.LIST.ITEM.REFERENCE)
    //   .first()
    //   .then(response => {
    //     ref = response.text().split('Ref. ')[1]
    //     cy.get(LEADS.FILTERS.SEARCH.ITEM)
    //       .as('filterSearch')
    //       .type(`ref:${ref}`)
    //       .visitFirstLead()
    //       .get(LEADS.LIST.ITEM.REFERENCE)
    //       .contains(ref)
    //       .get('@filterSearch')
    //       .type('{del}{selectall}{backspace}')
    //   })

    // // Sites Filters
    // cy.clickElementLeadFilterCheckbox(
    //   LEADS.FILTERS.SITES.LABEL.DEFAULT,
    //   LEADS.FILTERS.SITES.SELECT_ITEM.FOTOCASA
    // )
    //   .visitFirstLead()
    //   .get(LEADS.LIST.ITEM.LOGO.IMAGE)
    //   .first()
    //   .should('have.attr', 'src')
    //   .should('include', LEADS.LIST.ITEM.LOGO.SRC)
    //   .clickElementLeadFilterCheckbox(
    //     LEADS.FILTERS.SITES.LABEL.FOTOCASA,
    //     LEADS.FILTERS.SITES.SELECT_ITEM.FOTOCASA
    //   )
  })
})
