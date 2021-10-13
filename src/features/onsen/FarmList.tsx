import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useInfiniteScroll } from './hooks'
import Dots from '../../components/Dots'
import NotFoundItem from '../../components/NotFoundItem'
import FarmListItem from './FarmListItem'
import React from 'react'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import useSortableData from '../../hooks/useSortableData'
import { Text, Box } from '@chakra-ui/react'
// import '../../styles/index.css'
const FarmList = ({ farms, term }) => {
  const { items, requestSort, sortConfig } = useSortableData(farms)
  const { i18n } = useLingui()
  const [numDisplayed, setNumDisplayed] = useInfiniteScroll(items)
  return items ? (
    <>
      {term.length ? (
        <Text color="#1c1d2199" className="w-full my-6 text-base font-semibold text-left">
          Search result for <span className="text-privi-dark">&quot;{term}&quot;</span>
        </Text>
      ) : (
        ''
      )}
      {items.length ? (
        <>
          <Box className="grid grid-cols-4 text-sm font-medium text-privi-dark">
            <div
              className="flex items-center col-span-2 px-4 cursor-pointer md:col-span-1"
              onClick={() => requestSort('symbol')}
            >
              <div>{i18n._(t`Pool`)}</div>
              {sortConfig &&
                sortConfig.key === 'symbol' &&
                ((sortConfig.direction === 'ascending' && <ChevronUpIcon width={12} height={12} />) ||
                  (sortConfig.direction === 'descending' && <ChevronDownIcon width={12} height={12} />))}
            </div>
            <div className="flex items-center px-4 cursor-pointer" onClick={() => requestSort('tvl')}>
              {i18n._(t`TVL`)}
              {sortConfig &&
                sortConfig.key === 'tvl' &&
                ((sortConfig.direction === 'ascending' && <ChevronUpIcon width={12} height={12} />) ||
                  (sortConfig.direction === 'descending' && <ChevronDownIcon width={12} height={12} />))}
            </div>
            <div className="items-center justify-start hidden px-4 md:flex">{i18n._(t`Rewards`)}</div>
            <div
              className="flex items-center justify-end px-4 cursor-pointer"
              onClick={() => requestSort('roiPerYear')}
            >
              {i18n._(t`APR`)}
              {sortConfig &&
                sortConfig.key === 'roiPerYear' &&
                ((sortConfig.direction === 'ascending' && <ChevronUpIcon width={12} height={12} />) ||
                  (sortConfig.direction === 'descending' && <ChevronDownIcon width={12} height={12} />))}
            </div>
          </Box>
          {/* <InfiniteScroll
            dataLength={numDisplayed}
            next={() => setNumDisplayed(numDisplayed + 5)}
            hasMore={true}
            loader={null}
          > */}

          <Box
            h="70vh"
            overflow="auto"
            className="space-y-4"
            css={{
              '::-webkit-scrollbar': {
                width: 6,
              },
            }}
          >
            {items.map((farm, index) => (
              <FarmListItem key={index} farm={farm} />
            ))}
          </Box>
          {/* </InfiniteScroll> */}
        </>
      ) : (
        <div className="flex h-full place-items-center">
          <NotFoundItem title="no farm" />
        </div>
      )}
    </>
  ) : (
    <div className="w-full py-6 text-center">{term ? <span>No Results.</span> : <Dots>Loading</Dots>}</div>
  )
}

export default FarmList
