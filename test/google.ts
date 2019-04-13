import { Landing } from '../src/page/landing';
import { NavigationOptions } from '../src/module/header';
import { Verify } from 'oi-verify';

describe('Check landing page for 123 game', () => {
  beforeEach('Open landing for 123 game', async () => {
    await browser.url('https://webdriver.io/');
    await new Promise((resolve) => setTimeout(resolve, 7000));
  });

  it('should go to 123 results page by clicking on result button', async () => {
    const page = new Landing();
    await page.header.navigate(NavigationOptions.Guide);
    await Verify.stringsAreEqual(
      () => browser.getUrl(),
      'https://webdriver.io/docs/gettingstarted.html'
    );
  });

  it('should go to 123 regular page by clicking on blue button', async () => {
    const page = new Landing();
    await page.header.navigate(NavigationOptions.Blog);
    await Verify.stringsAreEqual(
      () => browser.getUrl(),
      'https://webdriver.io/blog/'
    );
  });
});
