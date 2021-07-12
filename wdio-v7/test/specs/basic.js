
const BasicPage = require('../pages/basic.page')

describe('works correctly', () => {
    it('should give correct output', () => {
       browser.url('https://content.werally.com/')
      expect(browser).toHaveTitle('All Articles | Rally')
    })
    it('should have correct class name', () => {
       BasicPage.searchEl.addValue('health');
       BasicPage.searchBtn.click();
        
       expect(BasicPage.searchEl).toHaveValue('health')
        //await browser.pause(6000);
    })
    it('should verify correct title name', () => {
      //  const = $('.has-text-wrap')
        expect(browser).toHaveTitle('Article Search Results | Rally')
        
    });
    it('should have correct category', async() => {
      const category = await $('[name="cta-Food-link"]')
      expect(category).toHaveText('Food')        
    });

   it('should have correct h2 name', () => {
       const headingName =  $('h2.article-title')

       expect(headingName).toHaveText('5 Summer Health Myths –– Can You Sort Fact From Fiction?')
       
   });
   it('should have correct link and is clickable', () => {
       const linkEl = $('[name="cta-article-link"]')
       expect(linkEl).toBeClickable()
    });
    it('should open correct url', async() => {
        const linkEl = await $('[name="cta-article-link"]')


        linkEl.click()
        expect(browser).toHaveUrl('https://content.werally.com/article/420380')

       


    });
})


describe('text works correctly', () => {
    it('should have acoount name', async() => {
        browser.url('https://accounts.werally.com/login')
       const accountTitle =  await $('#email')
        accountTitle.setValue('laxmi@gmail.com')

    await browser.pause(6000)
    })
});

describe('to have correct div element', () => {
    it('should render correctly', () => {
      browser.url('https://content.werally.com/search?topic=Mental%20Health')
      const banner = $('.content-article-list-info')   
      expect(banner).toBeDisplayed();    
    });
    
});