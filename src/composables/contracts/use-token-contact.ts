import { computed, ref } from 'vue'
import { EthProviderRpcError, TokenContractV2__factory } from '@/types'
import { useWeb3ProvidersStore } from '@/store'
import { handleEthError } from '@/helpers'

export const useTokenContact = (address: string) => {
  const web3ProvidersStore = useWeb3ProvidersStore()
  const provider = computed(() => web3ProvidersStore.provider)

  const contractAddress = ref(address || '')

  const contractInterface = TokenContractV2__factory.createInterface()

  const init = (address: string) => {
    if (!address) return
    contractAddress.value = address
  }

  const mintBatch = async (addresses: string[], URIs: string[]) => {
    if (!provider.value) return
    try {
      const data = contractInterface.encodeFunctionData('mintBatch', [
        addresses,
        URIs,
      ])

      return await provider.value.signAndSendTx({
        to: contractAddress.value,
        data,
      })
    } catch (error) {
      handleEthError(error as EthProviderRpcError)
    }
  }

  return {
    init,
    mintBatch,
  }
}
