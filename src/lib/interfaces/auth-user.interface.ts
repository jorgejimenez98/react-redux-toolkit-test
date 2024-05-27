export interface AuthUser {
    email: string
}

export interface LoginPayload {
    email: string
    password: string
}

export interface AuthSliceState {
    user: AuthUser | null
}