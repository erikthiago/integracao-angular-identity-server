import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCallbackComponent } from './base/auth/login-callback.componenet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockUIModule } from 'ng-block-ui';
import { BlockUIHttpModule } from 'ng-block-ui/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './app.interceptor';
import { AuthGuard } from './base/auth/auth.guard';
import { HomeComponent } from './base/components/home/home.component';
import { MaterialComponentsModule } from './base/helpers/material.components.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HomeUnlockedComponent } from './base/components/home-unlocked/home-unlocked.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginCallbackComponent,
    HomeComponent,
    HomeUnlockedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BlockUIModule.forRoot({
      message: ''
    }),
    BlockUIHttpModule.forRoot(),
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:52173/'],
        sendAccessToken: true
    }
    }),
    HttpClientModule,
    MaterialComponentsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
