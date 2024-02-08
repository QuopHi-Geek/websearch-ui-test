import { expect, Locator, Page } from '@playwright/test'

import { BasePage } from './BasePage'

export class HelpPage extends BasePage {
  
  readonly searchBarInput: Locator
  readonly searchBar: Locator
  readonly clearButton: Locator
  readonly generalCardSelector: Locator
  readonly fundsCardSelector: Locator
  readonly searchResultSelector:  Locator
  readonly searchResultIndex: Locator
  readonly relatedArticlesSelector: Locator
  readonly verifyArticleCountSelector: Locator
  readonly bunchPlatformSelector: Locator


  constructor(page: Page) {
    super(page)
    this.searchBar = page.locator("input[name='q']")
    this.searchBarInput = page.locator("#search-bar")
    this.clearButton = page.locator("a[role='button'] > .absolute.cursor-pointer.end-0.inset-y-0.pe-4.top-3")
    this.generalCardSelector = page.locator("#general")
    this.fundsCardSelector = page.locator("#funds")
    this.searchResultSelector = page.locator(".section__content")
    this.searchResultIndex = page.locator(".flex.flex-col.gap-3 > div:nth-of-type(1)  .p-5")
    this.verifyArticleCountSelector = page.locator("[class='mt-5'] div")
    this.relatedArticlesSelector = page.locator("[class='jsx-62724fba150252e0 mb-3 text-xl font-bold']")
    this.bunchPlatformSelector = page.locator("ul#custom-links  .no-underline")

  }

  
  async searchKeywordWithEnter(keyword: string) {
    await this.searchBar.click()
    await this.searchBarInput.type(keyword)
    await this.page.keyboard.press('Enter')
  }
  
  async searchKeywordWithClick(keyword: string) {
    await this.searchBar.click()
    await this.searchBarInput.type(keyword)
    await this.searchResultIndex.click()
  }

  async checkSearchDropList(keyword: string) {
    await this.searchBar.click()
    await this.searchBarInput.type(keyword)
  }

  async visit() {
    await this.page.goto('https://help.bunch.capital/en/')
  }

  async clearSearchBar() {
    await this.clearButton.click()
  }

  async assertSearchBarReset() {
    await expect(this.searchBarInput).toBeEmpty()
  }

  async assertSearchBarNotReset() {
    await this.searchBar.click()
    await expect(this.searchBarInput).not.toBeEmpty()
  }
 
  async clickGeneralCard() {
    await this.generalCardSelector.click()
  }

  async clickFundsCard() {
    await this.fundsCardSelector.click()
  }
 
  async assertSearchResults(keyword: string) {
    await expect(this.searchResultSelector).toHaveText(keyword)
  }

  async verifySearchResults(keyword: string) {
    await expect(this.searchResultSelector).toContainText(keyword)
  }

  async assertViewOnArticles(relatedArticles: string) {
    await expect(this.relatedArticlesSelector).toHaveText(relatedArticles)
  }
  
  async verifyArticleCount(count: number, keyword: string) {
    await expect(this.verifyArticleCountSelector).toContainText('' + keyword)
  }

}
