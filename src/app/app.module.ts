import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { HeaderComponent }   from './dashboard/header/header.component';
import { TabsComponent }   from './dashboard/tabs/tabs.component';
import { NavComponent }   from './dashboard/tabs/nav/nav.component';
import { NetworkTabComponent }   from './dashboard/tabs/network-tab/network-tab.component';
import { WidgetComponent }   from './dashboard/widget/widget.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ 
      AppComponent, 
      HeaderComponent, 
      TabsComponent,
      NavComponent,
      NetworkTabComponent,
      WidgetComponent 
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
