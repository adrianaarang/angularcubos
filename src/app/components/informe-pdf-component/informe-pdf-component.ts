import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ServiceAuth } from '../../services/service.auth';

@Component({
  selector: 'app-informe-pdf-component',
  standalone: false,
  styleUrl: './informe-pdf-component.css',
  templateUrl: './informe-pdf-component.html',
})
export class InformePdfComponent {
  constructor(private _auth: ServiceAuth) {}

  async generarDocumento(): Promise<void> {
    const pedidos = await this._auth.getComprasAsync();

    let document: jsPDF = new jsPDF();
    document.setFontSize(18);
    document.text("Informe de compras", 10, 10);
    document.setFontSize(12);

    const headers = [["Pedido", "Cubo", "Fecha"]];
    const data = pedidos.map(p => [p.idPedido, p.idCubo, p.fechaPedido]);

    autoTable(document, {
      head: headers,
      body: data,
      startY: 20
    });
    document.save("compras.pdf");
  }
}
