/*
Author:Darius Miliauskas
CSS editor elements
Created: 2015 06 29 -2015 07 12
*/

//CREATING ELEMENTS
new DivElement("pos", "position", {select:true}, ["absolute", "relative", "fixed", "static"]);
new DivElement("dsp", "display", {select:true}, ["inline", "block", "inline-block", "none"]);
new DivElement("w", "width", {spinner:true});
new DivElement("bc", "background-color", {picker:true});
new DivElement("br", "border-radius", {spinner:true});
new DivElement("b", "border", {spinner:true, select:true, picker:true}, ["dashed", "dotted", "double", "solid", "groove", "ridge", "inset", "outset", "hidden", "none", "inherit"]);
new DivElement("ovf", "overflow", {select:true}, ["visible", "hidden", "auto", "scroll", "inherit"]);
new DivElement("bb", "border-bottom", {select:true}, ["solid","dashed", "dotted", "none"]);
