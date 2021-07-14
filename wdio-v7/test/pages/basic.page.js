

class Page {
    open(path) {
        browser.url(path);
    }
  
    
  }
  class BasicPage extends Page {
   // const searchEl = await $('[name="cta-search"]');
    // const searchBtn = await $('[name="cta-search"]');
   // const category = await $('[name="cta-Food-link"]')
   //  const headingName =  $('h2.article-title')
   // const linkEl = $('[name="cta-article-link"]')
   //const accountTitle =  await $('#email')
   //const banner = $('.content-article-list-info')   
   //  await BasicPage.searchEl.addValue('COVID-19');
   // await BasicPage.searchBtn.click();
   // const linkEl = await $('[name="cta-article-link"]')
   //  const accountTitle =  await $('#email')
   //const elem = $('.is-rds-h6')

   

   

    get elem() {
        return $('.is-rds-h6')
    }

   get category() {
       return $('#QSIFeedbackButton-btn')
    }

   get headingName() {
       return  $('h2.article-title')
   }
   
   get linkEl() {
       return $('[data-ui-element-name="cta-article-link"]')
    }

    get banner() {
        return  $('.content-article-list-info') 
    }

    get inputEl() {
        return $('#email')
    }
    

   
   open() {
       super.open('http://.....');
   }
  
   
  }
module.exports =  new BasicPage()

  
