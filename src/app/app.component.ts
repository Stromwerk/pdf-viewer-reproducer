import { Component } from '@angular/core';
import { pdfBase64 } from './pdfBase64';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pdfBase64 = pdfBase64;
  pdfString = 'assets/example.pdf';
}
