const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true});

nightmare
  .goto('http://www.kingsoopers.com')
    .wait(3000)
    .click('a.Color.fo-TimeSlotButtonOptions-button.fo-FindStoreButton.Link')
    .wait(1000)
    .type('input.input-input.SearchBox-inputBox', '80202')
    .wait(1000)
    .click('button.SearchBox-searchButton')
    .wait(3000)
    .click('button.SetPreferredStore-makePreferredLink')
    .wait(3000)
    .type('input#searchbar.input-input.input', 'lamb')
    .wait(1000)
    .click('button.input-button')
    .wait(3000)


    //.click('input.a-button-input')
    //.wait(1000)
    //.type('#ap_email', '[youremail'])
    //.wait(1000)
   // .click('input#continue')
//    .wait(1000)
 //   .type('#ap_password', ['yourpassword'])
 //   .wait(1000)
//    .click('input#signInSubmit')
//    .wait(4000)
 //   .click('span#orderSummaryPrimaryActionBtn')
 //   .wait(3000)
//    .click('span#orderSummaryPrimaryActionBtn')
//    .wait(3000)
 //   .click('span#submitOrderButtonId')
//    .wait(3000)
//    .evaluate(function () {
 //     var nameNodes = document.querySelectorAll('h3.thin.field-content')
//      var list = [].slice.call(nameNodes); // Why did I have to do this?
 //     return list.map(function(node){ 
//        return node.innerText
 //     });
  //  })
  .end()
  .then(function (result) {
    console.log('you made food order');
  })
  .catch(function (error) {
    console.error('Search failed: fawk',
    error);
  });
