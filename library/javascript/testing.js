var Basis = Object.create(Object.prototype, {
    'X': {
        value: 10,
        enumerable: true,
        configurable: false,
        writable: true
    }
});
var Playground = Object.create(Basis, {
    'valX': {
        get: function() {return this.X},
        set: function(newX) {this.X = newX}
    }
});
var Ball = Object.create(Playground, {
    'valLeft': {
        get: function() {return this.Left},
        set: function(newLeft) {this.Left = newLeft}
    }
});
var i;
function lookForExistingPDM(O, Prop) {
    //console.log(O);
    if(O=== null) {return false}
    if(Object.hasOwnProperty(O, Prop) !== false) {
           console.log(O); 
    }
    // = Object.getOwnPropertyDescriptor(O, Prop);
    if(O !== null && Object.getOwnPropertyDescriptor(O, Prop) === undefined) {
        lookForExistingPDM(O.__proto__, Prop);    
    } else {
            //console.log(O, Object.getOwnPropertyDescriptor(O, Prop));
            if(O === null) {
                return false;
            }
            i = Object.getOwnPropertyDescriptor(O, Prop);
            return;// Object.getOwnPropertyDescriptor(O, Prop);
    }
    //return;  
}; 
window.document.body.style.backgroundImage = '';
lookForExistingPDM(Ball, 'X');
console.log(i);