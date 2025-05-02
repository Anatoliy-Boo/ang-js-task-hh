import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ToastsService {
  messages: string[] = [];
  isAppear = false;

  constructor() { }

  addToastMes(message: string) {
    this.messages.push(message);
    this.isAppear = true;

    setTimeout(() => {
      this.removeToast();
    // }, 470000);
    }, 1800);
  }

  removeToast(): void {
    this.isAppear = false;

    setTimeout(() => {
      this.messages = [];
    }, 400);
  }
}
