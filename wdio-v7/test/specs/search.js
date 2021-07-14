//import BasicPage from '../pages/basic.page'
const SearchPage = require('../pages/search.page')


describe('text works correctly', () => {
    it('should have test fitness', () => {
        browser.url('https://content.werally.com/search?topic=Fitness')
    //    const infotitle = $('.has-text-wrap')
        expect(SearchPage.infotitle).toHaveTextContaining('Fitness')
    })
});

