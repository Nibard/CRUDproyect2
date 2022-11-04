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


leer();