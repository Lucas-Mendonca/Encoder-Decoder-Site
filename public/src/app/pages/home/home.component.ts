import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() public decodedText: string = "";
  @Input() public encodedText: string = "";

  clickEncode() {
    console.log('Click')
  }

}
