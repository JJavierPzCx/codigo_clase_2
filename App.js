// Eventos DOM (Document Object Model)
document 
.getElementById("formulario-producto") 
.addEventListener("submit", function (evento){
//evaluar el comportamiento del formulario


evento.preventDefalut(); //Prevent Default para guardar sin refrescar en la pagina.

//Obtener los valores del formulario

const nombre = document.getElementById("nombre").value,
    precio = document.getElementById("precio").value,
    año = document.getElementById("año").value;

//Crear un nuevo objeto "Producto"

const product = new Product (nombre, precio, año);

//Crear un nuevo usuario de interfaz 
 const ui = new UI();

 //Input de validación de usuario
 if (nombre === "" || precio === "" || año ===""){
    ui.showMessage("Por Favor Insertar Datos");
 }

 //Guardar Producto 
 ui.addProducto(producto);
 ui.showMessage("Producto Agregado");
 ui.resetForm(); 
});

document.getElementById("producto-lista").addEventListener("click", (e) =>  {
    const ui = new UI();
    ui.deleteProducto(e.target);
    e.preventDefault();
});

//Clase producto 

class producto
{
 constructor(nombre, precio, año){
    this.nombre = nombre;
    this.precio = precio;
    this.año = año;
 }


}

// Clase Usuario interfaz 

class UI{
    addProducto(producto){
        const productoLista = document.getElementById("producto-lista");
        const elemento = document.createElement("div");
        elemento.innerHTML = ` 
    <div class="tarjeta texto margen4">
        <div class="tarjeta-body">
            <strong> Producto </strong> : ${producto.nombre} -
            <strong> Precio </strong> : ${producto.precio} -
            <strong> Año </strong> : ${producto.año} -
            <a href="#" class="btn btn-danger" name= "eliminar"> Eliminar </a>
        </div>
    </div> 
    
    `;
    
    productoLista.appendChild(element); //appendChild = Objeto Hijo
    }
    //Resetear Valores del Formulario

        resetForm(){
            document.getElementById("formulario-producto").reset();
        }
        
        deleteProducto(elemento){
            if(elemento.nombre === "eliminar"){
                element.parentElement.parentElement.remove();
                this.showMessage("El Producto Se Ha Eliminado")
            }
        }
    
        showMessage(mensaje, cssClass){
            const div = document.createElement("div");
            div.className = `alert alert-${cssClass}`;
            div.appendChild(document.createTextNode(mensaje));

            //Mostrar en el DOM
            const contenido = document.querySelector(".container");
            const app = document.querySelector("#App");
            //Insertar mensaje en el interfaz de Usuario
            
        }
}


