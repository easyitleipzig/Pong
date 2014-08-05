//javascript
var ns = ns || {};
Object.defineProperties(ns, {
                                'Pong': {
                                    value: {},
                                    enumerable: true,
                                    writable: true
                                }
});
Object.defineProperties(ns.Pong, {
                                'Desrciption': {
                                    value:'Basisobjekt', 
                                    enumerable: true
                                },
                                '$' : {
                                    value: function(el) {
                                        return document.getElementById(el);
                                    },
                                    enumerable: true
                                },
                                'deltaX' : {
                                    value:  0,
                                    writable: true
                                },
                                'deltaY' : {
                                    value: 0,
                                    writable: true
                                },
                                'lookForPDM' : {
                                    value: false,
                                    writable: true,
                                    enumerable: true
                                },
                                /* rekursive Methode zum Durchlaufen der PDMs der Elternelemente
                                 * param: Objekt, Property
                                 * result: wird in ns.Pong.lookForPDM abgelegt
                                 * wird Property gefunden, steht in lookForPDM die PDM der Property
                                 * ansonsten steht dort false
                                 * */
                                'lookForExistingPDM' : { 
                                    value: function(O, Prop) {
                                                if(O !== null && Object.getOwnPropertyDescriptor(O, Prop) === undefined) {
                                                    ns.Pong.lookForPDM = false;
                                                    ns.Pong.lookForExistingPDM(O.__proto__, Prop);    
                                                } else {
                                                    if(O === null) {
                                                        return false;
                                                    };
                                                    ns.Pong.lookForPDM = Object.getOwnPropertyDescriptor(O, Prop);
                                                    return true;
                                                };  
                                            },
                                    enumerable: true
                                    },
                                'init' : {
                                    value: function(targetObject, parameterObject, copyPDM) {
                                        var PDM;
                                        for(prop in parameterObject) {
                                           //console.log(prop, Object.keys(targetObject));
                                            if(copyPDM) {
                                                PDM = ns.Pong.lookForExistingPDM(targetObject, prop);
                                                //console.log(PDM);    
                                                if(PDM !== false && ns.Pong.lookForPDM !== false && PDM !== undefined) {
                                                    /*
                                                    ns.Pong.lookForPDM.value = parameterObject[prop];
                                                    */
                                                    //console.log(copyPDM, targetObject, ns.Pong.lookForPDM);
                                                    Object.defineProperty(targetObject, prop, ns.Pong.lookForPDM);
                                                } else {
                                                    console.log(prop);
                                                    targetObject[prop] = parameterObject[prop];    
                                                }
                                            } else {
                                                targetObject[prop] = parameterObject[prop];    
                                            };
                                        };    
                                    }
                                },
                                'getRandomNumber' : {
                                    value: function(from, to) {
                                        return from + Math.round( Math.random() * (to-from) );
                                    },
                                    enumerable: true
                                }
});
/*
ns.Pong.deltaX = parseInt(ns.Pong.getRandomNumber(3, 6), 10);
ns.Pong.deltaY = parseInt(ns.Pong.getRandomNumber(3, 6), 10);
*/

//var Pong = Object.create(ns);
/*

*/
/*
var Pong = Object.create(ns);
Object.defineProperties(Pong, {
                                Name: {
                                    value:'name', enumerable: true
                                },
                                valX:  {get: function() {
                                                     console.log('Get valX');
                                                     return this.X;
                                                },
                                        set: function(x) {
                                                     console.log('Set valX');
                                                     this.X = x;
                                                     return this.X;
                                                }            
                                },
                                valY: {get: function() {
                                                     console.log('Get valY');
                                                     return this.Y;
                                                },
                                        set: function(x) {
                                                     console.log('Set valY');
                                                     this.Y = x;
                                                     return this.Y;
                                                } 
                                      }
});
*/
/*
Oject.definePoperties(ns, {
    'init': {
        value: function(Parameterobject){},
        },
    'X': {value: 25, writable: true}});
Object.defineProperty(Pong, 'X', {writable: true});
Object.defineProperty(Pong, 'valX', {set: function(anewX) {
                                                     this.X = anewX;
                                                     console.log('Set valX');
                                                },
                                      get: function() {
                                                     console.log('Get valX');
                                                     return this.X;
                                                }          
});
Object.defineProperty(Pong, 'Y', {writable: true});
Object.defineProperty(Pong, 'valY', {set: function(anewY) {
                                                     this.X = anewY;
                                                     console.log('Set valY');
                                                },
                                      get: function() {
                                                     console.log('Get valY');
                                                     return this.Y;
                                                }         
});
Object.defineProperties(Pong, {name: {value:'name', enumerable: true}});
*/