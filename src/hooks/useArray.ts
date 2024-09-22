import { useState } from "react"

export function useArray<T>(initialValue: T[] = []) {
  const [array, setArray] = useState(initialValue)

  const add = (item: T) => setArray(prev => [...prev, item])
  const remove = (index: number) => setArray(prev => prev.filter((_, i) => i !== index))
  const clear = () => setArray([])

  return { array, add, remove, clear }
}
