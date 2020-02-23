import { isObject } from 'lodash'

const useStorage = () => {
  const get = (key: string): any => {
    const item = localStorage.getItem(key)

    if (isObject(item)) {
      return JSON.parse(item)
    }

    return item
  }

  const set = (key: string, value: any): void => {
    if (isObject(value)) {
      localStorage.setItem(key, JSON.stringify(value))
    }

    localStorage.setItem(key, value)
  }

  const remove = (key: string): void => localStorage.removeItem(key)

  return {
    get,
    set,
    remove,
  }
}

export default useStorage
