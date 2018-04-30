function Phone (brand, price, color, platform, screenSize, screenWidth, screenHeight) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.platform = platform;
	this.screenSize = screenSize;
	this.screenWidth = screenWidth;
	this.screenHeight = screenHeight;
}

Phone.prototype.printInfo = function(e){
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " zł");
};

Phone.prototype.addInfo = function(e){
	console.log("The phone operating system is " + this.platform + ", screen size is " + this.screenSize + " in and the screen resolution is " + this.screenWidth + "x" + this.screenHeight + "px");
};


var iPhone6 = new Phone("Apple", 2350, "silver", "iOS", 4.7, 750, 1334),
	SamsungGalaxyS6 = new Phone("Samsung", 1805, "blue", "Android", 5.1, 1440, 2560),
	GooglePixel = new Phone("Google", 1999, "black", "Android", 5.0, 1080, 1920);