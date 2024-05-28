export interface UiState {
    confirmModal: UiConfirmModalPayload | null
    toast: UiToastPayload | null
}

export interface UiToastPayload {
    visible: boolean
    title: string
    message: string
}

export interface UiConfirmModalPayload extends UiToastPayload {
    onAccept: () => void
}

export type UiConfirmModalData = Omit<UiConfirmModalPayload, "visible">