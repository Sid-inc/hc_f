import { Component } from '@angular/core';

class navItem {
  public name: string;
  public icon: string;
  public isActive: boolean;

  constructor(name: string, isActive: boolean) {
    this.name = name;
    this.isActive = false;
  }
}

@Component({
    selector: 'app-nav',
    templateUrl: "./nav.component.html",
    styleUrls: ["./nav.component.scss"]
})
export class NavComponent { 
    title: string = "Системы";

    navItems: navItem[] = 
    [
      { name: 'Сеть', icon: '../../../../assets/images/wifi.svg', isActive: true },
      { name: 'Статистика', icon:'../../../../assets/images/stat.svg', isActive: false}
    ];

    cleanActive(items: navItem[]): void {
      for(let item of items) {
        item.isActive = false;
      }
    }

    changeItem(item: navItem): void {
      this.cleanActive(this.navItems);
      item.isActive = true;
    }
}
