

let nombre=("ingrese su nombre");
console.log("bienvenido a moviles Argentina");

let lista=document.getElementById("milista")

renderizarProductos();

function renderizarProductos(){
    for (const producto of productos){
        lista.innerHTML+=`<li class="col.sm3 list-group-item">
        <h3> ID: ${producto.id} </h3>
        <img src=${producto.foto} width="250" height="250">
        <p> producto:${producto.nombre}</p>
        <p><strong> $ ${producto.precio} </strong></p>
        <button class="btn btn-danger" id=btn${producto.id}
        </li>`;
    }

    productos.forEach(producto=>{
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
            agregarAlcarrito(producto);
        })
    })

}

function agregarAlcarrito(producto){
    carrito.push(producto);
    console.log(carrito);
    alert("producto: "+producto.nombre+" agregado al carro!");
    document.getElementById("tablabody").innerHTML+=`
    <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        `;
    
    localStorage.setItem("carrito",JSON.stringify(carrito));
}