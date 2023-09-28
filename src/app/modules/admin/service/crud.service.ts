import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { catchError, map } from 'rxjs/operators'; //mapea valores ->
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private productosCollection: AngularFirestoreCollection<Producto>
  constructor(private database: AngularFirestore) {
    this.productosCollection = database.collection('productos')
  }

  //crud -> productos
  crearProducto(producto: Producto){
    return new Promise(async(resolve,reject)=>{
      try{
        //creamos constante que guarde un nuevo ID
        const idProducto = this.database.createId();
        
        //se lo asignamos al atributo ID de la interfaz Producto
        producto.idProducto = idProducto;
        const resultado = await this.productosCollection.doc(idProducto).set(producto)
        
        resolve(resultado);
      }
      catch(error){
        reject(error);
      }
    })
  }

  obtenerProducto(){
    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
    //snapshot: toma captura del estado de los datos
    //map: recorre o "mapea" la informacion
    //pipe: funciona como tubería, retorna el nuevo arreglo
    //a: resguarda la nueva informacion y la envia
  }
}
