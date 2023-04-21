const productos = [
    {
        id: 1,
        foto: "https://kbd.news/pic/2022/107/1805.jpg",
        nombre: "42Azalia",
        descripcion:"Teclado mecánico personalizado, kit con electrónica.",
        precio: 1500
    },
    {
        id: 2,
        foto: "https://kbd.news/pic/2022/71/1334.jpg",
        nombre: "Banime40",
        descripcion:"Teclado mecánico personalizado, kit con electrónica.",
        precio: 1850
    },
    {
        id: 3,
        foto: "https://kbd.news/pic/2022/92/1604.jpg",
        nombre: "Beyblock20",
        descripcion:"Teclado mecánico personalizado, kit con electrónica.",
        precio: 1350
    },
    {
        id: 4,
        foto: "https://kbd.news/pic/2022/107/1804.jpg",
        nombre: "Ffkb with led ring",
        descripcion:"Teclado mecánico personalizado, kit con electrónica.",
        precio: 2100
    },
    {
        id: 5,
        foto: "https://kbd.news/pic/2022/81/1467.jpg",
        nombre: "Freaku4x",
        descripcion:"Teclado mecánico personalizado, kit con electrónica.",
        precio: 1950
    },
    {
        id: 6,
        foto: "https://kbd.news/pic/2022/91/1592.jpg",
        nombre: "Keezy boost40",
        descripcion:"Teclado mecánico personalizado, kit con electrónica.",
        precio: 2300
    },
    {
        id: 7,
        foto: "https://kbd.news/pic/2022/103/1740.jpg",
        nombre: "Kunai",
        descripcion:"Teclado mecánico personalizado, kit con electrónica.",
        precio: 1740
    }
    ,
    {
        id: 8,
        foto: "https://kbd.news/pic/2023/119/1968.jpg",
        nombre: "Dilemma v2",
        descripcion:"Teclado mecánico personalizado, kit con electrónica.",
        precio: 3550
    }
];



const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };


//Almacenar producto por producto
// for (const producto of productos) {
//     guardarLocal(producto.id, JSON.stringify(producto));
// }


// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));




class Producto {
    constructor(obj) {
        this.id = parseInt(obj.id);
        this.nombre = obj.nombre;
        //this.nombre  = obj.producto.toUpperCase();
        this.precio  = parseFloat(obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.16;
    }
}
//Obtenemos el listado de productos almacenado
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productos2 = [];
//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
for (const objeto of almacenados)
    productos2.push(new Producto(objeto));
//Ahora tenemos objetos productos y podemos usar sus métodos
for (const producto of productos2)
    producto.sumaIva();


console.table(productos2);