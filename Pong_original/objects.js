var playground = {
	sizeX: 800,
	sizeY: 400,
	margin: 10,
	id: 'playground',
	init: function(x, y, margin){
		if(x !== undefined) {this.sizeX = x};
		if(y !== undefined) {this.sizeY = y};
		if(margin !== undefined) {this.margin = margin};
		var myPlaygroundDiv = document.createElement('div');
			myPlaygroundDiv.id = this.id;
		document.getElementsByTagName('body')[0].appendChild(myPlaygroundDiv);
		helper.$(this.id).style.width = this.sizeX + 'pt';
		helper.$(this.id).style.height = this.sizeY + 'pt';
		helper.$(this.id).style.top = this.margin + 'pt';
		helper.$(this.id).style.left = this.margin + 'pt';
	}
}

var display = {
	playground: null,
	id: null,
	content: '',
	number: 0,
	order: 0,
	init: function(playground, id, content, number, order) {
		this.playground = playground;
		this.id = id;
		this.content = content;
		this.number = number;
		this.order = order;
		var myDisplayLabel = document.createElement('label');
			myDisplayLabel.id = this.id;
			myDisplayLabel.innerHTML = this.content + ' ' + this.number;
		document.getElementsByTagName('body')[0].appendChild(myDisplayLabel);
		helper.$(this.id).style.position = 'absolute';
		helper.$(this.id).style.width = '150pt';
		helper.$(this.id).style.height = '25pt';
		helper.$(this.id).style.top = this.playground.margin + this.order * 25 + 'pt';
		helper.$(this.id).style.left = this.playground.sizeX + 2 * this.playground.margin + 'pt';
	},
	increaseLevel: function() {
			helper.$(this.id).innerHTML = this.content + ' ' + (++this.number);
	}
}
var racket = {
	id: 'myRacketDiv',
	width: 15,
	size: 100,
	increment: 5,
	playground: null,
	init: function(Playground, size) {
		this.size = size;
		this.playground = Playground;
		if(this.playground.sizeY < this.size) this.size = this.playground.sizeY - 30;
		var myRacketDiv = document.createElement('div');
		myRacketDiv.id = this.id;
		document.getElementById(this.playground.id).appendChild(myRacketDiv);
		helper.$(this.id).style.width = this.width + 'pt';
		helper.$(this.id).style.height = this.size + 'pt';
		helper.$(this.id).style.top = this.playground.sizeY/2 - this.size/2 + 'pt';
		helper.$(this.id).style.left = this.playground.sizeX + 'pt';
	},
	move: function(direction) {
			if(direction) {
				if( parseInt(helper.$(this.id).style.top) + this.increment + this.size < this.playground.sizeY) {
					helper.$(this.id).style.top = parseInt(helper.$(this.id).style.top) + this.increment + 'pt';
				}
			} else {
				if( parseInt(helper.$(this.id).style.top) - this.increment > 0) {
				helper.$(this.id).style.top = parseInt(helper.$(this.id).style.top) - this.increment + 'pt';
				}
			}
		},
	increaseSize: function(deltaY) {
			this.size -= deltaY;
			this.size = (this.size < 40) ? 40 : this.size;
			helper.$(this.id).style.height = this.size + 'pt';
		}
}
var ball = {
	id: '',
	x: 0,
	y: 0,
	increment: 30,
	deltaX: 0,
	deltaY: 0,
	BallSize: 50,
	playground: null,
	racket: null,
	displayhits: null,
	/**
	  * @function init
	  * 
	  * @param deltaX
	  */
	init: function(Playground, Racket, DeltaX, displayhits) {
		this.playground = Playground;
		this.racket = Racket;
		this.displayhits = displayhits;
		this.deltaX = DeltaX;
		this.deltaY = parseInt( Math.sqrt( 100*100 + this.deltaX * this.deltaX ) );
		this.deltaX /= this.increment;
		this.deltaX = parseInt( this.deltaX );
		this.deltaY /= this.increment * 1.5;
		this.deltaY = parseInt( this.deltaY );
	},
	createBall: function(id) {
		this.id = id;
		var myBallDiv = document.createElement('div');
			myBallDiv.id = id;
		var myBallImg = document.createElement('img');
			myBallImg.src = 'ball.png';
			myBallImg.height = this.BallSize;
			myBallImg.width = this.BallSize;
		myBallDiv.appendChild(myBallImg);
		document.getElementById(this.playground.id).appendChild(myBallDiv);
		this.x = this.playground.sizeX - this.BallSize;
		this.y = this.playground.sizeY / 2;
		helper.$(this.id).style.position = 'absolute';
		helper.$(this.id).style.left = this.x + 'pt';
		helper.$(this.id).style.top = this.y + 'pt';
	},
	checkForHit: function() {
		var hitPoint = this.y + this.BallSize/2; 
		var checkTop = parseInt(helper.$(this.racket.id).style.top);
		var checkBottom = parseInt(helper.$(this.racket.id).style.top)  + myRacket.size;
		if( hitPoint > checkTop && hitPoint < checkBottom) {
			return true;
		} else {
			return false;
		};
	},
	moveToNewPosition: function() {
		this.x -= this.deltaX;
		this.y += this.deltaY;
		helper.$(this.id).style.top = this.y + 'pt';
		if( this.y > myPlayground.sizeY - this.BallSize || this.y < 10) {
			this.deltaY *= - 1;
		};
		if( this.x > myPlayground.sizeX + myPlayground.margin - this.BallSize || this.x < 10) {
			if(this.x > myPlayground.sizeX + myPlayground.margin - this.BallSize) {
				if( !this.checkForHit() ) { 
					window.clearInterval(aktiv);
					alert('Daneben!');
				} else {
					this.displayhits.increaseLevel();
				}
			}
			this.deltaX *= - 1;
		};
		helper.$(this.id).style.left = this.x + 'pt';
	}	
};
