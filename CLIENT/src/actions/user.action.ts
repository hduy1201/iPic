import { createAction, props } from "@ngrx/store";

export const registerUser = createAction(
    '[User] Register',
    props<{
        email: string,
        firstName: string,
        lastName: string
    }>()
)

export const registerUserSuccess = createAction(
    '[User] Register Success',
    props<{
        message: string
    }>()
)

export const registerUserFail = createAction(
    '[User] Register Fail',
    props<{ error: string }>()
)

