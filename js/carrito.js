
console.table(productos);
const carrito = [];
let contenedor = document.getElementById("misprods");

function renderizarProductos(){
    for(const producto of productos){
        contenedor.innerHTML += `

            <div class="card col-sm-2">
                <img src=${producto.foto} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.id}</h5>
                    <h3 class="card-text fw-bold">${producto.nombre}</h3>
                    <p class="card-text ">${producto.descripcion}</p>
                    <p class="card-text fw-bold">$ ${producto.precio}</p>
                    <button class="btn btn-secondary align-bottom">Ver más</button>
                    <button id='btn${producto.id}' class="btn btn-secondary align-bottom">Agregar</button>
                </div>
            </div>

        `;
    }
    
    //EVENTOS
    productos.forEach((producto)=>{
        document.getElementById(`btn${producto.id}`).addEventListener('click',()=>{
            agregarACarrito(producto);
        });
    });
}


renderizarProductos();


function agregarACarrito(prodAAgregar){
    carrito.push(prodAAgregar);
    console.table(carrito);

    Swal.fire(`Agregaste el producto ${prodAAgregar.nombre} al carrito!`)
    //alert(`Agregaste el producto ${prodAAgregar.nombre} al carrito!`);
    
    //agregar fila a la tabla de carrito
    document.getElementById('tablabody').innerHTML += `
        <tr>
            <td>${prodAAgregar.id}</td>
            <td>${prodAAgregar.nombre}</td>
            <td>${prodAAgregar.precio}</td>
            
        </tr>
    `;
    //incrementar el total
    let totalCarrito = carrito.reduce((acumulador,producto)=>acumulador+producto.precio,0);
    document.getElementById('total').innerText = 'Total a pagar: $'+totalCarrito;
}


// function quitarDeCarrito(prodQuitar){
//     carrito.pop(prodQuitar);
//     console.table(carrito);

//     Swal.fire(`Quitaste el producto ${prodQuitar.nombre} del carrito!`)
//     //alert(`Agregaste el producto ${prodAAgregar.nombre} al carrito!`);
    
//     //Quitar fila a la tabla de carrito
//     document.getElementById('tablabody').innerHTML += `
//         <tr>
//             <td>${prodQuitar.id}</td>
//             <td>${prodQuitar.nombre}</td>
//             <td>${prodQuitar.precio}</td>
//             <td><button id='btn${prodQuitar.id}' class="btn btn-secondary align-bottom">Quitar</button></td>
//         </tr>
//     `;
//     //incrementar el total
//     let totalCarrito = carrito.reduce((acumulador,producto)=>acumulador-producto.precio,0);
//     document.getElementById('total').innerText = 'Total a pagar: $'+totalCarrito;
// }