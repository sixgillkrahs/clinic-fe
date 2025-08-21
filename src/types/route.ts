import type { FC, JSX, LazyExoticComponent, ReactNode } from 'react'

export interface Route extends ChildRoute {
  layout: FC<{ children: ReactNode }>
}

export interface ChildRoute {
  key: string
  path: string
  label?: string
  redirectTo?: string
  meta?: Record<string, unknown>
  component: LazyExoticComponent<() => JSX.Element>
  children?: ChildRoute[]
  icon?: ReactNode
  permission?: string
  role?: string
  hiddenMenu?: boolean
  hiddenRoute?: boolean
}
