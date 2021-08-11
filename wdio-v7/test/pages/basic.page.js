

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

  
