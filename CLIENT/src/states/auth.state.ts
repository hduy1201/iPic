export interface AuthState {
    isAuthenticated: boolean;
    idToken: string;
    error: string;
}

export interface AuthLogin {
    isLogin: boolean;
    error: string;
}