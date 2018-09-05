const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true});

nightmare
  .goto('https://shop.safeway.com/welcome.html')
    .wait(3000)
    .type('#zipcode', ['80202'])
    .wait(1000)
    .click('.btn.btn-default')
    .wait(3000)
    .type('#search-img', ['lamb'])
    .wait(1000)
    .click('.searchBtn')
    .wait(3000)
    .evaluate(function () {
      console.log('cat')
      var nameNodes = document.querySelectorAll('.product-title')
      var priceNodes = document.querySelectorAll('.product-price')
      var nameList = [].slice.call(nameNodes); // Why did I have to do this?
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
