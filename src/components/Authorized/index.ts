const OidcConfig={
    authority: "http://localhost:5000",
    client_id: "js",
    redirect_uri: "http://localhost:5003/callback.html",
    response_type: "id_token token",
    scope:"openid profile api1",
    post_logout_redirect_uri : "http://localhost:5003/index.html",
};

export default OidcConfig;