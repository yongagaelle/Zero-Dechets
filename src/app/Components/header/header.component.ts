import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit {
   @Input() sidenav: any;
	@Input() sidebar: any;
	@Input() drawer: any;
	@Input() matDrawerShow: any;
	searchOpen: boolean = false;
toolbarHelpers: any;
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
