let osoba  = {
    imie: 'Jan',
    nazwisko: 'Kowalski',

    przedstawSie: function () {
      console.log('Nazywam się ' + this.imie + ' ' + this.nazwisko);
    },
    zmienImie: function (noweImie) {
        this.imie = noweImie;
    }
};

osoba.przedstawSie();

osoba.imie = 'Jacek';
osoba.przedstawSie();

osoba.zmienImie('Bolek');
osoba.przedstawSie();
