import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FestasApiService } from 'src/app/services/festas-api.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  public specificParty: any = [];

  constructor(private festasService: FestasApiService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.specificParty.push(this.getFestas(this.actRoute.snapshot.params['id']));
  }

  getFestas(id: number): void {
    this.festasService.getDadosById(id).subscribe(
      (festa) => {
        console.log(festa);
        return this.specificParty = festa;
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
