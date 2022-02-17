// JS Vertiefung Übung lev1_2: Objects

let person = {
    name: 'Markus',
    alter: 29,
    sagNameAlter(){
        let name = 'Markus'
        let alter = 29
        alert(name + alter)  
        console.log(name + alter);
    }
}

// person.sagNameAlter()

// richtig so?

// lev1_4: Objects Accessing


let unsereHaustiere = [
    {
    tiertyp: "Katze",

    names: [
        "Gipsy",
        "Nala",
        "Dinky"
    ]
    },
    {
    tiertyp: "Hunde",
    names: [
        "Knöpfchen",
        "Pinselchen",
        "Droopy",
    ]
    }
];

console.log(unsereHaustiere[0].names[1]);
// console.log(unsereHaustiere);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names);
// console.log(unsereHaustiere[1].names.pop());
// console.log(unsereHaustiere[1].names.pop());
// console.log(unsereHaustiere[1].names.pop());
// console.log(unsereHaustiere[1].names.pop());
// console.log(unsereHaustiere[1].names.pop());
// console.log(unsereHaustiere[1].names.push('Balu', 'Snoopy'));
// console.log(unsereHaustiere[1].names);
// unsereHaustiere[1].names.splice(0, 1, 'Balu');
unsereHaustiere[1].names.splice(0, 3, 'Balu', 'Snoopy');
// unsereHaustiere[1].names.pop();


console.log(unsereHaustiere[1].names);

// console.log(unsereHaustiere[1].names.join(" "));


//JS Vertiefung lev1_5: Objects Accessing

let unserLager = {
    schreibtisch: {
    schublade: "Hefter"
    },
    schrank: {
    "Obere Schublade": {
        Ordner1: "Dokumente",
        Ordner2: "Geheimnisse"
    },
    "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

// lev1_6: Objects Arrays Accessing

let myMusic = [
    {
        artist: "Gorillaz",
        title: "Demon Days",
        release_year: 2000,
        medium: ["CD", "Download"],
        platinum: true
    },
    {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true
    },
    {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true
    },
    {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true
    },
    {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true
    }
];


console.log(myMusic[1].artist);
console.log(myMusic[2].medium[3]);
console.log(myMusic[2].gold);
console.log(myMusic[3].release_year + " und " + myMusic[4].release_year);
console.log(myMusic[4].medium[2]);

console.log(myMusic[4].title.split(" ")[4]);
console.log(myMusic[3].title.split(" ")[2]);
console.log(myMusic[2].artist.split(" ")[1]);

// lev1_7: Objects Arrays Loop Accessing

let allArtist = ""

for (let i = 0; i < 5; i++) {
    allArtist = myMusic[i].artist

    console.log(allArtist);
    // const element = array[i];
}

for (let i = 0; i < 5; i++) {
    allArtist = myMusic[i].title

    console.log(allArtist);
    // const element = array[i];
}

for (let i = 0; i < 5; i++) {
    allArtist = myMusic[i].medium

    console.log(allArtist);
    // const element = array[i];
}

// lev1_8: Objects Arrays Loop Accessing

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
        street: "Don Valley Business Park",
        city: "Toronto",
        postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
        street: "34 Lawrence Ave",
        city: "Toronto",
        postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

studentData.forEach(element => {
    console.log(element.name);
});


for (const i in studentData) {
    console.log(studentData[i].name);
}

for (const i in studentData) {
    console.log(studentData[i].coop);
}

for (const i in studentData) {
    console.log(studentData[i].address.city);
}

for (const i in studentData) {
    console.log(studentData[i].emails);
}


// wie geht es in forEach()?

// studentDataArray = studentData.toString().split("");
// console.log(studentDataArray);

// let array = []

// array.forEach(element => {
//     console.log(studentData[0].name);
// });

// console.log(studentData[0].name);

// lev2_2: Array Object sort() singers


let singers = [
	{ name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
	{ name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
	{ name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B"},
	{ name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock"},
	{ name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica"},
	{ name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock"},
	{ name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop"},
	{ name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock"},
];


// let keyArr = Object.keys(singers)
// console.log(keyArr);
// let valueArr = Object.values(singers)
// console.log(valueArr);

// for (let i = 0; i < valueArr.length; i++) {
//     console.log(valueArr);
// }
// for (const i in singers) {
//     console.log(singers[i].name.splice()
//     );
// }



singers.sort(function compareFn(a, b) { 
    if ( a.name < b.name) {
        
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
      // a must be equal to b
    return 0;
})

console.log(singers.sort());
