import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LocalStorageService } from './service/local-storage.service';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), LocalStorageService ]
};
