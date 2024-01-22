import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.css']
})
export class FraseComponent implements OnInit{
  @Input() testo: string;
  @Input() numero: number;
  constructor() {
    this.testo = ''
    this.numero = 1
  }
  ngOnInit(): void {
    
  }
}
