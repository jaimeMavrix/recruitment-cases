'use strict';

var kabooPage = function() {

    var registerButton = element(by.buttonText("Register now"));
    var registerLink = element(by.partialLinkText("CREATE NEW ACCOUNT"));
    var loginButton = element(by.buttonText("Log in"));
    var loginLink = element(by.partialLinkText("LOG IN"));
    var accountSubmit = element(by.buttonText("ENTER YOUR DETAILS"));

    var userName = element(by.name('email'));
    var passName = element(by.name('pwd'));

    

    this.get = function() {
        browser.get('https://kaboo.com');
        this.sleep(2000);
    };

    this.getloginButton = function() {
        return loginButton;
    }

    this.waitUrl = function(myUrl) {
        return function () {
            return browser.getCurrentUrl().then(function(url) {
                return myUrl.test(url);
            });
        }
    }; 

    this.sleep = function(time) {
        browser.driver.sleep(time);
    };

    this.goToLogin = function() {
        loginLink.click();
        //wait for url to change
        this.sleep(800);
    };

    this.submitLogin = function() {
        loginButton.click();
        //wait for url to change
        this.sleep(200);
    };

    this.passValidations = function(pass) {
        userName.clear();
        passName.clear();

        passName.sendKeys(pass);
        userName.sendKeys("test");

    };


    this.login = function(user, pass) {
        userName.clear();
        passName.clear();
        
        userName.sendKeys(user);
        passName.sendKeys(pass);
        this.submitLogin();
        //wait for url to change
        browser.wait(this.waitUrl(/lobby/), 5000);
        // browser.wait(function() {
        //     return browser.getCurrentUrl().then(function(url) {
        //         return /lobby/.test(url);
        //     });
        // }, 10000, "URL hasn't changed");
    };


    this.goToRegisterButton = function() {
        registerButton.click();
    };


    this.currentUrl = function() {
        return browser.driver.getCurrentUrl();
    };

};

// var kabooPage = function(){
//     browser.get('http://kaboo.com');
//     browser.driver.sleep(2000);
// };


// kabooPage.prototype = Object.create({}, {
// 	//elements to access
//     home: { get: function () {browser.get('http://kaboo.com'); }},
//     loginLink: { get: function () { return element(by.partialLinkText("LOG IN")); }},
//     registerLink: { get: function () { return element(by.partialLinkText("CREATE NEW ACCOUNT")); }},
//     registerButton: { get: function() { return element(by.buttonText("Register now")); }},
// 	userName: { get: function () { return element(by.name('email')); }},
//     passName: { get: function () { return element(by.name('pwd')); }},
// 	//enter user and password and click log in
//     loginButton: { get: function () { return element(by.buttonText("Log in")); }}, 
//     newAccountSubmit: { get: function () { return element(by.buttonText("ENTER YOUR DETAILS")); }},

//     login: { value: function (user, pass) {
        
//         this.loginLink.click();  
//     	this.userName.sendKeys(user);
//     	this.passName.sendKeys(pass);
//     	this.loginButton.click();
//         //function to wait until loading new site

//         browser.wait(function() {
//             return browser.getCurrentUrl().then(function(url) {
//                 return /lobby/.test(url);
//             });
//         }, 10000, "URL hasn't changed");
//     }},
//     //obtain now the profile link and the logout button to be able to logout
//     //profile: { get: function () { return element(by.css(".c-navigation-item--profile")); }},
//     //buttonLogout: { get: function () { return element(by.css(".profile__btn-logout")); }},
//     logout: {value: function () {
        
//         this.profile.click();
//         browser.waitForAngular();
//         this.buttonLogout.click();

//         browser.wait(function() {
//             return browser.getCurrentUrl().then(function(url) {
//                 return /login/.test(url);
//             });
//         }, 10000, "URL hasn't changed");

//      }}
// });

module.exports = kabooPage;

    