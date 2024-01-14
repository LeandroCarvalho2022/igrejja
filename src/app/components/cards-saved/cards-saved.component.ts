import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { LocalStorageStateService } from '../../service/local-storage-state.service';

@Component({
  selector: 'app-cards-saved',
  templateUrl: './cards-saved.component.html',
  styleUrls: ['./cards-saved.component.css']
})
export class CardsSavedComponent implements OnInit {
  savedCard: any;

  constructor(private localStorageStateService: LocalStorageStateService) {}

  ngOnInit(): void {
    this.localStorageStateService.cardData$.subscribe((cardData) => {
      this.savedCard = cardData;
    });
  }
}

@NgModule({
  declarations: [CardsSavedComponent],
  imports: [CommonModule], // Certifique-se de importar o CommonModule aqui
})
export class CardsSavedModule {}