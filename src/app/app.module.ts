import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule, HttpClient, } from '@angular/common/http';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from "@angular/fire/auth-guard";
import {LOCALE} from "../app/shared/constants"
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { environment } from "../environments/environment";
import { SharedModule } from './shared/shared.module';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/locale/", ".json");
}
@NgModule({
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: LOCALE,
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAuthGuardModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    WelcomeComponent,
    SigninComponent,
    SignupComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
