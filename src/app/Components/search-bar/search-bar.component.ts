import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent  implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public bigMenu: any;
	@Input() open: any;
}
