const scraperObject = {
    url: 'https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/download/pgd/dirpf',
    async scraper(browser) {
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);


        
        const html = await page.evaluate(() => {
            return document.getElementById('ac965d2e-fbc2-4313-8528-f3c502685ab9').children[0].children[0].children[0].href;
        });
        console.log(html);

         
    }
}

module.exports = scraperObject;
