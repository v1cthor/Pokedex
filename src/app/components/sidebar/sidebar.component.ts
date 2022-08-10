import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items: any[] = [];
  imgIcon: string = '';

  constructor( ) { }

  ngOnInit(): void {
    
  }

 

}
