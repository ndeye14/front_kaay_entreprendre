import { Component, OnInit } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor() {}

   user : any;

  ngOnInit(): void { }




}
