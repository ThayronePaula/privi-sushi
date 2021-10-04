import { Box, Input } from '@chakra-ui/react'
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
    <Box className="flex justify-end w-full py-5 md:py-0">
      <Box maxW="322px" className={classNames('flex justify-end relative w-full max-w-md', className)} {...rest}>
        <Input
          w="322px"
          roundedLeft={12}
          roundedRight={12}
          h={44.01}
          pl="52px"
          bg="#fff"
          onChange={(e) => search(e.target.value)}
          value={term}
          placeholder="Search by name, symbol, address"
          border="1px solid rgba(28, 29, 33, 0.2)"
          boxShadow="0px 12px 54px rgba(46, 46, 46, 0.1)"
          _focus={{}}
          {...inputProps}
        />
        <Box className="absolute inset-y-0 left-0 flex items-center px-4 pointer-events-none">
          <SearchIcon size={16} />
        </Box>
      </Box>
    </Box>
  )
}
