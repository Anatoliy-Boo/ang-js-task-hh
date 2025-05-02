import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ToastsService } from './toasts.service';

@Component({
  selector: 'app-toasts',
  imports: [CommonModule],
  templateUrl: './toasts.component.html',
  styleUrl: './toasts.component.scss'
})

export class ToastsComponent {
  constructor(public toastsService: ToastsService) { }
}
