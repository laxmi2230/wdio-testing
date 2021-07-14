//import BasicPage from '../pages/basic.page'
const BasicPage = require('../pages/basic.page')

describe('works correctly', () => {
    it('should give correct output', () => {
       browser.url('https://content.werally.com/')
      expect(browser).toHaveTitle('All Articles | Rally')
    })
    it('should have correct class name', async() => {
      const searchEl = await $('[name="cta-search"]');
      const searchBtn = await $('[name="cta-search"]');
      searchEl.addValue('health')
      searchBtn.click()
      expect(searchEl).toHaveValue('health')
    })
    it('should verify correct title name', () => {
      expect(BasicPage.elem).toHaveTextContaining('Articles')
        
    });
    it('should have correct category', () => {
      let clickable = BasicPage.category.isClickable()  
      console.log(clickable)      
    });

   it('should have correct h2 name', () => {
       expect(BasicPage.headingName).toHaveText('5 Summer Health Myths –– Can You Sort Fact From Fiction?')
   });
    it('should open correct url', () => {
        BasicPage.linkEl.click()
        expect(browser).toHaveUrl('https://content.werally.com/article/420380')
     });
})
describe('text works correctly', () => {
    it('should have acoount name', () => {
        browser.url('https://accounts.werally.com/login')
        BasicPage.inputEl.setValue('laxmi@gmail.com')
    })
});
describe('to have correct div element', () => {
    it('should render correctly', () => {
      browser.url('https://content.werally.com/search?topic=Mental%20Health')  
      expect(BasicPage.banner).toBeDisplayed();    
    });
});