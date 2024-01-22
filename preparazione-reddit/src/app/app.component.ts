import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  vettore = new Array<string>();
  
  cliccato(titolo: HTMLInputElement, ripetizioni: HTMLInputElement): boolean 
  {
    let cont = Number(ripetizioni.value);
    for(let i:number =0; i< cont; i++)  //Ciclo For in typescript
    {
      this.vettore.push(i+" "+titolo.value);
    }
    return false;
  } 
  ngOnInit(): void {
   
  }
}
