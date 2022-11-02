import { Component, OnInit } from '@angular/core';
import { FestasApiService } from 'src/app/services/festas-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {

  public festas: any = [];

  constructor(private festasService: FestasApiService) { }

  ngOnInit(): void {
    this.getFestas();
  }

  getFestas(): void {
    this.festasService.getDados().subscribe(
      (festas) => {
        festas.forEach((festa) => {
          console.log(festa);
          this.festas.push(festa);
          while(this.festas.length > 50) {
            this.festas.pop();
          }
          return;
        });
        // this.festas.forEach((festa: any) => {
        //   console.log(festa);
        //   this.festasService.putImages(festa.id, festa);
        //   return;
        // });
      });
  }

  dayOfWeekAsString(date: number) {
    let weekDay = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    return weekDay[new Date(date).getDay()];
  }

  dayandMonthAsString(date: number) {
    let months = [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
           "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ];
    return `${new Date(date).getDate()} de ${months[new Date(date).getMonth()]}`;
  }
}
