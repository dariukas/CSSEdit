/*
Author:Darius Miliauskas
CSS editor elements
Created: 2015 06 29 -2015 07 12
*/

codebox();

//CODE BOX
function codebox(){
$("#codebox").resizable({handles: 's, w, sw'});
$(document).ready(function() {
    $("#codebox").delay(2000).fadeIn(1000);
});
}

//CREATE BUTTON
function createButton(context, func, text){
    var button = document.createElement('input');
    button.type = "button";
    button.value = text;
    button.onclick = func;
    context.appendChild(button);
}

//not neccesary JSON
var parameters = {spinner:false, select:false, picker:false, checkboard:true};
//var new = new DivElement("id", "name", {select:true}, null);

//DIV ELEMENT OBJECT
function DivElement(identity, feature, parameters, options){
var divElement = document.createElement('div');
addLabel(divElement, identity, feature+": ");
document.getElementById("editbox").appendChild(divElement);
this.divElement=divElement;
this.parameters=parameters;
if(parameters.spinner==true){console.log("added spinner!"); addSpinner(this.divElement, identity);};
if(parameters.select==true){addSelect(this.divElement, identity, options);};
if(parameters.picker==true){addPicker(this.divElement, identity);};
if(parameters.checkboard!=false){addCheckboard(this.divElement, identity);};//this trick makes checkboard by default
}

//ADDING PROPERTIES TO THE OBJECT
DivElement.prototype.addLabel=function(identity, feature) {addLabel(this.divElement, identity, feature);};
DivElement.prototype.addCheckboard=function(identity) {addCheckboard(this.divElement, identity); parameters.checkboard=true;};
DivElement.prototype.addSpinner=function(identity) {addSpinner(this.divElement, identity); parameters.spinner=true;};
DivElement.prototype.addSelect=function(identity, options) {addSelect(this.divElement, identity, options); parameters.select=true;};
DivElement.prototype.addPicker=function(identity) {addPicker(this.divElement, identity); parameters.picker=true;};
//console.log(Object.getOwnPropertyNames(newDiv));

//CREATING PARTS OF ELEMENTS
//these parts would be added to "divElement"
//every of them have unique "identity"

function addLabel(divElement, identity, feature){
var labelElement = document.createElement('label');
labelElement.innerHTML=feature;
labelElement.setAttribute("for", identity);
divElement.appendChild(labelElement);
}

function addCheckboard(divElement, identity){
var cbElement = document.createElement('input');
cbElement.id=identity+"checkbox";
cbElement.type="checkbox";
divElement.appendChild(cbElement);
}

/*<fieldset></fieldset>*/
function addSelect(divElement, identity, options){
var selectElement = document.createElement('select');
var menuID = identity+"menu";
selectElement.id = menuID;
selectElement.name= menuID;

//Create for default option
var optionElement = document.createElement('option');
optionElement.value="default";
optionElement.setAttribute('selected', true);
selectElement.appendChild(optionElement);
//Create other elements
for (var i in options){
optionElement = document.createElement('option');
optionElement.value=options[i];
optionElement.innerHTML=options[i];
selectElement.appendChild(optionElement);
}
divElement.appendChild(selectElement);
//jQuery UI
$("#"+menuID).selectmenu();
}

function addSpinner(divElement, identity){
var spinnerID = identity+"spinner";
var inputElement = document.createElement('input');
inputElement.id=spinnerID;
inputElement.name="value";
divElement.appendChild(inputElement);
var buttonElement = document.createElement('button');
buttonElement.id=identity+"toggle";
buttonElement.innerHTML="\u23F9";
divElement.appendChild(buttonElement);
//jQuery UI
    var spinner = $("#"+spinnerID).spinner();
    $( "#"+buttonElement.id ).click(function() {
      if ( spinner.spinner( "option", "disabled" ) ) {
        spinner.spinner( "enable" );
      } else {
        spinner.spinner( "disable" );
      }
    });
    $("#"+buttonElement.id).button();
}

function addPicker(divElement, identity){
var pickerID = identity+"picker";
var inputElement = document.createElement('input');
inputElement.id=pickerID;
inputElement.type="text";
divElement.appendChild(inputElement);
//jQuery UI
$("#"+pickerID).spectrum({
    showInput: true, 
    showInitial: true,
    preferredFormat: "hex",
    showPalette: true,
    showSelectionPalette: true,
    palette: [ ],
    //localStorageKey: "spectrum.homepage", // Any Spectrum with the same string will share selection
    showButtons: false
});
}
