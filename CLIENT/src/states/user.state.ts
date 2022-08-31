import { User } from "src/models/user";

export interface registerUserState {
    isLoading: boolean;
    isSuccess: boolean;
    user: User;
    error: string;
}