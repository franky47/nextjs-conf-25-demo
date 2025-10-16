import type { ComponentProps } from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from './input-group'
import { Spinner } from './spinner'

type SearchInputProps = ComponentProps<'input'> & {
  isLoading?: boolean
}

export function SearchInput({
  isLoading = false,
  ...props
}: SearchInputProps) {
  return (
    <InputGroup className="py-5">
      <InputGroupInput {...props} />
      <InputGroupAddon align="inline-end">
        {isLoading && <Spinner />}
      </InputGroupAddon>
    </InputGroup>
  )
}
