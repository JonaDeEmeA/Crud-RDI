
function agregarRDI(){

    // accedo al <tbody>
    const dataRdi = document.getElementById("dataRdi");

    // accedo a todos los <label> del formulario
    const lstLabel = document.getElementsByTagName("label");
    
    // accedo a la etiqueta "textarea" del apartado "Descripcion"
    //----const txtObs = document.getElementById("txt-obs");
   
   
    // especifico la creacion de etiqueta "tr" y la almaceno en una constante
    const etiquetaTableRow = document.createElement("tr")

    const ids = ["txt-rdi","txt-ficha","txt-esp","txt-obs","txt-responsable","txt-estado"];

    ids.forEach(id => {

        const txtInput = document.getElementById(id);
        const etiquetaData = document.createElement("td");
        etiquetaData.innerText=txtInput.value;
        etiquetaTableRow.appendChild(etiquetaData);

    })
    
    /*for (let i = 1; i <= lstLabel.length; i++) {
        const etiquetaData = document.createElement("td");
        etiquetaData.innerText=txtObs.value;
        etiquetaTableRow.appendChild(etiquetaData);
        console.log("test");
    }*/

    //agrego una etiqueta "tr" dentro de la etiqueta "tbody"
    dataRdi.appendChild(etiquetaTableRow);

    //
    
    
}



    


