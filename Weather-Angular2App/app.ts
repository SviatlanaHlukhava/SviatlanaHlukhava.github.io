import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';

// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './scripts/modules/app.module';

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);
