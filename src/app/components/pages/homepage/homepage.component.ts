import { Component, OnInit } from '@angular/core';
import { FestasApiService } from 'src/app/services/festas-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {

  public festas: any = [];
  currentMovie = 0;

  constructor(private festasService: FestasApiService) { }

  ngOnInit(): void {
    this.getFestas();
  }

  getFestas(): void {
    this.festasService.getDados().subscribe(
      (festas) => {
        festas.forEach((festa) => {
          this.festas.push(festa);

          while(this.festas.length > 10) {
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
      console.log(this.festas);
  }



}
