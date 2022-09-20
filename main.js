
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
  //let arrInputIds = retriveArrIds($lstInputAdd);


function addRDI(){
    createData();
    readData(); 

}




function createData(){
    let lstRdi = readFromLocalDB("ListaRdi")
    
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
    
    //readData();
};



function deleteData(btnEdit, nRdi){
    let n=0;
    let lstRdi = readFromLocalDB("ListaRdi");
    btnEdit.parentElement.parentElement.remove();
    /*lstRdi = lstRdi.filter((e)=>{
        e.nRdi == nRdi;
        console.log(`${e.nRdi} ${nRdi}  ${n++}`);
    })*/

    lstRdi2 = lstRdi.filter((e)=> e.nRdi !== nRdi);
        
        
    

 
    console.log(lstRdi2);
}




//READ -------------------------------------------------------------------
function readData(){

    let $tBodyQ = document.querySelector("#tablaDatos");
    //let $lstInput = document.querySelectorAll("tbody > tr");
  
    let lstRdi = readFromLocalDB("ListaRdi");
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
            <button type="button" class="btn btn-info col-6" data-bs-toggle="modal" data-bs-target="#editar-modal" id="btnEditar${e.nRdi}">Editar </button>
            <button type="button" class="btn btn-warning col-6"  id="btnBorrar${e.nRdi}" onclick="deleteData(this, '${e.nRdi}')">Borrar</button>
        </td>


    </tr>`
        
    });

};


function editData(id){
    let lstRdi = readFromLocalDB("ListaRdi");
    let entrada = lstRdi[id -1];

    $lstInputEdit [0] = entrada.nRdi;
    $lstInputEdit [1].innerHTML = "entrada.nFicha";
    $lstInputEdit [2] = entrada.nomEsp;
    $lstInputEdit [3] = entrada.obsRdi;
    $lstInputEdit [4] = entrada.nomRes;
    $lstInputEdit [5] = entrada.statusRdi;


}






let btnGuardar = document.querySelector("#btnAdd");
btnGuardar.addEventListener("click", addRDI)

let btnEdit = document.querySelectorAll(".btn-info");
btnEdit.forEach((e)=>{
    e.addEventListener("click", (e)=>{
        editData(e.nRdi.match(/(\d+)/)[0]);
    });
})
  


    


