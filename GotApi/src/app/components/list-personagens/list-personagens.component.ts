import { Component, OnInit } from '@angular/core';
import { PersonagensService } from 'src/app/services/personagens.service';

@Component({
  selector: 'app-list-personagens',
  templateUrl: './list-personagens.component.html',
  styleUrls: ['./list-personagens.component.css']
})
export class ListPersonagensComponent implements OnInit {

  personagens:Array<any> = [
   
  ]

  constructor(private personagensService: PersonagensService) { }

  ngOnInit(): void {
    this.getPersonagens()
  }

  getPersonagens(){
    this.personagensService.getPersonagens().subscribe(personagem =>{
      this.personagens = personagem
    })

   
  }
}
