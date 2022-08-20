export interface User {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    dob: string,
    photoURL: string,
    gender: string,
    description: string,
    uid: string,
    website: string,
    posts: Array<any> //Post
}