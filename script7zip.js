
/**
 * @author   : Matheus de Castro Sousa
 * @since    : AlegoTools 1.0.0
 * Date      : 2022-02-20
 * Porpouse  : Script for get link download to 7zip
 * Node usage : run script // url "https://www.7-zip.org/download.html"
 * Dependencies : npm install --save pupperteer
 */

 const puppeteer = require('puppeteer');

 (async () => {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   await page.goto('https://www.7-zip.org/download.html');
   const html = await page.evaluate(() => {
     return document.getElementsByClassName('Item')[0].childNodes[0].href;
 });
 console.log(html);
 })();
 
 