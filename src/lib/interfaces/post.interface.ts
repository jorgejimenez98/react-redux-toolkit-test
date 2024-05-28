export interface PostFormPayload {
    title: string
    body: string
}

export interface Post extends PostFormPayload {
    userId: number
    id: number
}

export interface UserPosts {
    userId: number;
    posts: Post[];
}

export interface PostSliceState {
    posts: Post[]
}