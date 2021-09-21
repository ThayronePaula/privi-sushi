import {
  Flex,
  Spacer,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import React from "react";

interface ModalTemplateProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}

const ModalTemplate = ({
  title,
  isOpen,
  onClose,
  children,
}: ModalTemplateProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent p="32px 24px 24px 24px">
        <Flex justifyContent="space-between" alignItems="center" width="100%">
          <Heading fontSize="28px" fontWeight="600" color="#1C1D21">
            {title}
          </Heading>
          <Spacer/>
          <Button
            colorScheme="white"
            size="xs"
            onClick={onClose}
            _focus={{ bg: "none" }}
          >
            <AiOutlineCloseCircle size="1.5rem" color="#212121" />
          </Button>
        </Flex>
        {children}
      </ModalContent>
    </Modal>
  );
};
export default ModalTemplate;
