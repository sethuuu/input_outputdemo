import { Component, EventEmitter, Input,Output} from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!<button (click)="sendDataToParent()">check</button></h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input('alaisname') name: string;
  @Output() sendData :EventEmitter<any>=new EventEmitter<any>();
  sendDataToParent()
  {
    this.sendData.emit("Testing the transfer");
  }
}
