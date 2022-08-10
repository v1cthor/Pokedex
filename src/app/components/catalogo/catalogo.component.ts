import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  catalogo: any[] = [];
  filtro: string = '';
  loaddata: boolean = false;
  page = 1
  totalPokemons!: number;

  constructor(
    private pokedexService: PokedexService
  ) { }

  ngOnInit(): void {
    this.getCatalogo();

  }

  getCatalogo() {
    console.log(this.page + 0);
    this.loaddata = true;
    this.pokedexService.getCatalogo(20, this.page + 0).subscribe({
      next: (getcatalogo) => {
        this.totalPokemons = getcatalogo.count;
        getcatalogo.results.forEach((res: any) => {
          this.pokedexService.getinf(res.name).subscribe({
            next: (getcatalogo) => { this.loaddata = false; this.catalogo.push(getcatalogo) }
          })
        })
      }
    });
  }



}
