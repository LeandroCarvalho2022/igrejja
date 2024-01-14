import { Routes } from '@angular/router';
import { HomepaComponent } from './components/homepa/homepa.component';
import { CardsSavedComponent } from './components/cards-saved/cards-saved.component';
import { HistoryaComponent } from './components/historya/historya.component';

export const routes: Routes = [
    {path:  '', component: HomepaComponent},
    {path: 'cardsaved', component: CardsSavedComponent},
    {path: 'historia', component: HistoryaComponent}
];
