import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularLib } from '@sergiim/angular-lib';
import { jsLib } from '@sergiim/js-lib';

@Component({
  imports: [RouterModule, AngularLib],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'frontend';
  jsLibContent = jsLib();
}
