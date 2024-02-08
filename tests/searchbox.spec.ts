import { test, Page, expect } from '@playwright/test';

import { HelpPage } from '../page-objects/HelpPage';
import {validateNoLinksFound, validateNumberOfLinksFound, validateSearchDropList } from '../helpers';

test.describe.parallel('Help Page tests @bunch', () => {
  let helPage: HelpPage
  
   test.beforeEach(async ({ page }) => {
    helPage = new HelpPage(page)
   })

  test('Test search box for keyword', async ({ page }) => {
    await helPage.visit()
    await helPage.searchKeywordWithEnter('Fund')
    await helPage.verifySearchResults("Fund")
  }) 
 

  test('Search should find test results', async ({ page }) => {
    await helPage.visit()
    await helPage.searchKeywordWithEnter('Fund')
    await validateNumberOfLinksFound(page,
       "div[class='flex flex-col gap-3'] div:nth-child(n) a",
        10)
  })


  test('Search should not find any results', async ({ page }) => {
    await helPage.visit()
    await helPage.searchKeywordWithEnter('dummy')

    await validateNoLinksFound(
      page,
      '.section__content',
      "We couldn't find any articles for:dummy"
    )
  })

  test('Validate search box dropdown list', async ({ page }) => {
    await helPage.visit()
    await helPage.checkSearchDropList('angel')

    await validateSearchDropList(page, "div[class='flex flex-col gap-3'] div:nth-child(n) a",
       10)
  })

  test('Click and access search card', async ({ page }) => {
    await helPage.visit()
    await helPage.clickGeneralCard()

    //assert card general article count
    await helPage.verifyArticleCount(26, "articles")
  
  })

  test('Validate search results not cleared', async ({ page }) => {
    await helPage.visit()
    await helPage.searchKeywordWithClick("Trust")

    //navigate back to results page
    await page.goBack()
    await helPage.verifySearchResults("Trust")
  }) 


  test('Navigate to bunch platform', async ({ context, page }) => {
    await helPage.visit()
  
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      await helPage.bunchPlatformSelector.click()
    ])
  
    //screenshot old page
    await page.screenshot({ path: 'screenshot-tab-old.png' })
  
    await newPage.getByText('Welcome to bunch').click()
    //screenshot new page
    await newPage.screenshot({ path: 'screenshot-tab-new.png' })
  })
  
})
