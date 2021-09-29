import { Flex, Text } from '@chakra-ui/react'

const NotFoundToken = () => {
  return (
    <Flex
      w={["100%","576px" ]}
      direction="column"
      justify="center"
      align="center"
      mt="91px"
    >
      <svg
        width="220"
        height="102"
        viewBox="0 0 220 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="9.07504"
          cy="51.4222"
          r="8.82456"
          fill="#E9EDF2"
          stroke="#AAB0C2"
          strokeWidth="0.5"
        />
        <rect
          x="3.78174"
          y="6.04956"
          width="160.317"
          height="18.1491"
          rx="7.75463"
          fill="#E9EDF2"
        />
        <rect
          x="58.9849"
          y="42.3477"
          width="160.317"
          height="18.1491"
          rx="7.75463"
          fill="#E9EDF2"
        />
        <rect
          x="28.7363"
          y="79.4021"
          width="110.407"
          height="18.1491"
          rx="7.75463"
          fill="#E9EDF2"
        />
        <rect
          x="4.38122"
          y="22.4446"
          width="97.3077"
          height="64.0343"
          rx="4.66975"
          transform="rotate(-12.9733 4.38122 22.4446)"
          fill="#FBFCFE"
          stroke="#AAB0C2"
        />
        <rect
          x="55.7041"
          y="36.7979"
          width="97.3077"
          height="64.0343"
          rx="4.66975"
          fill="#FBFCFE"
          stroke="#AAB0C2"
        />
        <path
          d="M57.4727 53.6909H93.0147M96.4176 53.6909H105.114M108.517 53.6909H143.303M150.865 67.3028H125.91M117.213 67.3028H74.1093"
          stroke="#AAB0C2"
          strokeLinecap="round"
        />
        <circle
          cx="173.173"
          cy="88.4767"
          r="8.82456"
          fill="#E9EDF2"
          stroke="#AAB0C2"
          strokeWidth="0.5"
        />
        <circle cx="191.323" cy="15.1241" r="9.07456" fill="#E9EDF2" />
      </svg>
      <Text fontWeight="600" textAlign="center" color="#1C1D21" fontSize="16px" mt="24px" mb="16px">
        Beep-boop, zero token found
      </Text>
      <Text textAlign="center" color="rgba(28, 29, 33, 0.4)" fontSize="14px" >You can try other keyword for your search</Text>
    </Flex>
  )
}
export default NotFoundToken
