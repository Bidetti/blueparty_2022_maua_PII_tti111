import { Component } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {

  compras = [
    { festa: "Embraza (COPA 2022)", ingresso: "Pista", quantidade: 3, valor: "225,00", data: '24/09/2022'},
    { festa: "It's a Trap", ingresso: "Pista", quantidade: 2, valor: "150,00", data: '24/10/2022'},
    { festa: "DIPORRE", ingresso: "Camarote", quantidade: 1, valor: "300,00", data: '25/10/2022'},
    { festa: "HALLOWEEN DO PACA", ingresso: "Camarote", quantidade: 3, valor: "900,00", data: '29/10/2022'},
    { festa: "DUODECK PARTY", ingresso: "Pista", quantidade: 1, valor: "75,00", data: '6/11/2022'},
    { festa: "Baile do Rafinha", ingresso: "Camarote", quantidade: 2, valor: "600,00", data: '12/11/2022'},
  ]
}
