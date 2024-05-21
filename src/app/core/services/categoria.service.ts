import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlBase: string = "https://lv.blumbit.net/back/public/api";

  constructor(private http: HttpClient) { }

  listarCategorias() {
    console.log('Estoy aqui');
    return this.http.get(`${this.urlBase}/categoria`);
  }

  guardarCategoria(datos: any){
    return this.http.post(`${this.urlBase}/categoria`, datos);
  }

  mostrarCategoria(id: number){
    return this.http.get(`${this.urlBase}/categoria/${id}`);

  }
  
  modificarCategoria(id: number, datos: any){
    return this.http.put(`${this.urlBase}/categoria/${id}`, datos);
  }

  elimninarCategorias(id: number){
    return this.http.delete(`${this.urlBase}/categoria/${id}`);
  }

}
