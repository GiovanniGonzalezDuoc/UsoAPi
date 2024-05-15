export const crearCard = (results = []) =>{
    let personajesRow = document.getElementById("personajesRow");
    results.map((result)=>{
        const {id ,name , image , species , status , location} = result;
        const {name : nameLocation} = location;
        
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
        img.src = image;
        img.alt = `Imagen de ${name}`;
        img.classList.add("card-img-top");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = `Nombre :${name}`;

        const subTitle = document.createElement("p");
        subTitle.classList.add("card-text");
        subTitle.textContent = `Especie: ${species}`;

        const subTitle2 = document.createElement("p");
        subTitle2.classList.add("card-text");
        subTitle2.textContent = `Especie: ${status}`;

        const btnVer = document.createElement("button");
        btnVer.classList.add("btn","btn-success");
        btnVer.textContent = "Ver Detalles";
        btnVer.addEventListener("click", ()=>
            enviarDatos);

        divBody.appendChild(title);
        divBody.appendChild(subTitle);
        divBody.appendChild(subTitle2);
        divBody.appendChild(btnVer);

        card.appendChild(img);
        card.appendChild(divBody);

        divCol.appendChild(card);

        personajesRow.appendChild(divCol);
    });
}