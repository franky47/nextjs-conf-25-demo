import type { ComponentProps } from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from './input-group'
import { Spinner } from './spinner'

type SearchInputProps = ComponentProps<'input'> & {
  spinner?: 'queued' | 'fetching'
}

export function SearchInput({
  spinner,
  ...props
}: SearchInputProps) {
  return (
    <InputGroup className="py-5">
      <InputGroupInput {...props} />
      <InputGroupAddon align="inline-end">
        {spinner === 'fetching' && (
          <Spinner className="text-orange-500" />
        )}
        {spinner === 'queued' && (
          <Spinner className="text-blue-500" />
        )}
      </InputGroupAddon>
    </InputGroup>
  )
}
