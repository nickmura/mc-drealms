'use client'

import Image from "next/image";
import Link from "next/link";
import {
    ConnectButton,
    useAccount,
    useConnectKit,
} from "@particle-network/connect-react-ui";

export default function Header() {
    return (
        <header
            className="
                flex items-center justify-between bg-white
                shadow-sm px-5 h-24"
        >
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="drealms Logo"
                    height={70}
                    width={70}
                    quality={100}
                />
            </Link>

            <ConnectButton.Custom>
                {({ openConnectModal }) => {
                    const handleConnect = async () => {
                        openConnectModal!();
                    };
                    return (
                        <div>
                            <button
                                onClick={handleConnect}
                                className="flex h-full items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-bold text-black transition hover:scale-105"
                                type="button"
                                id="connect-wallet"
                            >
                                Sign In
                            </button>
                        </div>
                    );
                }}
            </ConnectButton.Custom>
        </header>
    )
}