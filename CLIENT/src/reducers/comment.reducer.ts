import { createReducer, on } from "@ngrx/store";
import { createCommentState } from "src/states/comment.state";
import * as CommentAction from 'src/actions/comment.action';
const initCreateComment: createCommentState = {
    comment: "",
    error: "",
    isSuccess: false
}
export const createCommentReducer = createReducer(
    initCreateComment,
    on(CommentAction.comment, (state, action) => {
        return {
            ...state,
            comment: action.comment,
            error: "",
            isSuccess: false
        }
    }
    ),
    on(CommentAction.commentSuccess, (state) => {
        return {
            ...state,
            isSuccess: true,
            comment: "",
            error: ""
        }
    }
    ),
    on(CommentAction.commentFailure, (state, action) => {
        return {
            ...state,
            error: action.error,
            comment: "",
            isSuccess: false
        }
    })

)