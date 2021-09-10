let gallery = document.getElementById("gallery")
//let cert1 = "<h1>ЗАГОЛОВОК</h1>" для примера, что работает
let amountOfCerts = 35;

let folder=["compressedCertif","WebP_encoded"]
let extension=['png','webp']

let emptyCertsStructure = ``;

for (let i = 1; i <= amountOfCerts; i++) {
    emptyCertsStructure += `<img src="./media/${folder[1]}/cert-${i}.${extension[1]}" class="small-image" alt='certificate'/> <hr>`
}

// gallery.innerHTML = cert2
gallery.innerHTML = emptyCertsStructure