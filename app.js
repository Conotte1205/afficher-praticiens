
// Afficher dans la console tous les praticiens de Marseille
// Afficher dans la console tous les dentistes de Paris
// Afficher dans la console tous les praticiens qui ont été visité
// Afficher dans la console tous les dentistes de Marseille qui ont été visité


// let url = 'http://localhost:90/gsb/praticien';
// fetch(url)
// .then(Response=>Response.json())
// .then((data)=>{praticien.forEach(praticien => {console.log(praticien)

// });

// Afficher dans la console tous les praticiens de Marseille
let url = console.log('http://localhost:90/gsb/praticien?ville=Marseille');
fetch(url)
.then(Response=>Response.json())
.then((data)=>{praticien.forEach(praticien => {console.log(praticien)
});

// Afficher dans la console tous les dentistes de Paris
let url = console.log('http://localhost:90/gsb/praticien?ville=Marseille&specialite=Dentiste');
fetch(url)
.then(Response=>Response.json())
.then((data)=>{praticien.forEach(praticien => {console.log(praticien)
});

// Afficher dans la console tous les praticiens qui ont été visité
let url  = console.log('http://localhost:90/gsb/praticien?visite=true');
fetch(url)
.then(Response=>Response.json())
.then((data)=>{praticien.forEach(praticien => {console.log(praticien)
});

// Afficher dans la console tous les dentistes de Marseille qui ont été visité
let url = console.log('http://localhost:90/gsb/praticien?ville=Marseille&specialite=Dentiste&visite=true');
fetch(url)
.then(Response=>Response.json())
.then((data)=>{praticien.forEach(praticien => {console.log(praticien)
});