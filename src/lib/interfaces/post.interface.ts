export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

export interface UserPosts {
    userId: number;
    posts: Post[];
}

export interface PostSliceState {
    posts: Post[]
}