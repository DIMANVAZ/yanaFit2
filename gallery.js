let gallery = document.getElementById("gallery")
//let cert1 = "<h1>ЗАГОЛОВОК</h1>" для примера, что работает
let amountOfCerts = 35;

let emptyCertsStructure = ``;

for (let i = 1; i <= amountOfCerts; i++) {
    emptyCertsStructure += `<img class="small-image" src="./media/certif/cert-${i}.png" alt='certificate'/> <hr>`
}

// gallery.innerHTML = cert2
gallery.innerHTML = emptyCertsStructure