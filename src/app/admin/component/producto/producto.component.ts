import { Component } from '@angular/core';
import { ProductoService } from '../../../core/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {

  constructor(private productoService: ProductoService){
    
  }

}
