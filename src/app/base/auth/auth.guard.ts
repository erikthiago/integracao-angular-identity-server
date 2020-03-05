import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { OAuthService } from "angular-oauth2-oidc";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private oauthService: OAuthService) { }

    canActivate() {
        if (this.oauthService.hasValidIdToken() || this.oauthService.hasValidAccessToken()) {
            return true;
        }

        this.oauthService.initImplicitFlow();
    }

}