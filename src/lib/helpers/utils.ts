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
}

const helper = new Helper()

export default helper