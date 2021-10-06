import { ChevronLeftIcon } from '@heroicons/react/outline'

import React, { FC } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Typography from '../Typography'

interface ModalHeaderProps {
  title?: string
  className?: string
  onClose?: () => void
  onBack?: () => void
}
import { Heading } from '@chakra-ui/react'
const ModalHeader: FC<ModalHeaderProps> = ({
  title = undefined,
  onClose = undefined,
  className = '',
  onBack = undefined,
}) => {
  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      {onBack && <ChevronLeftIcon onClick={onBack} width={24} height={24} className="cursor-pointer" />}
      {title && (
        <Heading as="h2" fontSize="28px" fontWeight="600" color="#1C1D21">
          {title}
        </Heading>
      )}
      <div
        className="flex items-center justify-center w-6 h-6 cursor-pointer text-primary hover:text-high-emphesis "
        onClick={onClose}
      >
        <AiOutlineCloseCircle size="1.5rem" color="#212121" />
      </div>
    </div>
  )
}

export default ModalHeader
