import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public aDesayunos: Menu[];
  public aComidas: Menu[];

  constructor() { 
    this.aDesayunos = [
      new Menu("1", "Chilaquiles", "Tortillas – Salsa Verde – Huevo – Cebolla – Crema – Queso", "200 gr", "550 cal", 60),
      new Menu("2", "Huevos rancheros", "Tortillas – 2 Huevos – Salsa verde", "125 gr", "500 cal", 55),
      new Menu("3", "Huevo revuelto con jamón ", "Huevos – Jamón ", "160 gr", "600 cal", 65),
    ];

    this.aComidas = [
      new Menu("1", "Sopa Azteca", "Jitomate – Pollo – Tortilla – Aguacate", "200 gr", "800 cal", 80),
      new Menu("2", "Milanesa de res", "Milanesa de res – Papas a la francesa", "230 gr", "900 cal", 110),
      new Menu("3", "Pechuga de pollo rostizada", "Pechuga de Pollo y Ensalada ", "160 gr", "600 cal", 100),
    ];
  }

  ngOnInit(): void {
  }

}
