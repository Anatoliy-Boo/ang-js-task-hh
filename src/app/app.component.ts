import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ToastsComponent } from "./toasts/toasts.component";

import { AppSupportService } from './app.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule, ToastsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title: string = 'ANG JS Compo';

  constructor(public appSupportService: AppSupportService) { }
}
