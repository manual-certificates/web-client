/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ITokenContractInterface extends utils.Interface {
  functions: {
    "__TokenContract_init(string,string,string)": FunctionFragment;
    "baseURI()": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "mint(address,string)": FunctionFragment;
    "mintBatch(address[],string[])": FunctionFragment;
    "nextTokenId()": FunctionFragment;
    "setBaseURI(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "__TokenContract_init"
      | "__TokenContract_init(string,string,string)"
      | "baseURI"
      | "baseURI()"
      | "burn"
      | "burn(uint256)"
      | "mint"
      | "mint(address,string)"
      | "mintBatch"
      | "mintBatch(address[],string[])"
      | "nextTokenId"
      | "nextTokenId()"
      | "setBaseURI"
      | "setBaseURI(string)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "__TokenContract_init",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "__TokenContract_init(string,string,string)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
  encodeFunctionData(functionFragment: "baseURI()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "burn(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "mint(address,string)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "mintBatch",
    values: [PromiseOrValue<string>[], PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "mintBatch(address[],string[])",
    values: [PromiseOrValue<string>[], PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "nextTokenId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextTokenId()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBaseURI",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setBaseURI(string)",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "__TokenContract_init",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "__TokenContract_init(string,string,string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseURI()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "burn(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mint(address,string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintBatch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintBatch(address[],string[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextTokenId()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBaseURI(string)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ITokenContract extends BaseContract {
  contractName: "ITokenContract";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITokenContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    __TokenContract_init(
      tokenName_: PromiseOrValue<string>,
      tokenSymbol_: PromiseOrValue<string>,
      baseURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "__TokenContract_init(string,string,string)"(
      tokenName_: PromiseOrValue<string>,
      tokenSymbol_: PromiseOrValue<string>,
      baseURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    baseURI(overrides?: CallOverrides): Promise<[string]>;

    "baseURI()"(overrides?: CallOverrides): Promise<[string]>;

    burn(
      tokenId_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "burn(uint256)"(
      tokenId_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mint(
      to_: PromiseOrValue<string>,
      tokenURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "mint(address,string)"(
      to_: PromiseOrValue<string>,
      tokenURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mintBatch(
      to_: PromiseOrValue<string>[],
      tokenURIs_: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "mintBatch(address[],string[])"(
      to_: PromiseOrValue<string>[],
      tokenURIs_: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nextTokenId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "nextTokenId()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    setBaseURI(
      baseURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setBaseURI(string)"(
      baseURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  __TokenContract_init(
    tokenName_: PromiseOrValue<string>,
    tokenSymbol_: PromiseOrValue<string>,
    baseURI_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "__TokenContract_init(string,string,string)"(
    tokenName_: PromiseOrValue<string>,
    tokenSymbol_: PromiseOrValue<string>,
    baseURI_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  baseURI(overrides?: CallOverrides): Promise<string>;

  "baseURI()"(overrides?: CallOverrides): Promise<string>;

  burn(
    tokenId_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "burn(uint256)"(
    tokenId_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mint(
    to_: PromiseOrValue<string>,
    tokenURI_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "mint(address,string)"(
    to_: PromiseOrValue<string>,
    tokenURI_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mintBatch(
    to_: PromiseOrValue<string>[],
    tokenURIs_: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "mintBatch(address[],string[])"(
    to_: PromiseOrValue<string>[],
    tokenURIs_: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nextTokenId(overrides?: CallOverrides): Promise<BigNumber>;

  "nextTokenId()"(overrides?: CallOverrides): Promise<BigNumber>;

  setBaseURI(
    baseURI_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setBaseURI(string)"(
    baseURI_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    __TokenContract_init(
      tokenName_: PromiseOrValue<string>,
      tokenSymbol_: PromiseOrValue<string>,
      baseURI_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "__TokenContract_init(string,string,string)"(
      tokenName_: PromiseOrValue<string>,
      tokenSymbol_: PromiseOrValue<string>,
      baseURI_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    baseURI(overrides?: CallOverrides): Promise<string>;

    "baseURI()"(overrides?: CallOverrides): Promise<string>;

    burn(
      tokenId_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "burn(uint256)"(
      tokenId_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    mint(
      to_: PromiseOrValue<string>,
      tokenURI_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "mint(address,string)"(
      to_: PromiseOrValue<string>,
      tokenURI_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintBatch(
      to_: PromiseOrValue<string>[],
      tokenURIs_: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "mintBatch(address[],string[])"(
      to_: PromiseOrValue<string>[],
      tokenURIs_: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    nextTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    "nextTokenId()"(overrides?: CallOverrides): Promise<BigNumber>;

    setBaseURI(
      baseURI_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setBaseURI(string)"(
      baseURI_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    __TokenContract_init(
      tokenName_: PromiseOrValue<string>,
      tokenSymbol_: PromiseOrValue<string>,
      baseURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "__TokenContract_init(string,string,string)"(
      tokenName_: PromiseOrValue<string>,
      tokenSymbol_: PromiseOrValue<string>,
      baseURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    baseURI(overrides?: CallOverrides): Promise<BigNumber>;

    "baseURI()"(overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      tokenId_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "burn(uint256)"(
      tokenId_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mint(
      to_: PromiseOrValue<string>,
      tokenURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "mint(address,string)"(
      to_: PromiseOrValue<string>,
      tokenURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mintBatch(
      to_: PromiseOrValue<string>[],
      tokenURIs_: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "mintBatch(address[],string[])"(
      to_: PromiseOrValue<string>[],
      tokenURIs_: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nextTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    "nextTokenId()"(overrides?: CallOverrides): Promise<BigNumber>;

    setBaseURI(
      baseURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setBaseURI(string)"(
      baseURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    __TokenContract_init(
      tokenName_: PromiseOrValue<string>,
      tokenSymbol_: PromiseOrValue<string>,
      baseURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "__TokenContract_init(string,string,string)"(
      tokenName_: PromiseOrValue<string>,
      tokenSymbol_: PromiseOrValue<string>,
      baseURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    baseURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "baseURI()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(
      tokenId_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "burn(uint256)"(
      tokenId_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mint(
      to_: PromiseOrValue<string>,
      tokenURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "mint(address,string)"(
      to_: PromiseOrValue<string>,
      tokenURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mintBatch(
      to_: PromiseOrValue<string>[],
      tokenURIs_: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "mintBatch(address[],string[])"(
      to_: PromiseOrValue<string>[],
      tokenURIs_: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nextTokenId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nextTokenId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setBaseURI(
      baseURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setBaseURI(string)"(
      baseURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}