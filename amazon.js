const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true});

nightmare
  .goto('https://www.amazon.com')
    .type('#twotabsearchtextbox', ['lamb'])
    .click('input.nav-input')
    .wait(1000)
    .evaluate(()=>{
      var elements = Array.from(document.querySelectorAll('.a-size-small.a-spacing-top-mini.a-color-base.a-text-bold')).filter(a=>
      a.innerText === 'Grocery & Gourmet Food')
      elements[0].click();
    })
    .wait(3000)
    .evaluate(function () {
      var nameNodes = document.querySelectorAll('.a-size-base.s-inline.s-access-title.a-text-normal')
      var priceNodes = document.querySelectorAll('.sx-price-whole')
      var nameList = [].slice.call(nameNodes); 
      var priceList = [].slice.call(priceNodes)
      return nameList.map(function(node, index){ 
        return node.innerText + ', ' + priceList[index].innerText
      });
    })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed: fawk',
    error);
  });