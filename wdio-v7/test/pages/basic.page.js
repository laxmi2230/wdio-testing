

class Page {
    open(path) {
        browser.url(path);
    }
  
    
  }
  class BasicPage extends Page {
   // const searchEl = await $('[name="cta-search"]');
    // const searchBtn = await $('[name="cta-search"]');
  
   get searchEl(){
       return $('[name="cta-search"]');
   }
  
   get searchBtn() {
       return $('[name="cta-search"]');
   }
  
   open() {
       super.open('http://.....');
   }
  
   
  }


  export default new BasicPage()