import { getPersonajes } from "./Peticiones/getPersonajes.js";

const enviarDatos = (comic) => {
    const rutaArchivoHTML = "../personaje.html";
    fetch(rutaArchivoHTML)
        .then(response => response.text())
        .then((html) => {

            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            const imagePage = doc.getElementById("imagePage");
            imagePage.src = comic.thumbnail.path + '.' + comic.thumbnail.extension;

            const namePage = doc.getElementById("namePage");
            namePage.textContent = `Título : ${comic.title}`;

            const descriptionPage = doc.getElementById("descriptionPage");
            descriptionPage.textContent = `Descripción : ${comic.description}`;

            const nuevoHtml = new XMLSerializer().serializeToString(doc);

            document.body.innerHTML = nuevoHtml;

        })
        .catch((error) => {
            console.log(`El error es: ${error}`);
        });
};

const crearCard = (comics = []) => {
    let comicsRow = document.getElementById("comicsRow");
    comics.forEach((comic) => {
        const divCol = document.createElement("div");
        divCol.classList.add("col-xl-3");
        divCol.classList.add("col-lg-3");
        divCol.classList.add("col-md-3");
        divCol.classList.add("col-sm-12");
        divCol.classList.add("col-xs-12");
        divCol.classList.add("mt-2");
        divCol.classList.add("mb-2");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = comic.thumbnail.path + '.' + comic.thumbnail.extension;
        img.alt = `Imagen de ${comic.title}`;
        img.classList.add("card-img-top");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = `Título :${comic.title}`;

        const btnVer = document.createElement("button");
        btnVer.classList.add("btn", "btn-success");
        btnVer.textContent = "Ver Detalles";
        btnVer.addEventListener("click", () => {
            enviarDatos(comic);
        });

        divBody.appendChild(title);
        divBody.appendChild(btnVer);

        card.appendChild(img);
        card.appendChild(divBody);

        divCol.appendChild(card);

        comicsRow.appendChild(divCol);
    });
};


getPersonajes()
    .then(data => {
        console.log(data);
        crearCard(data.results);
    })
    .catch(error => console.log(`El error es: ${error}`));
