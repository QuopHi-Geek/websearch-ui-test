import { expect, Locator, Page } from '@playwright/test'

export async function validateNumberOfLinksFound(
  page: Page,
  selector: string,
  expectedNumber: number
) {
  const numberOfLinks = await page.locator(`${selector}`)
  await expect(numberOfLinks).toHaveCount(expectedNumber)
}

export async function validateNoLinksFound(
  page: Page,
  selector: string,
  expectedErrorText: string
) {
  const numberOfLinks = await page.locator(`${selector}`)
  await expect(numberOfLinks).toHaveText(expectedErrorText)
}

export async function validateSearchDropList(
  page: Page,
  selector: string,
  expectedNumber: number
) {
  const numberOfLinks = await page.locator(`${selector}`)
  await expect(numberOfLinks).toHaveCount(expectedNumber)
}

export async function assertTextForElement(page, selector, expectedText) {
  await expect(page.locator(selector)).toContainText(expectedText)
}

