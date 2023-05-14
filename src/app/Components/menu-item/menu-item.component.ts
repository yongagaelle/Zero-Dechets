import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent  implements OnInit {
  @Input() menu: any;
  @Input() iconOnly: boolean | undefined;
  @Input() secondaryMenu = false;
  
   constructor() {
  }

  ngOnInit() {
  }

  openLink() {
    this.menu.open = this.menu.open;
  }

  chechForChildMenu() {
    return (this.menu && this.menu.sub) ? true : false;
  }
}
