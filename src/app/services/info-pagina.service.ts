import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

info:InfoPagina = {};
cargada = false;

  constructor(private http:HttpClient) { 

    
    //Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina)=>{

      //console.log(resp['facebook']);
      this.cargada = true;
      this.info=resp; 
      console.log(resp);
    }


    )
  }
}
