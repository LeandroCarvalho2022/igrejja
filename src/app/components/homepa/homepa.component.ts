import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { LocalStorageService } from '../../service/local-storage.service';
import { LocalStorageStateService } from '../../service/local-storage-state.service';

interface CardData {
  cardTitle?: string;
  cardText?: string;
  cardImgTop?: string;
}

@Component({
  selector: 'app-homepa',
  standalone: true,
  imports: [
    RouterLink,RouterOutlet
  ],
  templateUrl: './homepa.component.html',
  styleUrl: './homepa.component.css'
})
export class HomepaComponent {
  constructor(private localStorageService: LocalStorageService,
    private localStorageStateService: LocalStorageStateService) {}

  addToLocalStorage(): void {
    // Fetch values from elements with specific classes
    const cardTitleElement = document.querySelector('.card-title');
    const cardTextElement = document.querySelector('.card-text');
    const cardImgTopElement = document.querySelector('.card-img-top');

    // Create a new cardData object with only the values fetched from the classes
    const cardData: CardData = {};

    if (cardTitleElement) {
      cardData.cardTitle = cardTitleElement.textContent?.trim() || '';
    }

    if (cardTextElement) {
      cardData.cardText = cardTextElement.textContent?.trim() || '';
    }

    if (cardImgTopElement) {
      cardData.cardImgTop = cardImgTopElement.getAttribute('src') || '';
    }

    // Save the cardData to local storage
    this.localStorageService.addToLocalStorage(cardData);

    // Save the cardData to the state service
    this.localStorageStateService.setCardData(cardData);
  }


  copiarCNPJ() {
    // Seleciona o texto que você deseja copiar
    const textoParaCopiar = '76.648.500/0176-86'; // Substitua pelo CNPJ real

    // Cria um elemento de texto temporário
    const elementoTemporario = document.createElement('textarea');
    elementoTemporario.value = textoParaCopiar;

    // Adiciona o elemento temporário à DOM
    document.body.appendChild(elementoTemporario);

    // Seleciona o texto no elemento temporário
    elementoTemporario.select();
    elementoTemporario.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto para a área de transferência
    document.execCommand('copy');

    // Remove o elemento temporário
    document.body.removeChild(elementoTemporario);

    // Alerta ou console.log para indicar que o CNPJ foi copiado
    alert('CNPJ copiado para a área de transferência: ' + textoParaCopiar);
  }
  linkMapa = "https://www.google.com/maps/dir/?api=1&destination=-25.51302340808%2C-49.330786943337&fbclid=IwAR1wJbP1lkKlyUlm6_C7JiHpiasfAZKQj-pghtBViaMqgoD-PFgWZXfL-lM"
}
