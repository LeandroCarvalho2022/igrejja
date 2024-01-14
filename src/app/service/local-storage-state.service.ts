import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface CardData {
  cardTitle?: string;
  cardText?: string;
  cardImgTop?: string;
  hiddenValue?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageStateService {
  private _cardDataSubject = new BehaviorSubject<CardData | null>(null);

  get cardData$(): Observable<CardData | null> {
    return this._cardDataSubject.asObservable();
  }

  setCardData(cardData: CardData): void {
    this._cardDataSubject.next(cardData);
  }
}