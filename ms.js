const { Builder, Browser, By, until } = require("selenium-webdriver");

(async function ms() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.manage().window().maximize();
    await driver.get('file:///C:/Users/Bholu/edge/msn.html');
    await driver.sleep(2000);
    let e = await driver.findElement(By.xpath('//*[@id="root"]/div/div/fluent-design-system-provider/div/div[4]/div/shopping-page-base')).getShadowRoot();
    await driver.sleep(2000);
    let e2 = await e.findElement(By.css('.shopping-page-base-root > .shopping-page-content > shopping-homepage'));
    let e3 = await e2.getShadowRoot();
    await driver.sleep(2000);
    let e4 = await e3.findElement(By.css('div > .homepage '))
    let e5 = await e4.getShadowRoot();
    await driver.sleep(5000);
    let e6 = await e5.findElement(By.css('msn-shopping-game-pane'))
    let e7 = await e6.getShadowRoot()
    await driver.sleep(2000);
    // let e8 = await e7.findElement(By.css('.shopping-game-pane-container > msft-stripe > .shopping-game-card-outline.wavy > .shopping-game-card > msn-shopping-card > .shopping-overlay-container'))
    let e8 = await e7.findElement(By.css(".shopping-game-pane-container > msft-stripe > div[style='--i:2'] > .shopping-game-card > msn-shopping-card"))
    let e9 = await e8.getShadowRoot();
    let e10 = await e9.findElement(By.css(".shopping-product-wrapper > .shopping-body > .shopping-info-container >.shopping-title-text"))
    console.log(await e10.getAttribute('href'))
    // let cl = driver.actions({async: true});
    // await cl.move({origin: e8}).perform()
    // let e9 = await e8.findElement(By.css('.shopping-overlay-buttons > .shopping-see-more-overlay-button'))
    // let e11 = await e10.getAttribute('href')
    // await driver.sleep(5000);
    // await e9.click();
    await driver.sleep(2000);
    await driver.quit();
    
  } catch (e) {
    console.log(e.message);
  }
})();
