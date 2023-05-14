import { Component, Input, OnInit } from '@angular/core';
import { menus } from './menu-element';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
   @Input() iconOnly:boolean = false;
    public menus = menus;
  
  
  ngOnInit(): void {
    const body = document.querySelector('body');

   
    
  }

}
