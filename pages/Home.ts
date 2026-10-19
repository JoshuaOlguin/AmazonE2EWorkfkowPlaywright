import { Page, Locator } from '@playwright/test';

export class Home {

  private readonly page: Page;

  private readonly searchButton: Locator;
  private readonly searchTextBox: Locator;
  private readonly stayButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator('#nav-search-submit-button');
    this.searchTextBox = page.locator('#twotabsearchtextbox');
    this.stayButton = page.locator('#redir-stay-at-www');
  }

  async searchForProduct(inputParameter: string): Promise<void> {
    await this.searchTextBox.fill(inputParameter);
    await this.searchButton.click();
  }

  async stayOnAmazonCom(): Promise<void> {
    try {
        await this.stayButton.waitFor({
            state: 'visible',
            timeout: 5000
        });

        await this.stayButton.click();

        console.log('Clicked on "Stay on Amazon.com"');
    } 
    catch (error) 
    {
        console.log('"Stay on Amazon.com" popup was not displayed. Continuing test execution.');
    }
  }
  
  async clickOnSelectedItem(item: Locator): Promise<void> {

  await item
    .locator("[class*='a-size-medium a-spacing-none a-color-base a-text-normal']")
    .click();
  }
}