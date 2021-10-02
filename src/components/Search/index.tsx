import { Input } from '@chakra-ui/react'
import React from 'react'
import { Search as SearchIcon } from 'react-feather'
import { classNames } from '../../functions'

export default function Search({
  term,
  search,
  className,
  inputProps,
  ...rest
}: {
  term: string
  search: (value: string) => void
  inputProps?: any
  className?: string
}) {
  return (
    <div className="flex justify-end w-full py-5 md:py-0">
      <div className={classNames('flex justify-end relative w-full max-w-md', className)} {...rest}>
        <Input
          roundedLeft={12}
          roundedRight={12}
          h={44.01}
          bg="#fff"
          onChange={(e) => search(e.target.value)}
          value={term}
          placeholder="Search by name, symbol, address"
          border="1px solid rgba(28, 29, 33, 0.2)"
          boxShadow="0px 12px 54px rgba(46, 46, 46, 0.1)"
          _focus={{}}
          {...inputProps}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
          <SearchIcon size={16} />
        </div>
      </div>
    </div>
  )
}
