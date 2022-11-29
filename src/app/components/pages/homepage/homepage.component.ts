import { Component, OnInit } from '@angular/core';
import { FestasApiService } from 'src/app/services/festas-api.service';

const mediaQuery = window.matchMedia('(max-width: 576px)');

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {

  public festas: any = [];
  public featuredCarousel: any = [];
  public indexCarousel = 0;
  public intervalCarousel = 4000;
  public showIndicators = true;

  constructor(private festasService: FestasApiService) { }

  ngOnInit(): void {
    this.getFestas();
  }

  getFestas(): void {
    this.festasService.getDados().subscribe(
      (festas) => {
        festas.forEach((festa) => {
          if(this.festas.length < 50) {
            this.festas.push(festa);
          }
        });
        this.getFeaturedCarousel();
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

  getFeaturedCarousel() {
    for ( let i = 0; i < this.festas.length; i++) {
      if (this.festas[i].destaque) {
        this.featuredCarousel.push(this.festas[i]);
      }
    }
  }

}
