import webdriver from 'selenium-webdriver';
import chrome from 'chromedriver';
from selenium.webdriver.chrome.options import Options
chrome_options = Options()
chrome_options.add_argument("--no-sandbox") # linux only

export const getDriver = () => {
  let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
  driver = webdriver.Chrome(options=chrome_options)
  return driver;
};










