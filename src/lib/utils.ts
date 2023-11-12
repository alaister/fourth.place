import { useCallback, useState } from 'react'

export function first<T>(items: T | T[]): T {
  return Array.isArray(items) ? items[0] : items
}

export function useRefresh(refetch: () => Promise<any>) {
  const [isRefetching, setIsRefetching] = useState(false)

  const onRefresh = useCallback(() => {
    setIsRefetching(true)

    refetch().finally(() => {
      setIsRefetching(false)
    })
  }, [refetch])

  return [isRefetching, onRefresh] as const
}
