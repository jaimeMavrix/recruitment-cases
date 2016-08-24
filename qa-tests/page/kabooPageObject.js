var kabooHomepage = function(){

    //elements to access
	var userName = element(by.name('email'));
	var passName = element(by.name('pwd'));
	//enter user and password and click log in
    var login = element(by.buttonText("Log in"))


	this.get = function() {
		browser.get('http://kaboo.com/en/login');
	};

	this.setUser = function(user) {
		userName.sendKeys(u);
	};

	this.setPass = function(pass) {
		passName.sendKeys(pass);
	};

    this.login = function() {
    	login.click();
    };
};