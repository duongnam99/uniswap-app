import React, {useState, useEffect} from 'react'

export const TransactionContext  = React.createContext()

let eth 

if (typeof window !== 'undefined') { // prevent window undefined error
    eth = window.ethereum
}

export const TransactionProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        addressTo: '',
        amount: '',
    })

    useEffect(() => {
        checkIfWalletIsConnected()
    }, [])

    const connectWallet = async (metamask = eth) => {
        try {
            if (!metamask) return alert("You must install metamask first!!!")
            const accounts = await metamask.request({method: 'eth_requestAccounts'})
            setCurrentAccount(accounts[0])
        } catch (error) {
            console.error(error)
            throw new Error("No etherum object")
        }
    }
    
    const checkIfWalletIsConnected = async (metamask = eth) => {
        try {
            if (!metamask) return alert("You must install metamask first!!!")
            const accounts = await metamask.request({method: 'eth_accounts'})

            if (accounts.length) {
                setCurrentAccount(accounts[0])
                console.log("Wallet is already connected")
            }
        } catch (error) {
            console.error(error)
            throw new Error("No etherum object")
        }
    }

    const sendTransaction = async (
        metamask = eth,
        connectedAccount = currentAccount
    ) => {
        try {
            if (!metamask) return alert("Please install metamaks")
            const {addressTo, amount} = formData
            const transactionContract = getEthereumcontract()
            const parsedAmount = ethers.utils.parseEther(amount)

            await metamask.requrest({
                method: 'eth_sendTransaction',
                params: [
                    {
                        from: connectedAccount,
                        to: addressTo,
                        gas: 0x7E40, // 520000wei
                        value: parsedAmount._hex
                    },
                ],
            })

            const transactionHash = await transactionContract.publishTransaction(
                addressTo,
                parsedAmount,
                `Transfering ETH ${parsedAmount} to ${addressTo}`,
                'TRANSFER'
            )

            setIsLoading(true)

            await transactionHash.wait()
            
            // DB
            // await saveTransaction(
            //     transactionHash.hash,
            //     amount,
            //     connectedAccount,
            //     addressTo
            // )
            setIsLoading(false)

        } catch (error) {
            console.error(error)
        }
    }
    const handleChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name]: e.target.value}))
    }
    return (
        <TransactionContext.Provider
            value={{
                currentAccount,
                connectWallet,
                sendTransaction,
            }}
        >
            {children}
        </TransactionContext.Provider>
        
    )
}

export default TransactionProvider