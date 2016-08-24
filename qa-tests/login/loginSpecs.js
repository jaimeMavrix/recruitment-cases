//'use strict';

var kabooPage = require('./../kabooPageObject.js');

describe('Protractor Demo App', function() {
    
    // beforeEach(function() {
    //     page = new kabooPage();
    // });

    // afterEach(function () {
    //   browser.manage().logs().get('browser').then(function (browserLog) {
    //     expect(browserLog.length).toEqual(2);
    //     if (browserLog.length) {
    //     console.error('log: ' + JSON.stringify(browserLog));
    //     }
    //   });
    // });

it('Check all password validations', function() {

    kabooPage = new kabooPage();

    kabooPage.get();
    kabooPage.sleep(3000);

    kabooPage.goToLogin();

    kabooPage.passValidations('1234567');
    //Check that the error is the correct one
    expect(element(by.css(".c-field__error-msg")).getText()).toBe('PASSWORD MUST BE GREATER THAN 8 CHARACTERS');
    expect(element(by.buttonText('Log in')).getAttribute('class')).not.toBe('btn auth-form__primary ng-isolate-scope');
    
    kabooPage.passValidations('12345678');
    expect(element(by.css(".c-field__error-msg")).getText()).toBe('PASSWORD MUST HAVE A LETTER CHARACTER');
    expect(element(by.buttonText('Log in')).getAttribute('class')).not.toBe('btn auth-form__primary ng-isolate-scope');
    
    kabooPage.passValidations('Testingg');
    expect(element(by.css(".c-field__error-msg")).getText()).toBe('PASSWORD MUST HAVE A NUMERIC CHARACTER');
    expect(element(by.buttonText('Log in')).getAttribute('class')).not.toBe('btn auth-form__primary ng-isolate-scope');

    kabooPage.passValidations('a12345678901234567890');
    expect(element(by.css(".c-field__error-msg")).getText()).toBe('PASSWORD MUST BE LESS THAN 20 CHARACTERS');
    expect(element(by.buttonText('Log in')).getAttribute('class')).not.toBe('btn auth-form__primary ng-isolate-scope');

    kabooPage.passValidations('Testing1');
    //now with a valid password the LOG IN button should be active
    expect(element(by.buttonText('Log in')).getAttribute('class')).toBe('btn auth-form__primary ng-isolate-scope');
  });


//   it('should log in and check is logged in', function() {

//     //kabooPage = new kabooPage();
//     //var that will use
//     var myUser = 'testuser';
//     var myPass = 'testpassw';
    
//     // kabooPage.get();
//     // kabooPage.sleep(2000);
    
//     //kabooPage.goToLogin();

//     kabooPage.login(myUser, myPass);
    
   
// //     Check the url end is /lobby

//     expect(browser.getCurrentUrl()).toBe('https://kaboo.com/en/lobby');
//   });


  // it("will go to profile and logout", function() {
  //   page.logout();

  //   expect(browser.driver.getCurrentUrl()).toBe("https://kaboo.com/en/login");
  // });

  // it('will check menu is displayed', function(){
    
  //   expect(element(by.exactRepeater("item in menu")).isPresent()).toBe(true);

  // });

});
