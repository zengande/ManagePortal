import router from "umi/router";

const OidcConfig = {
    authority: "http://localhost:5000",
    client_id: "js",
    redirect_uri: "http://localhost:5003/callback.html",
    response_type: "id_token token",
    scope: "openid profile api1",
    post_logout_redirect_uri: "http://localhost:5003/index.html",
};

class AuthorizeService {
    constructor() {
        this.IsAuthorized = false;
    }

    public IsAuthorized: boolean;
    public UserData: any;

    public GetToken(): any {
        var token = '';
        return token;
    }

    public Authorize() {
        let authorizationUrl = OidcConfig.authority + '/connect/authorize';
        let client_id = 'js';
        let redirect_uri = location.origin + '/';
        let response_type = 'id_token token';
        let scope = 'openid profile';
        let nonce = 'N' + Math.random() + '' + Date.now();
        let state = Date.now() + '' + Math.random();

        // this.storage.store('authStateControl', state);
        // this.storage.store('authNonce', nonce);

        let url =
            authorizationUrl + '?' +
            'response_type=' + encodeURI(response_type) + '&' +
            'client_id=' + encodeURI(client_id) + '&' +
            'redirect_uri=' + encodeURI(redirect_uri) + '&' +
            'scope=' + encodeURI(scope) + '&' +
            'nonce=' + encodeURI(nonce) + '&' +
            'state=' + encodeURI(state);

        window.location.href = url;
    }
}

export default AuthorizeService;