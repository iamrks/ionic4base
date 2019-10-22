export class API_ENDPOINT {
    public static data() : any {
        return {
            "login": {
                "url": "login/auth",
                "method": "POST"
            },
            userInfo: {
                url: '/users/home',
                method: 'GET'
            }
        }
    }
}