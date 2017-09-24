import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http'
import 'rxjs/Rx'; // get everthing

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
