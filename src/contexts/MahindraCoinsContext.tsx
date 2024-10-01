import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

interface MahindraCoinsContextProps {
    wallet: number
    setWallet: Dispatch<SetStateAction<number>>
}

export const MahindraCoinsContext = createContext({} as MahindraCoinsContextProps)

export const MahindraCoinsProvider = ({ children }: { children: ReactNode }) => {

    const [wallet, setWallet] = useState(1400)

    return (
        <MahindraCoinsContext.Provider value={{
            wallet,
            setWallet
        }}>
            {children}
        </MahindraCoinsContext.Provider>
    )
}


