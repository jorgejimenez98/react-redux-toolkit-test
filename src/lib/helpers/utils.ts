class Helper {
  isClientSide(): boolean {
    return typeof window !== "undefined"
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  }

  substring(quantity: number, text?: string): string {
    if (!text) return ""
    if (text.length < quantity) return text
    return `${text.substring(0, quantity)}...`
  }
}

const helper = new Helper()

export default helper