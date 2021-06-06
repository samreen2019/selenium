import {until} from 'selenium-webdriver';

import webdriver from 'selenium-webdriver';
import chrome from 'chromedriver';

const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {args: ['--no-sandbox']});

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build(); 

afterAll(async () => {
  await driver.quit();
});

test('should have a title', async  () => {
  await driver.get('http://localhost:3000');
  await driver.wait(until.titleIs('React App'), 1000);
});



