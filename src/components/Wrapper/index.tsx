'use client';

import { WalletEntryPosition } from "@particle-network/auth";
import { AuthCoreContextProvider } from "@particle-network/auth-core-modal";
import { ModalProvider } from "@particle-network/connect-react-ui";
import { Avalanche } from "@particle-network/chains";

export default function Wrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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
            </ModalProvider>
        </AuthCoreContextProvider>
    )
}