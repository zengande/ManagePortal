import { storeService } from '../services/storage.service';
import { IIdentity } from '../@types/IIdentity';
import { IUserInfo } from 'src/@types/IUserInfo';

const getInitialState = (): IIdentity => {
    const defaultUser: IIdentity = {
        isAuthenticated: false,
        userInfo: {
            id: null,
            username: null,
            nickname: null
        }
    }
    const userInfo: IUserInfo = storeService.retrieve("UserData", null);
    const isAuthenticated: boolean = storeService.retrieve('IsAuthorized', false);
    const result = {
        ...defaultUser,
        isAuthenticated: (isAuthenticated && userInfo != null),
        userInfo: { ...userInfo }
    };
    console.log(result);
    return result;
}

const initialState: IIdentity = getInitialState();

export default {
    namespace: 'identity',
    state: {
        ...initialState
    },
    reducers: {
        'login'(state: IIdentity, { payload }: { payload: any }) {
            return {
                ...state,
                isAuthenticated: true,
                userInfo: { ...payload.userInfo }
            }
        }
    }
}