/**
 * @author   : Matheus de Castro Sousa
 * @since    : AlegoTools 1.0.0
 * Date      : 2022-01-26
 * Porpouse  : Script for get link download to K-lite codec
 * Node usage : run script
 * Dependencies : npm install --save pupperteer
 */

const puppeteer = require('puppeteer');
const fetch = require('node-fetch');
const { data } = require('cheerio/lib/api/attributes');


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://codecguide.com/download_k-lite_codec_pack_mega.htm");
    const html = await page.evaluate(() => {
        return document.body.children[0].children[1].children[0].children[0].children[1].children[1].children[5].innerHTML;
        
    });
    await browser.close();
    console.log(html);
})();

const url =(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://codecguide.com/download_k-lite_codec_pack_mega.htm");
    const html = await page.evaluate(() => {
        return document.body.children[0].children[1].children[0].children[0].children[1].children[1].children[9].children[0].children[1].childNodes[1].children[0].getAttribute('href');

    });
    await browser.close();
    console.log(html);
})();
