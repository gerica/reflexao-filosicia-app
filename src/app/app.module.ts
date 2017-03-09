import { SobrePage } from './../pages/sobre/sobre';
import { ReflexaoService } from './../services/reflexao.service';
import { HomePage } from './../pages/home/home';
import { ReflexaoPage } from './../pages/reflexao/reflexao';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { AutorService } from "../services/autor.service";

export const firebaseConfig = {
  apiKey: "AIzaSyDZFCSxIsR-5nRpvsd6DjwfysBeRNyEf1A",
  authDomain: "reflexao-filosofica.firebaseapp.com",
  databaseURL: "https://reflexao-filosofica.firebaseio.com",
  messagingSenderId: "405105317374"
};

@NgModule({
  declarations: [
    MyApp,
    ReflexaoPage,
    HomePage,
    SobrePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReflexaoPage,
    HomePage,
    SobrePage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
    ReflexaoService,
    AutorService]
})
export class AppModule { }
