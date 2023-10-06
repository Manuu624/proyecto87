import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../service/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  coleccionProductos: Producto[] = []; //creamos coleccion basada en la  interfaz productos
  productosSeleccionado!: Producto; // recibir valores vacíos
  modalVisibleProducto: boolean = false;
  
  //modalVisible: boolean = false
  //eliminarVisible: boolean = false

  //formulario vinculado al archivo html

  producto = new FormGroup({
    nombre: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required),
    alt: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    precio: new FormControl(0,Validators.required),
    categoria: new FormControl('',Validators.required)

  })

  constructor(
    public servicioCrud: CrudService //panteamos servicio de forma local
  ){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto(){
    if(this.producto.valid){
      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!,
        descripcion: this.producto.value.descripcion!,
        precio: this.producto.value.precio!,
        categoria: this.producto.value.categoria!
      };

      await this.servicioCrud.crearProducto(nuevoProducto)
      .then(producto => {
        alert("Ha agregado un nuevo producto con éxito.")
      })

      .catch(error => {
        alert("Hubo un error al cargar nuevo producto.")
      })
    }
  }

  //Editar producto, vincula al modal editar

  mostrarEditar(productosSeleccionado: Producto){

    /*retomamos y enviamos los valores de ese producto seleccionado, el ID no se vuelve a
    enviar porque no se modifica*/

    this.productosSeleccionado = productosSeleccionado;
    this.producto.setValue({
      nombre: productosSeleccionado.nombre,
      imagen: productosSeleccionado.imagen,
      alt: productosSeleccionado.alt,
      descripcion: productosSeleccionado.descripcion,
      precio: productosSeleccionado.precio,
      categoria: productosSeleccionado.categoria
    })
  }

  //vincula al boton "guardar cambios"
  //recibe los valores nuevos que se ingrese en el formulario
  editarProducto(){
    let datos: Producto = {
      idProducto: this.productosSeleccionado.idProducto,
      //signo de exclamacion ! sirve para recibir valores vacios al inicializar
      nombre: this.producto.value.nombre!,
      imagen: this.producto.value.imagen!,
      alt: this.producto.value.alt!,
      descripcion: this.producto.value.descripcion!,
      precio: this.producto.value.precio!,
      categoria: this.producto.value.categoria!
    }

    this.servicioCrud.modificarProducto(this.productosSeleccionado.idProducto,datos)
    .then(producto => {
      alert("Se guardaron los cambios");
    })
    .catch(error => {
      alert("Hubo un error al cambiar el producto\n"+error);
    })
  }
}





