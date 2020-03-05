import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'integraca-angular-identity-server';

  constructor(private router: Router,
    private oAuthService: OAuthService) {
    this.configureWithNewConfigApi();
  }
  
  private async configureWithNewConfigApi() {
    this.oAuthService.configure(environment.auth);
    this.oAuthService.setStorage(localStorage);
    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();

    await this.oAuthService.loadDiscoveryDocumentAndTryLogin().then();
    if (this.oAuthService.hasValidIdToken() || this.oAuthService.hasValidAccessToken()) {
      this.router.navigate(["/"]);
    }
  }

}
