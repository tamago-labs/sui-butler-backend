import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from "react"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../amplify/data/resource"

export const DatabaseContext = createContext({})

const client = generateClient<Schema>();

const Provider = ({ children }: any) => {

    const getProfile = async (emailAddress: string, walletAddress: string) => {

        const user = await client.models.User.list({
            filter: {
                emailAddress: {
                    eq: emailAddress
                },
                walletAddress: {
                    eq: walletAddress
                }
            }
        })

        if (user.data.length === 0) {
            const newUser = {
                emailAddress,
                walletAddress,
                pendingTransactions: []
            }
            const { data } = await client.models.User.create({
                ...newUser
            })  
            return data
        } else {
            return user.data[0]
        }
    }

    const databaseContext = useMemo(
        () => ({
            getProfile
        }), [

    ])

    return (
        <DatabaseContext.Provider value={databaseContext}>
            {children}
        </DatabaseContext.Provider>
    )
}

export default Provider