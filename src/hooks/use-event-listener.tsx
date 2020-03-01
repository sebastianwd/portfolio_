import { useEffect, useRef } from 'react'

const windowElement = () => {
  return (typeof window !== 'undefined' && window) || undefined
}

const useEventListener = (
  eventName: string,
  handler: (event: any) => void,
  element: HTMLElement | Window | undefined = windowElement()
) => {
  const savedHandler = useRef<(event: any) => void>()

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener

      if (!isSupported) {
        return undefined
      }

      // Create event listener that calls handler function stored in ref
      const eventListener = (event: any) => {
        if (typeof savedHandler.current !== 'undefined') {
          savedHandler.current(event)
        }
      }

      if (typeof element !== 'undefined') {
        element.addEventListener(eventName, eventListener)
      }

      return () => {
        if (typeof element !== 'undefined') {
          element.removeEventListener(eventName, eventListener)
        }
      }
    },
    [eventName, element] // Re-run if eventName or element changes
  )
}

export default useEventListener
