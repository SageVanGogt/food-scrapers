const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true});

nightmare
  .goto('https://www.amazon.com')
    .type('#twotabsearchtextbox', ['snickers'])
    .click('input.nav-input')
    .wait(1000)
    .click('h2.a-size-base.s-inline.s-access-title.a-text-normal')
    .wait(1000)
    .click('input#add-to-cart-button')
    .wait(1000)
    .click('a#nav-cart')
    .wait(1000)
    .click('input.a-button-input')
    .wait(1000)
    .type('#ap_email', '[youremail'])
    .wait(1000)
    .click('input#continue')
    .wait(1000)
    .type('#ap_password', ['yourpassword'])
    .wait(1000)
    .click('input#signInSubmit')
    .wait(4000)
    .click('span#orderSummaryPrimaryActionBtn')
    .wait(3000)
    .click('span#orderSummaryPrimaryActionBtn')
    .wait(3000)
    .click('span#submitOrderButtonId')
    .wait(3000)
  .end()
  .then(function (result) {
    console.log('you made food order');
  })
  .catch(function (error) {
    console.error('Search failed: fawk',
    error);
  });
