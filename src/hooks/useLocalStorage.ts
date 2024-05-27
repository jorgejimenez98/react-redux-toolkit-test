import { useState } from "react"

import { helper } from "@/lib/helpers"

export const useLocalStorage = <T>(key: string, initialValue?: T) => {
  // Read Data from LocalStorage
  const readValue = (): T | undefined => {
    if (helper.isClientSide()) {
      return initialValue
    }

    try {
      const item = localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error)
      return initialValue
    }
  }

  // Current Data
  const [storedValue, setStoredValue] = useState<T | undefined>(readValue)

  // Set value to LocalStorage
  const setValue = (value: T | undefined) => {
    try {
      const valueToStore = value
      setStoredValue(valueToStore)

      if (helper.isClientSide()) {
        if (valueToStore === undefined) {
          localStorage.removeItem(key)
        } else {
          localStorage.setItem(key, JSON.stringify(valueToStore))
        }
      }
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error)
    }
  }

  return {
    value: storedValue,
    setValue
  }
}
