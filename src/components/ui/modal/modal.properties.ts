export interface ModalProps {
    visible: boolean
    title: string
    children: React.ReactNode
    size?: "xl" | "lg" | "md" | "sm";
    handleClose: () => void
}