// import  { ButtonProps } from "../Button";
import { Button } from "@chakra-ui/react";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";

import { Activity } from "react-feather";
import React from "react";
import { t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { useWalletModalToggle } from "../../state/application/hooks";

export type ButtonColor =
  | "blue"
  | "pink"
  | "gradient"
  | "gray"
  | "default"
  | "red"
  | "green";

export type ButtonSize = "xs" | "sm" | "lg" | "default" | "none";

export type ButtonVariant = "outlined" | "filled" | "empty" | "link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  ref?: React.Ref<HTMLButtonElement>;
}

export default function Web3Connect({
  color = "gray",
  size = "sm",
  className = "",
  ...rest
}: ButtonProps) {
  const { i18n } = useLingui();
  const toggleWalletModal = useWalletModalToggle();
  const { error } = useWeb3React();
  return error ? (
    <div
      className="flex items-center justify-center px-4 py-2 font-semibold text-white border rounded bg-opacity-80 border-red bg-red hover:bg-opacity-100"
      onClick={toggleWalletModal}
    >
      <div className="mr-1">
        <Activity className="w-4 h-4" />
      </div>
      {error instanceof UnsupportedChainIdError
        ? i18n._(t`You are on the wrong network`)
        : i18n._(t`Error`)}
    </div>
  ) : (
    <Button
      id="connect-wallet"
      onClick={toggleWalletModal}
      variant="outlined"
      color={color}
      className={className}
      size={size}
      {...rest}
    >
      {i18n._(t`Connect to a wallet`)}
    </Button>
  );
}
