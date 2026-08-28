/* Beispiel-/Referenzdaten für den Ballistik-Rechner */

const BULLET_PRESETS = [
    { value: 'vacuum', mass: 0.535, diam: 4.5,  v0: 175, i: 999,    label: 'Vakuum (kein Luftwiderstand)' },
    { value: 'preset', mass: 0.535, diam: 4.5,  v0: 175, i: 0.2505, label: 'Rundkugel 4,5 mm' },
    { value: 'preset', mass: 0.535, diam: 4.5,  v0: 175, i: 0.4697, label: 'Diabolo 4,5 mm', selected: true },
    { value: 'preset', mass: 0.90,  diam: 5.5,  v0: 130, i: 0.4697, label: 'Diabolo 5,5 mm' },
    { value: 'preset', mass: 2.59,  diam: 5.6,  v0: 330, i: 0.9789, label: '.22 lfB – Bleirundkopf' },
    { value: 'preset', mass: 8.04,  diam: 9.0,  v0: 370, i: 0.7059, label: '9 mm Para – Stumpfheck' },
    { value: 'preset', mass: 4.0,   diam: 5.7,  v0: 940, i: 1.0301, label: '.223 Rem – FMJ' },
    { value: 'preset', mass: 9.46,  diam: 7.82, v0: 830, i: 0.4890, label: '.308 Win – Boattail' },
    { value: 'preset', mass: 0.13,  diam: 2.79, v0: 400, i: 0.2505, label: '12/76 Schrot (Nr. 6)' },
    { value: 'preset', mass: 28.0,  diam: 18.5, v0: 430, i: 1.20,   label: '12/76 Flintenlaufgeschoss' },
    { value: 'preset', mass: 26.0,  diam: 8.0,  v0: 105, i: 2.80,   label: 'Armbrust-Bolzen' },
    { value: 'preset', mass: 26.0,  diam: 6.0,  v0: 88,  i: 2.20,   label: 'Pfeil, Compoundbogen 60 lbs' },
    { value: 'preset', mass: 22.0,  diam: 8.0,  v0: 45,  i: 3.20,   label: 'Pfeil, Recurvebogen 25 lbs' },
    { value: 'manual', mass: '',    diam: '',   v0: '',  i: '',     label: 'Manuell eingeben' }
];

const FORM_FACTOR_PRESETS = [
    { value: '0.25', label: 'Rundkugel Blei, Luftgewehr (i ≈ 0.25)' },
    { value: '0.47', label: 'Diabolo, Luftgewehr (i ≈ 0.47)', selected: true },
    { value: '0.49', label: 'Boattail .308 (i ≈ 0.49)' },
    { value: '0.71', label: 'Stumpfheck 9 mm (i ≈ 0.71)' },
    { value: '0.98', label: '.22 lfB Bleirundkopf (i ≈ 0.98)' },
    { value: '1.00', label: 'Spitzer Vollmantel / FMJ (i = 1.00)' },
    { value: '1.20', label: 'Flintenlaufgeschoss / Slug (i ≈ 1.20)' },
    { value: '2.20', label: 'Pfeil, Compoundbogen (i ≈ 2.20)' },
    { value: '2.80', label: 'Armbrust-Bolzen (i ≈ 2.80)' },
    { value: '3.20', label: 'Pfeil, Recurve/Langbogen (i ≈ 3.20)' },
    { value: 'custom', label: 'Manuell eingeben' }
];
