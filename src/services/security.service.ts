import { storeService } from './storage.service';
import { IUserInfo } from '../@types/IUserInfo';

export class SecurityService {
    public IsAuthorized = false;
    public UserData: any;

    constructor() {
        if (storeService.retrieve('IsAuthorized') !== '') {
            this.IsAuthorized = storeService.retrieve('IsAuthorized', false);
            this.UserData = storeService.retrieve('UserData');
        }
    }

    public Authorize(username: string, password: string): boolean {
        this.ResetAuthorizationData();
        let result = false;
        // todo : send authorize request
        if (username === 'admin' && password === 'admin') {
            result = true;
        }

        storeService.store('authorizationData', "sdfsadgsd");
        storeService.store('IsAuthorized', result);

        return result;
    }

    public GetUserInfo(): IUserInfo | null {
        const token = storeService.retrieve("authorizationData", '');
        if (token && token !== '') {
            const userInfo: IUserInfo = {
                id: '100000',
                username: 'zengande',
                nickname: 'zeng ande'
            }
            storeService.store('UserData', userInfo);
            return userInfo;
        }
        this.ResetAuthorizationData();
        return null;
    }

    public GetToken(): any {
        return storeService.retrieve('authorizationData');
    }

    public ResetAuthorizationData(): void {
        storeService.store('authorizationData', '');
        storeService.store('authorizationDataIdToken', '');
        storeService.store('UserData', '');

        this.IsAuthorized = false;
        storeService.store('IsAuthorized', false);
    }

    public AuthorizedCallback(): void {
        console.log('call back');
    }
}

export const securityService = new SecurityService();