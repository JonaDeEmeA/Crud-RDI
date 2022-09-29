
function readFromLocalDB (key){
    return JSON.parse(window.localStorage.getItem(key)) || [];
}

function saveToLocalDB(key, data){

    window.localStorage.setItem(key, JSON.stringify(data));
}



//Metodo para devolver un arr
function retriveArrIds(collecion) {

    let arrIds0 = Array.from(collecion);
  
    let arrIds1 = arrIds0.map((e) => {
    return e.getAttribute("id");
      
    })
  
    return arrIds1;
  }

//Se obtiene un arr de los Ids de cada Input  
let contenedorAdd= document.querySelector("#contenedor-modal")  
let $lstInputAdd = contenedorAdd.querySelectorAll(".form-control");

let contenedorEdit= document.querySelector("#editar-modal")  
let $lstInputEdit = contenedorEdit.querySelectorAll(".form-control");

const formRdi = document.querySelector(".row");


let lstRdi = readFromLocalDB("ListaRdi")

let btnGuardar = document.querySelector("#btnAdd");
btnGuardar.addEventListener("click", addRDI);

function addRDI(){
    createData();
    readData(); 

}





//CREATE -------------------------------------------------------------------
function createData(){
    
    if ($lstInputAdd [0].value == 0 || $lstInputAdd [0].value == null) {
        const rdiObj = {
            nRdi    : (lstRdi.length + 1),
            nFicha  : $lstInputAdd [1].value,
            nomEsp  : $lstInputAdd [2].value,
            nomRes  : $lstInputAdd [3].value,
            statusRdi  : $lstInputAdd [4].value,
            obsRdi   : $lstInputAdd [5].value
        }
    
        lstRdi.push(rdiObj);

    }

    saveToLocalDB("ListaRdi", lstRdi);

};

//DELETE -------------------------------------------------------------------
function deleteData(btnEdit, nRdi){
      
    btnEdit.parentElement.parentElement.remove();
    lstRdi = lstRdi.filter((e)=>{
        return e.nRdi != nRdi;
    });

    saveToLocalDB("ListaRdi", lstRdi);
    console.log(lstRdi);

};


let $tBodyQ = document.querySelector("#tablaDatos");

//READ -------------------------------------------------------------------
function readData(){

    $tBodyQ.innerHTML="";
    lstRdi.forEach(e => { 
        $tBodyQ.innerHTML += `<tr>
    
        <td>${e.nRdi}</td>
        <td>${e.nFicha}</td>
        <td>${e.nomEsp}</td>
        <td>${e.obsRdi}</td>
        <td>${e.nomRes}</td>
        <td>${e.statusRdi}</td>
        <td>
            <button type="button" class="btn btn-info col-6" data-bs-toggle="modal" 
            data-bs-target="#editar-modal" id="btnEditar${e.nRdi}" onclick="editData(this, '${e.nRdi}')" >Editar </button>
            <button type="button" class="btn btn-warning col-6"  id="btnBorrar${e.nRdi}" onclick="deleteData(this, '${e.nRdi}')">Borrar</button>
        </td>


    </tr>`
        
    });

    formRdi.reset();

};

readData();

function editData(btnDel, nRdi){
    
    const rdiEdited = lstRdi.find((e)=>{
        return e.nRdi == nRdi;
    })
    console.log(rdiEdited);

    let arrRdiEdited = Object.values(rdiEdited);


    for (let i = 0; i < $lstInputEdit.length; i++) {
        
        $lstInputEdit[i].value = arrRdiEdited[i];
    }
   


};
























/*let btnEdit = document.querySelectorAll(".btn-info");
btnEdit.forEach((e)=>{
    e.addEventListener("click", (e)=>{
        editData(e.nRdi.match(/(\d+)/)[0]);
    });
})*/
  


    


