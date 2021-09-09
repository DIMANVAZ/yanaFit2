let gallery = document.getElementById("gallery")
//let cert1 = "<h1>ЗАГОЛОВОК</h1>" для примера, что работает
let amountOfCerts = 35;

let cert2 = "<img src=\"./media/certif/cert-1.png\" alt='certificate'/>, <img src=\"./media/certif/cert-2.png\" alt='certificate'/>"
let emptyCertsStructure = ``;

for (let i = 1; i <= amountOfCerts; i++) {
    emptyCertsStructure += `<img src="./media/certif/cert-${i}.png" alt='certificate'/> <hr>`
}

// gallery.innerHTML = cert2
gallery.innerHTML = emptyCertsStructure