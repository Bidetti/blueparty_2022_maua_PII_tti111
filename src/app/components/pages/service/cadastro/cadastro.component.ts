import { Component, OnInit } from '@angular/core';
import { FestasApiService } from 'src/app/services/festas-api.service';

const xhr = new XMLHttpRequest();

let data = JSON.stringify({
  "id": 22,
  "agency": {
    "id": 1,
    "name": "Trunk",
    "imageURL": "https://i.imgur.com/L3XMAoy.jpg"
  },
  "title": "TRUNK - do Trap ao Funk - Open Bar",
  "description": "Nosso tempero tem a ousadia do Trap, e a mistura controversa do Funk. A TRUNK chega para mudar suas noites de Sexta-Feira, venha curtir uma noite com bebida à vontade, música boa e gente feliz! 🎂 Venha comemorar seu aniversário conosco! Traga 4 convidados e ganhe uma cortesia 📲 Mais informações pelo Facebook ou Instagram \n \n:: PREÇO 💰\nR$ 50,00 lote 1, OPEN\nR$ 60,00 lote 2, OPEN\nR$ 70,00 lote 3, OPEN\nR$ 80,00 lote 4, OPEN\nR$ 90,00 lote 5, OPEN\n \nAtlantis Vodka Orgânica 🧊 - Fechamos uma parceria especial* para nossos clientes, ingresso + garrafa + Copo por R$ 99,99.\nVocê pode consumir sua garrafa na própria festa ou levar para casa. *Quantidade limitada a 10 unidades por evento, 2 unidades por pessoa.\n  \n🚨 Atenção: o valor de porta começa à partir do último lote antecipado! \nUniversitários tem 10% de desconto. Apresente sua carteirinha na entrada. Código para antecipados* com desconto: UNITRUNK\n*os antecipados com desconto de universitários, devem apresentar as carteirinhas válidas na porta.\n \n:: OPEN BAR 🍺\nCerveja Amstel ou Budweiser \n  Gin & Tonic\n  Gin Tropical\n  Gin Melancia\n  Vodka\n  Energético\n  Mojito Frozen\n  Catuaba\n  Askov Flavours\n  Corote\n  Coca-cola\n  Guaraná Antártica\n  Soda Limonada\n  Água.\n  \n  :: LINE UP 🎼:\n  🎧 Micão\n  🎧KIDDZ\n  🎧Sapienza\n  🎧Ti Albuquerque\n-----\nEm um  ato de respeito ao nosso planeta 🌍, NÃO TEREMOS COPOS DESCARTÁVEIS no evento.\nSerá realizada a venda de copos ecológicos no local, pelo valor de R$ 5,00.Você pode levar sua caneca!!\n🚫 PROIBIDA ENTRADA DE CANECAS DE ALUMÍNIO OU VIDRO\n 🏠 Double Deck - Rua Alagoas, 836\n  \n  ☛ Entrada sujeita à lotação;\n  ☛ Não oferecemos serviço de chapelaria; \n  ☛ Evento proibido para menores de 18 anos; 🔞\n  ☛ Obrigatória a apresentação de documento e registro fotográfico do mesmo na entrada; 🔞\n  ☛ Se beber não dirija; 🚕\n  ☛ Não será tolerado qualquer tipo de preconceito no evento!",
  "date": "11/11/2022",
  "destaque": false,
  "time": {
    "start": "20:00",
    "end": "02:00"
  },
  "localization":
  {
      "name": "Double Deck",
      "address": "Rua Alagoas, 836",
      "city": "São Paulo",
      "state": "SP",
      "country": "Brasil",
      "cep": "01242-001"
  },
  "tickets": [
    {
      "id": 1,
      "name": "Pista",
      "description": "Open Bar - Pista",
      "price": "70.00",
      "quantity": "400",
      "type": "normal"
    }
  ],
  "imageURL": "https://i.imgur.com/YPBlfl3.jpg",
  "active": true,
  "update": "2022-29-12T08:11:00"
})

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private festa: FestasApiService) { }


  ngOnInit(): void {
  }


  async onSubmit() {
    await fetch("http://localhost:3000/festas", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
    .then(response => response.json())
  }


}
