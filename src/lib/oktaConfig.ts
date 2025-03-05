export const oktaConfig = {
    clientId: '0oan5xp9aiQRW8LIg5d7',
    issuer: 'https://dev-22989381.okta.com/oauth2/default',
    redirectUri: 'https://localhost:5173/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}