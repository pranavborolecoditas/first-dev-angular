import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {CustomButton} from './app/shared/custom-component/custom-button';
import {ToggleSwitch} from './app/shared/custom-component/toggle-switch';


customElements.define('toggle-switch', ToggleSwitch);
customElements.define('custom-button', CustomButton);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
