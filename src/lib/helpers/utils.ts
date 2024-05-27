class Helper {
  isClientSide(): boolean {
    return typeof window !== "undefined"
  }
}

const helper = new Helper()

export default helper