import {AsyncSubject, Observable, ReplaySubject} from "rxjs";
import { UserInfo } from "./user-info";

export class AuthServiceStub {

    constructor(private loggedin: boolean) {
    }

    login(email: string, password: string) {
    }

    currentUser(): Observable<UserInfo> {
        let userInfo = new UserInfo();
        userInfo.displayName = "my-display-name";
        userInfo.email = "my-email";
        userInfo.uid = "my-uid";
        userInfo.isAnonymous = false;
        userInfo.photoURL = "my-photo-url";
        userInfo.providerId = "my-provider-id";

        let replaySubject = new ReplaySubject();
        if (this.loggedin) {
            replaySubject.next(userInfo);
        }
        return replaySubject.asObservable();
    }

    isLoggedIn(): Observable<boolean> {
        let isLoggedInBS = new AsyncSubject<boolean>();
        isLoggedInBS.next(true);
        isLoggedInBS.complete();
        return isLoggedInBS.asObservable();
    }
}
