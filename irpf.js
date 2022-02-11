/**
 * @author   : Matheus de Castro Sousa
 * @since    : AlegoTools 1.0.0
 * Date      : 2022-01-20
 * Porpouse  : Script for get link download to IRPF
 * Node usage : run script
 * Dependencies : npm install --save pupperteer
 */

 const puppeteer = require('puppeteer');

 (async () => {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   await page.goto('https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/download/pgd/dirpf');
   const html = await page.evaluate(() => {
     return document.getElementById('ac965d2e-fbc2-4313-8528-f3c502685ab9').children[0].children[0].children[0].href;
 });
 await browser.close();

 console.log(html);
 })();
 
 