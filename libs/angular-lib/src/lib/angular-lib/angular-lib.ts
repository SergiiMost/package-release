import { Component, OnInit } from '@angular/core';
import { jsLib } from '@sergiim/js-lib2';

@Component({
  selector: 'lib-angular-lib',
  imports: [],
  templateUrl: './angular-lib.html',
  styleUrl: './angular-lib.css',
})
export class AngularLib implements OnInit {
  ngOnInit() {
    console.log(jsLib());
  }
}
