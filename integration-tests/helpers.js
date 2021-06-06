import webdriver from 'selenium-webdriver';
import chrome from 'chromedriver';

const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {args: ['--no-sandbox']});


export const getDriver = () => {
  let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build();
  return driver;
};









