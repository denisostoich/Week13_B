describe('Find the front page of the Wikipedia page', () => {
    it('Open Google page', () => {
        browser.url('https://www.google.com/')
    });
    it('Type "Wikipedia" in the Google web search engine and press Enter', () => {
        let input = $('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');
        input.addValue('Wikipedia');
        browser.keys('Enter')
    });
    it('Click and verify the match of the URL', () => {
        let wikipedia = $('#rso > div:nth-child(1) > div > div > div.yuRUbf > a > h3');
        wikipedia.click();
        expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    });
  });