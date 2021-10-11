import React, { useEffect, useState } from 'react'
import { Flex, Heading, Text, Divider, Box, Badge } from '@chakra-ui/react'
import Image from 'next/image'
import { addMinutes, format } from 'date-fns'

function MisoInfo({
  name = 'Bad Trip',
  symbol = '$LSD',
  auctionType = 'Batch Auction',
  minRaised = 1380,
  minRaisedUsd = 11040,
  tokenForSale = 20,
  auctionEndDate = 1627044000000,
}: {
  name?: any
  symbol?: any
  auctionType?: any
  minRaised?: any
  minRaisedUsd?: any
  tokenForSale?: any
  auctionEndDate?: any
}) {
  const [remainingTime, setRemainingTime] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime()
      // Set the date counting down to
      const countDownDate = new Date(auctionEndDate).getTime()
      // Find the distance between now and the count down time
      const distance = countDownDate - now
      // If the count down is finished, write some text
      if (distance < 0) {
        setRemainingTime('')
        clearInterval(intervalId)
        return
      }
      // Time calculations for days, hours, minutes and seconds

      const SECONDS = 1000
      const MINUTES = SECONDS * 60
      const HOURS = MINUTES * 60
      const DAYS = HOURS * 24

      const days = Math.floor(distance / DAYS)
      const hours = Math.floor((distance % DAYS) / HOURS)
      const minutes = Math.floor((distance % HOURS) / MINUTES)
      const seconds = Math.floor((distance % MINUTES) / SECONDS)

      // Update display days, hours, minutes and seconds
      const displaySeconds = seconds < 10 ? '0' + seconds : seconds
      const displayMinutes = minutes < 10 ? '0' + minutes : minutes
      const displayHours = hours < 10 ? '0' + hours : hours
      const displayDays = days < 10 ? '0' + days : days

      let remainingTime = ''
      if (days > 0) remainingTime += displayDays + 'd '
      if (remainingTime || hours > 0) remainingTime += displayHours + 'h '
      if (remainingTime || minutes > 0) remainingTime += displayMinutes + 'm '
      if (remainingTime || seconds > 0) remainingTime += displaySeconds + 's '
      setRemainingTime(remainingTime + ' Left')
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [auctionEndDate])

  const formatHours = (date) => {
    return format(addMinutes(date, date.getTimezoneOffset()), 'h:mm')
  }

  const formatDate = (date) => {
    return format(addMinutes(date, date.getTimezoneOffset()), 'MMMM, dd yyyy')
  }

  return (
    <Box className="flex flex-col xl:w-160">
      {/* Name and Symbol */}
      <div className="flex flex-row items-end mt-6">
        <Image src="/images/miso/trident/trident-auction-icon.png" width={103.25} height={103.25} />
        <div className="flex flex-col items-center flex-1 mx-6">
          <div>
            <Text textAlign={['center', 'left', 'left']} className="text-privi-dark text-opacity-80">
              {'Trident NFT'}
            </Text>
            <Text lineHeight="80px" className="font-semibold text-privi-dark text-4xl sm:text-6xl">
              {name}
            </Text>
          </div>
        </div>
        <Badge
          fontWeight="500"
          color="#EB3CA2"
          bg="#eb3ca214"
          colorScheme="green"
          fontSize="14px"
          textTransform="capitalize"
          py="9px"
          px="24px"
          mt="1px"
        >
          {symbol}
        </Badge>
      </div>

      {/* Type, rasied, for sale */}
      <Box className="mt-12 divide-x divide-white divide-opacity-50">
        <Flex w="100%" justify="space-between" fontSize="md" color="#000" lineHeight="20px">
          <Box>
            <Text as="h5" fontWeight="500" mb="12px">
              Auction Type
            </Text>
            <Text color="#EB3CA2">{auctionType}</Text>
            <Text mt="4px" color="red">
              <Image
                className="text-privi-dark"
                src="/images/miso/trident/trident_auction_type2.svg"
                width={25}
                height={25}
              />
            </Text>
          </Box>
          <Divider orientation="vertical" h="41px" borderColor="#1c1d2133" />
          <Box>
            <Text as="h5" fontWeight="500" mb="12px">
              MIN Raised
            </Text>
            <Text color="#EB3CA2">{`${minRaised} $SUSHI`}</Text>
            <Text mt="4px" color="#1c1d2199">
              {`$${minRaisedUsd} USD`}
            </Text>
          </Box>
          <Divider orientation="vertical" h="41px" borderColor="#1c1d2133" />
          <Box>
            <Text as="h5" fontWeight="500" mb="12px">
              Token For Sale
            </Text>
            <Text color="#EB3CA2">{tokenForSale}</Text>
            <Text mt="4px" color="#1c1d2199">
              {symbol}
            </Text>
          </Box>
          <Divider orientation="vertical" h="41px" borderColor="#1c1d2133" />
          <Box>
            <Text as="h5" fontWeight="500" mb="12px">
              Ends On
            </Text>
            <Text color="#EB3CA2">{formatDate(new Date(auctionEndDate))}</Text>
            <Text mt="4px" color="#1c1d2199">
              {formatHours(new Date(auctionEndDate))} GMT
            </Text>
          </Box>
        </Flex>
      </Box>
      {/* <div className="flex flex-row mt-6">
        <div className="flex flex-col">
          <div className="text-sm sm:text-lg">{'Auction ends on'}</div>
          <div className="text-base font-bold text-white md:text-xl">{formatDate(new Date(auctionEndDate))} GMT</div>
          {remainingTime != '' && (
            <div className="flex flex-row items-center text-base">
              <Image src="/images/miso/trident/trident_timer.png" width={15} height={15} />
              <div className="ml-2 text-sm sm:text-lg">{remainingTime}</div>
            </div>
          )}
        </div>
        <div className="ml-5 cursor-pointer md:ml-8">
          <a
            href="https://miso.sushi.com/auctions/0x15c5E87Ce788F0dEBcAF70cF1dde69E3Bc3E6Ad1"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src="/images/miso/trident/trident_view_auction.svg" width={91} height={88} />
          </a>
        </div>
      </div> */}
      <Box maxW={['100%', '90%', '476px']} className="mt-12">
        <Heading as="h5" size="lg" className="font-semibold text-xs lg:text-base">
          About
        </Heading>
        <Text color="#00000099" className="text-sm mt-2.5">
          The Trident NFT is introduced as a celebratory piece for the announcement and upcoming release of Sushi’s
          Trident AMM. This NFT can be redeemed for a 19cm x 19cm 900 tab piece of blotter paper with this Chewy Stoll
          artwork on the left printed on it.
        </Text>
      </Box>
      {/* <div className="flex flex-col mt-6">
        <div>About</div>
        <div>
          The Trident NFT is introduced as a celebratory piece for the announcement and upcoming release of Sushi’s
          Trident AMM. This NFT can be redeemed for a 19cm x 19cm 900 tab piece of blotter paper with this Chewy Stoll
          artwork on the left printed on it.
        </div>
      </div> */}
    </Box>
  )
}

export default MisoInfo
