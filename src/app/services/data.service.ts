import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente, Heroe } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }


  getUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbums(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/albums');
  }

  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }

  getHeroes(){
    return this.http.get<any>('/assets/data/superheroes.json');
  }
}
