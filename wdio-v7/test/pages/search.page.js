class Page {
    open(path) {
        browser.url(path);
    }
  
    
  }
  class SearchPage extends Page {
    //const infotitle = $('.has-text-wrap')


   get infotitle() {
       return $('.has-text-wrap')
   }

   open() {
    super.open('http://.....');
}
}

module.exports =  new SearchPage()