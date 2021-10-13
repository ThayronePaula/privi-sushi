import { classNames, escapeRegExp } from '../../../functions'
import CurrencyLogo from '../../CurrencyLogo'

import React from 'react'

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group

const defaultClassName = 'w-0 p-0 text-2xl bg-transparent'

export const NumericImage = React.memo(
  ({
    currency,
    value,
    onUserInput,
    placeholder,
    className = defaultClassName,
    ...rest
  }: {
    currency: any
    value: string | number
    onUserInput: (input: string) => void
    error?: boolean
    fontSize?: string
    align?: 'right' | 'left'
  } & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) => {
    const enforcer = (nextUserInput: string) => {
      if (nextUserInput === '' || inputRegex.test(escapeRegExp(nextUserInput))) {
        onUserInput(nextUserInput)
      }
    }
    return (
      <label className="relative flex flex-col w-full">
        <input
          {...rest}
          value={value}
          onChange={(event) => {
            // replace commas with periods, because uniswap exclusively uses period as the decimal separator
            enforcer(event.target.value.replace(/,/g, '.'))
          }}
          // universal input options
          inputMode="decimal"
          title="Token Amount"
          autoComplete="off"
          autoCorrect="off"
          // text-specific options
          type="text"
          pattern="^[0-9]*[.,]?[0-9]*$"
          placeholder={placeholder || '0.0'}
          min={0}
          minLength={1}
          maxLength={79}
          spellCheck="false"
          className={classNames(
            'relative font-bold outline-none border-none flex-auto overflow-hidden overflow-ellipsis placeholder-privi-dark text-privi-dark text-opacity-60  placeholder-opacity-60',
            className
          )}
        />
        <div className="absolute bottom-0 left-3/4 font-medium text-base transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6">
          <h1>{currency ? currency.symbol : ' '}</h1>
        </div>
      </label>
    )
  }
)

NumericImage.displayName = 'NumericImage'

export default NumericImage

// const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group
