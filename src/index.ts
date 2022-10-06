import { Book } from "./main";


let adat : Book = new Book;
let lista : Array<string> = new Array<string>();
/*let max : number = 0;
function bestof(list = new Array<string>) {
    for (let k = 0; k < list.length; k++) {
        if (list[k]) {
        }
    }
}*/

for (let k = 0; k < 31; k++) {
    adat.name = "book #" + k;
    adat.rating = Math.random()*10;
    lista.push(adat.name, adat.rating.toString());
    console.log(adat.name + " értékelés: " + adat.rating);
        if (adat.rating == 7) {
            console.log("Ennek a könyvnek az értékelése 7 volt.")
        }
    }