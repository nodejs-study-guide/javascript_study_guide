'use strict'

// If you have a several lines of code that you want to run asynchronous, but don't want to 
// create an proper function, then you can do this by setting up a closure function instead:



const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({path: 'example.png'});

    await browser.close();
})();

// see - https://pptr.dev/#usage