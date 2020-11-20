import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albunes: any[] = [];
  textoBuscar: string = '';

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe( albumes => {
      this.albunes = albumes;
      console.log(albumes);
    });
  }

  onSearchChange( event){
    console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
