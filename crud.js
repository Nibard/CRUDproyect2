document.getElementById("formulario").addEventListener("submit", crear);
//funcion crear

function crear(e){
    titulo=document.getElementById("titulo").value
    descripcion=document.getElementById("descripcion").value
    

    let libro ={
        titulo,
        descripcion
        
    }

    if(localStorage.getItem("libros") === null){
        let libros =[]
        libros.push(libro)
        localStorage.setItem("libros", JSON.stringify(libros))
    } else{
        let libros=JSON.parse(localStorage.getItem("libros"))
        libros.push(libro)
        localStorage.setItem("libros", JSON.stringify(libros))
    }

    leer();
    document.getElementById("formulario").reset();
    console.log("Libro guardado correctamente")
    e.preventDefault()

    
}

//funcion "leer"
function leer(){
    let libros =JSON.parse(localStorage.getItem("libros"));
    document.getElementById("tbody").innerHTML = ""
    for(let i=0; i < libros.length; i ++){
        let titulo= libros[i].titulo
        let descripcion=libros[i].descripcion
        

        document.getElementById("tbody").innerHTML +=
        `<tr>
            <td>${titulo}</td>
            <td>${descripcion}</td>
            
            <td><button onclick="eliminar('${titulo}')" class="btn btn-danger">Eliminar</button></td> 
            <td><button onclick="editar('${titulo}')" class="btn btn-success">Editar</button></td> 
        </tr>
        `
    }
}



leer();