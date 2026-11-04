import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cubo } from '../../models/cubo';

@Component({
  selector: 'app-cubo-component',
  standalone: false,
  styleUrl: './cubo-component.css',
  templateUrl: './cubo-component.html',
})
export class CuboComponent {
    @Input() cubo!: Cubo;
  @Input() esFavorito = false;
  @Output() favorito = new EventEmitter<Cubo>();

  marcarFavorito(): void {
    this.favorito.emit(this.cubo);
  }

}
