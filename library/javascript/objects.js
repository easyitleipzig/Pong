//javascript
var Basis = Object.create(Object.prototype, {
                                        'Target': {
                                            value: document.getElementById('target'),
                                            writable: true
                                        },
                                        'El': {
                                            value: 'div',
                                            writable: true
                                        },
                                        'valTarget': {
                                            get: function() {
                                                return this.Target;
                                            },
                                            set: function(newTarget) {
                                                this.Target = newTarget;
                                            },
                                            enumerable: true
                                        },
                                        'valEl': {
                                            get: function() {
                                                return this.El;
                                            },
                                            set: function(newEl) {
                                                this.El = newEl;
                                            },
                                            enumerable: true
                                        },
                                        'metInit': {
                                            value: function(Ob, parameterObject) {
                                               for(prop in parameterObject) {
                                                    Ob[prop] = parameterObject[prop];
                                                }
                                                //console.log(this, this.Id, this.vslId);
                                                console.log(Ob, Ob.valHeight);
                                                var newElement = document.createElement(Ob.valEl);
                                                newElement.id = Ob.valId;
                                                newElement.style.left = Ob.valX + 'px';
                                                newElement.style.top = Ob.valY + 'px';
                                                newElement.style.width = Ob.valWidth + 'px';
                                                
                                                newElement.style.height = Ob.valHeigth + 'px';
                                                //console.log(this);
                                                Ob.valTarget.appendChild(newElement)
                                            },
                                            enumerable:true
                                        }
});
/*   mit null erzeugte Objecte haben keine __proto__ Eigenschaft; entspricht var Basis = {};
*    Basis.__proto__.init = function() {};  --> Fehler
*    mit Object.prototype erzeugte Objecte haben eine __proto__ Eigenschaft
*    Basis.__proto__.init = function() {};  --> funktioniert, die Eigenschaft/Methode __proto__
*    zeigt aber auf das allgemeine Object-Objekt --> anti-Pattern
*    soll von Basis vererbt werden, muss von Object.prototype erzeugt werden und Eigenschaften und Methoden hinzugefuegt
*    werden
*/
var Playground = Object.create(Basis, {
                                        'X' : {
                                            value: 50,
                                            writable: true,
                                            /*
                                             * kann entfallen, da automatisch false
                                             */
                                            enumerable: false,
                                            configurable: false
                                        },
                                        'Y': {
                                            value: 50,
                                            writable: true
                                        },
                                        'Id':  {
                                            value: '',                                             
                                            writable: true
                                        },
                                        'Width':{
                                            value: 400,
                                            writable: true
                                        },
                                        'Height': {
                                            value: 300,
                                            writable: true
                                        },
                                        'valX': {
                                            get: function() {
                                                    return this.X;
                                                    },
                                            set: function(newX) {
                                                    this.X = newX;
                                            },
                                            enumerable: true
                                        },
                                        'valY': {
                                            get: function() {
                                                return this.Y;
                                            },
                                            set: function(newY) {
                                                this.Y = newY;
                                            },
                                            enumerable: true
                                        },
                                        'valWidth': {
                                            get: function() {
                                                return this.Width;
                                            },
                                            set: function(newWidth) {
                                                this.Width = newWidth;
                                            },
                                            enumerable: true
                                        },
                                        'valHeigth': {
                                            get: function() {
                                                return this.Heigth;
                                            },
                                            set: function(newHeigth) {
                                                this.Heigth = newHeigth;
                                            },
                                            enumerable: true
                                        },
                                        'valId': {
                                            get: function() {
                                                return this.Id;
                                            },
                                            set: function(newId) {
                                                this.Id = newId;
                                            },
                                            enumerable: true
                                        }
});
/*
Playground.funcInit({
    valX: 50,
    valY: 50
});
*/
Basis.metInit(Playground, {valId: 'playground', 'X': 150, 'Y': 50, Height: 300});
//Basis.metInit();
var Racket = Object.create(Playground);
//ns.Pong.init(Ball, {Id: 'myBall', X: 100}, true);
//var Ball = Object.create(Playground);
//ns.Pong.init(Ball, {Id: 'myBall', X: 100}, true);
//ns.Pong.init(Ball, {valTarget: document.getElementById('playground')}, true);
//Ball.funcInit();