import { IUserInfo } from './IUserInfo';
export interface IIdentity{
    isAuthenticated: boolean,
    userInfo: IUserInfo
}