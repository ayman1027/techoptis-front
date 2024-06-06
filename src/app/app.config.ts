import { provideRouter } from '@angular/router';
import { importProvidersFrom, EnvironmentProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(routes)
  ] as unknown as EnvironmentProviders[]
};
