import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AppSupportService {
  isExpandedHeaderMode = true;

  constructor() { }

  getHeaderMode() {
    return of(this.isExpandedHeaderMode);
  }

  setExpandedMode() {
    this.isExpandedHeaderMode = true;
  }

  removeExpandedMode() {
    this.isExpandedHeaderMode = false;
  }
}
