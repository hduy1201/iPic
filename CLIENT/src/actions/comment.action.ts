import { createAction, props } from "@ngrx/store";

export const comment = createAction(
    '[Comment] Comment',
    props<{ comment: string, postId: string }>()
)
export const commentSuccess = createAction(
    '[Comment] Comment Success'
)
export const commentFailure = createAction(
    '[Comment] Comment Failure',
    props<{ error: string }>()
)