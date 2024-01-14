import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private localStorageKey = 'savedCards';

  constructor(private router: Router) {}

  getSavedCard(): any {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : null;
  }

  addToLocalStorage(cardData: any): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(cardData));

    // Importante: Certifique-se de que o serviço tem acesso ao router antes de chamar navigate
    if (this.router) {
      this.router.navigate(['cardsaved']);
    } else {
      console.error('Router not available');
    }
  }
}