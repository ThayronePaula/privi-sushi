import { ChainId, Currency, Token, currencyEquals } from '@sushiswap/sdk'

import { AutoColumn } from '../../components/Column'
import { AutoRow } from '../../components/Row'
import Button from '../../components/Button'
import { COMMON_BASES } from '../../config/routing'
import CurrencyLogo from '../../components/CurrencyLogo'
import QuestionHelper from '../../components/QuestionHelper'
import React from 'react'
import Typography from '../../components/Typography'
import { currencyId } from '../../functions'

export default function CommonBases({
  chainId,
  onSelect,
  selectedCurrency,
}: {
  chainId?: number
  selectedCurrency?: Currency | null
  onSelect: (currency: Currency) => void
}) {
  const bases = typeof chainId !== 'undefined' ? COMMON_BASES[chainId] ?? [] : []
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-row flex-wrap w-full">
        {bases.map((currency: Currency) => {
          const isSelected = selectedCurrency?.equals(currency)
          return (
            <Button
              variant="swap"
              type="button"
              size="custom"
              onClick={() => !isSelected && onSelect(currency)}
              disabled={isSelected}
              key={currencyId(currency)}
              className="flex items-center p-2 m-1 space-x-2 rounded bg-privi-dark hover:bg-privi-pink disabled:bg-privi-pink disabled:cursor-not-allowed"
            >
              <CurrencyLogo currency={currency} />
              <Typography variant="sm" className="font-semibold">
                {currency.symbol}
              </Typography>
            </Button>
          )
        })}
      </div>
      <div>
        <Typography variant="sm" className="m-2 text-lg font-semibold text-privi-dark">
          Trending
        </Typography>
      </div>
    </div>
  )
}
