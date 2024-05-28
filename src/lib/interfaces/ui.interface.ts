export interface UiState {
    confirmModal: UiConfirmModalPayload | null
}

interface UiToastPayload {
    visible: boolean
    title: string
    message: string
}

export interface UiConfirmModalPayload extends UiToastPayload {
    onAccept: () => void
}

export type UiConfirmModalData = Omit<UiConfirmModalPayload, "visible">