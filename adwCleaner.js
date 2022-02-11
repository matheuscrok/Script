/**
 * @author   : Matheus de Castro Sousa
 * @since    : AlegoTools 1.0.0
 * Date      : 2022-01-26
 * Porpouse  : Script for get link download to AdwCleaner
 * Node usage : run script
 * Dependencies : npm install --save pupperteer
 */

const puppeteer = require('puppeteer');
const fetch = require('node-fetch');
const { data } = require('cheerio/lib/api/attributes');


// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://br.malwarebytes.com/adwcleaner/');
//     const html = await page.evaluate(() => {
//        return document.getElementById('cta-adwcleaner-hero-download-adwcleaner-br').href;
       
//     });
//     console.log(html);
// })();

(async () => {
 await fetch('https://download.toolslib.net/download/direct/1/latest?channel=release')
.then(response=>console.log(response.headers.get('content-disposition')))
})();
