import { HTMLProps, ReactNode } from 'react'
import { CustomButton } from './styles'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children }: ButtonProps) {
  return <CustomButton>{children}</CustomButton>
}
