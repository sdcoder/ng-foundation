import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor() {}

  title = 'app';

  ngOnInit() {
    $(document).foundation();
  }
}
