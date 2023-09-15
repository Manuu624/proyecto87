import { Component, OnInit } from '@angular/core';
// NUEVA INTERFAZ
import { Perro } from 'src/app/models/perro';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // PROPIEDAD PÚBLICA (TIPO ARRAY)
  public info: Perro[];

  // INICIALIZA LA PROPIEDAD INFO
  constructor(){
    this.info = [
      {
        id: "",
        raza: "Rust In Peace",
        descripcion: "Megadeth",
        imagen:"https://upload.wikimedia.org/wikipedia/en/d/dc/Megadeth-RustInPeace.jpg",
        alt:"Golden Retriever"
      },
      {
        id: "",
        raza: "Ride The Lighting",
        descripcion: "Metallica",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_892417-MLU54983082960_042023-O.webp",
        alt:"Rottweiler"
      },
      {
        id: "",
        raza: "Fear of The Dark",
        descripcion: "Iron Maiden",
        imagen:"https://akamai.sscdn.co/letras/360x360/albuns/4/5/f/d/204511628624872.jpg",
        alt:"Border Collie"
      },
      
      {
        id: "",
        raza: "Painkiller",
        descripcion: "Judas Priest",
        imagen:"https://upload.wikimedia.org/wikipedia/en/1/16/Judaspainkiller.JPG",
        alt:"Rottweiler"
      },
      {
        id: "",
        raza: "Agent Orange",
        descripcion: "Sodom",
        imagen:"https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2019/06/468330a486e27c0026745c92e7ec1725.1000x1000x1.jpg?fit=1000%2C1000&ssl=1",
        alt:"Rottweiler"
      },
      {
        id: "",
        raza: "Rise of Chaos",
        descripcion: "Accept",
        imagen:"https://upload.wikimedia.org/wikipedia/en/a/a6/Accepttheriseofchaoscdcover.png",
        alt:"Rottweiler"
      },
      {
        id: "",
        raza: "Kings of Metal",
        descripcion: "Manowar",
        imagen:"https://lastfm.freetls.fastly.net/i/u/500x500/fffd80a10caa4446c4e6e0b239f076ab.jpg",
        alt:"Rottweiler"
      },
      {
        id: "",
        raza: "Follow the Leader",
        descripcion: "Korn",
        imagen:"https://upload.wikimedia.org/wikipedia/en/5/52/Korn_follow_the_leader.jpg",
        alt:"Rottweiler"
      },
      {
        id: "",
        raza: "Iowa",
        descripcion: "Slipknot",
        imagen:"https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Slipknot_Iowa.jpg/220px-Slipknot_Iowa.jpg",
        alt:"Rottweiler"
      },
      {
        id: "",
        raza: "The Empire",
        descripcion: "Vader",
        imagen:"https://upload.wikimedia.org/wikipedia/en/5/59/Vader_The_Empire.jpg",
        alt:"Rottweiler"
      },
      
    ]
  }

  // EVENTO DE CONSTRUCCIÓN/ INICIALIZACIÓN
  ngOnInit(): void{
  }
}
