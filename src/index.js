"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
let adat = new main_1.Book;
let lista = new Array();
/*let max : number = 0;
function bestof(list = new Array<string>) {
    for (let k = 0; k < list.length; k++) {
        if (list[k]) {
        }
    }
}*/
for (let k = 0; k < 31; k++) {
    adat.name = "book #" + k;
    adat.rating = Math.random() * 10;
    lista.push(adat.name, adat.rating.toString());
    console.log(adat.name + " értékelés: " + adat.rating);
    if (adat.rating == 7) {
        console.log("Ennek a könyvnek az értékelése 7 volt.");
    }
}
