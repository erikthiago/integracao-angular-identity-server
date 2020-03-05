export const environment = {
  production: true,
  api: 'http://localhost:52173/api/',
  auth: {
    issuer: 'http://localhost:5000',
    clientId: 'angularoidc',
    postLogoutRedirectUri: 'http://localhost:4200/',
    redirectUri: window.location.origin + "/#/login-callback?",
    scope:"openid profile email",
    oidc: true
  }
};
