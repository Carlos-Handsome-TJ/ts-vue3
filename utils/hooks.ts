// 封装常用hooks
interface IDebounce<T> {
  (...args: T[]): void | Promise<void>
}
export function useDebounce<T>(fn: IDebounce<T>, delay = 0) {
  let timer: NodeJS.Timeout = null
  return function (this: void, ...args: T[]) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this, ...args)()
    }, delay)
  }
}

interface IThrottle<T> {
  (...args: T[]): void | Promise<void>
}

export function useThrottle<T>(fn: IThrottle<T>, delay = 0) {
  let timer: NodeJS.Timeout | null = null
  return function (this: void, ...args: T[]) {
    if (timer) return
    timer = setTimeout(() => {
      fn.call(this, ...args)()
    }, delay)
  }
}
