import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { SignupComponent } from "./signup/signup.component";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { WelcomeComponent } from "./welcome/welcome.component";
import { SigninComponent } from "./signin/signin.component";
import { HomeComponent } from "./home/home.component";
import { AngularFireAuthGuardModule } from "@angular/fire/auth-guard";
import { FooterComponent } from "./footer/footer.component";
import { SharedModule } from "./shared/shared.module";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import {LOCALE} from "../app/shared/constants"
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/locale/", ".json");
}
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    WelcomeComponent,
    SigninComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
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
    AngularFireAuthGuardModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
