'use client';

import { useEffect, useState } from "react";

import { type ParticleNetwork, WalletEntryPosition } from "@particle-network/auth";
import { AuthCoreContextProvider } from "@particle-network/auth-core-modal";
import { ModalProvider } from "@particle-network/connect-react-ui";
import { evmWallets } from "@particle-network/connect";
import { Avalanche } from "@particle-network/chains";

import UserInfoSetter from "../Wallet/UserInfoSetter";
import Wallet from "@/lib/wallet";
import { useAccountStore } from "@/lib/states";

export default function Wrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const setAccount = useAccountStore(state => state.setUserInfo);
    const [particle, setParticle] = useState<ParticleNetwork | null>(null);

    useEffect(() => {
        const wallet = new Wallet();
        setParticle(wallet.particle);
    }, []);

    return (
        <AuthCoreContextProvider
            options={{
                projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
                clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY as string,
                appId: process.env.NEXT_PUBLIC_APP_ID as string,
            }}
        >
            <ModalProvider
                options={{
                    projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
                    clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY as string,
                    appId: process.env.NEXT_PUBLIC_APP_ID as string,
                    chains: [ Avalanche ],
                    particleWalletEntry: {
                        displayWalletEntry: true,
                        defaultWalletEntryPosition: WalletEntryPosition.BR,
                        supportChains: [ Avalanche ],
                        customStyle: {},
                    },
                    securityAccount: {
                        promptSettingWhenSign: 0,
                        promptMasterPasswordSettingWhenLogin: 0,
                    },
                    /*wallets: evmWallets({
                        projectId: "08e47732f28f0dcaf3411492b7c269ab", //replace with walletconnect projectId
                        showQrModal: false,
                    }),*/
                }}
                theme={"auto"}
                language={"en"}
                walletSort={["Particle Auth", "Wallet"]}
                particleAuthSort={[
                    "email",
                    "google",
                ]}
            >
                {children}
                <UserInfoSetter />
            </ModalProvider>
        </AuthCoreContextProvider>
    )
}