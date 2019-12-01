function Osoba(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;

    this.przedstawSie = function () {
        console.log('Nazywam się ' + this.imie + ' '+ this.nazwisko);
    }

}

let osoba = new Osoba('Jan', 'Kowalski');
let osoba2 = osoba;

osoba2.przedstawSie();

let osoba3 = new Osoba('Zdzisek','Bąk');
osoba3.przedstawSie();