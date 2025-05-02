import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page404',
  imports: [RouterModule],
  templateUrl: './page404.component.html',
  styleUrl: './page404.component.scss'
})

export class Page404Component implements OnInit {
  title: string = 'Error 404 page';

  ngOnInit() {
    console.log("🚀 ~ Page404Component  ~ ngOnInit:");
  }
}
