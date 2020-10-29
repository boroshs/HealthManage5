import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  //styleUrls: ['./top-nav.component.css']
  styles: [ // from ICP6-APIs
    '.background {background:#000000; color: white}',
    'li a { color: white}',
    'ul.nav a:hover { color: #fffccc  }'
  ]
})
export class TopNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
