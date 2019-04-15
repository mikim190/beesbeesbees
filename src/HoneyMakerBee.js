var HoneyMakerBee = function() {
	Bee.call(this);
	this.age = 10;
	this.job = 'make honey';
	this.honeyPot = 0;
};
//Set inheritance
HoneyMakerBee.prototype = Object.create(Bee.prototype);
//Set HoneyMakerBee constructor function
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function () {
	this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function () {
	this.honeyPot--;
};





