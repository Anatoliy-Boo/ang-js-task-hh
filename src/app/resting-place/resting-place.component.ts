import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resting-place',
  imports: [RouterModule],
  templateUrl: './resting-place.component.html',
  styleUrl: './resting-place.component.scss'
})

export class RestingPlaceComponent implements OnInit  {
  title: string = 'Glad to see you';

  ngOnInit() {
    console.log("🚀 ~ RestingPlaceComponent  ~ ngOnInit:");
  }
}
