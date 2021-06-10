import webdriver from 'selenium-webdriver';
import chromewebdriver  from "selenium-webdriver/chrome"
const chromeOptions = new chromewebdriver.Options();
chromeOptions.addArguments("--no-sandbox");
export const getDriver = () => {
  let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();
  return driver;
};








