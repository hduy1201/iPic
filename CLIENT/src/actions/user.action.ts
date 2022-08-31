import { createAction, props } from "@ngrx/store";


export const registerUser = createAction(
    '[User] Register',
)

export const registerUserSuccess = createAction(
    '[User] Register Success',
)

export const registerUserFail = createAction(
    '[User] Register Fail',
    props<{ error: string }>()
)