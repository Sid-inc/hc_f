import { Component } from '@angular/core';

interface Widget {
  name: string;
  state: boolean;
  icon?: string;
}

class Phone implements Widget {
  public name: string;
  public state: boolean;
  public icon?: string;

  constructor(name: string, state: boolean, icon?: string) {
    this.name = name;
    this.state = state;
    this.icon = '../../../assets/images/phone.png';
  }
}
      
@Component({
    selector: 'app-widget',
    templateUrl: "./widget.component.html",
    styleUrls: ["./widget.component.scss"]
})
export class WidgetComponent {
  MyPhone = new Phone('MyPhone', false);
}
