import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonInfoResponse } from '../interface/pokemoninfo.interface';
import { PokedexService } from '../services/pokedex.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  id: number = 0;
  moreInf!: PokemonInfoResponse;
  img: string = '';
  name: string = '';
  type: string = '';
  hp: number = 0;
  Attack: number = 0;
  Defense: number = 0;
  Special_attack: number = 0;
  Special_defense: number = 0;
  Speed: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokedexService: PokedexService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getinf();


  }

  getinf() {
    this.pokedexService.getinf(this.id).subscribe({
      next: (datainf) => {
        this.moreInf = datainf; console.log(this.moreInf);
        this.hp = this.moreInf.stats[0].base_stat;
        this.Attack = this.moreInf.stats[1].base_stat;
        this.Defense = this.moreInf.stats[2].base_stat;
        this.Special_attack = this.moreInf.stats[3].base_stat;
        this.Special_defense = this.moreInf.stats[4].base_stat;
        this.Speed = this.moreInf.stats[5].base_stat;

        this.img = this.moreInf.sprites.front_default;
        this.name = this.moreInf.name;
        this.type = this.moreInf.types[0].type.name;

      }
    })
  }

}
