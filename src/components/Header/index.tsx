'use client'

import { type ParticleNetwork } from "@particle-network/auth";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useAccountStore } from "@/lib/states";
import Wallet from "@/lib/wallet";
import Button from "../Button";

export default function Header() {

    const setAccount = useAccountStore(state => state.setUserInfo);
    const account = useAccountStore(state => state.userInfo)

    const [particle, setParticle] = useState<ParticleNetwork | null>(null);

    useEffect(() => {
        // Wallet instance
        const wallet = new Wallet();
        setParticle(wallet.particle);

        // Account
        const appStateLS = localStorage.getItem("user-info");
        if (appStateLS) setAccount(JSON.parse(appStateLS));
    }, []);

    const handleLogin = async (
        preferredAuthType:
            | "google"
            | "twitter"
            | "twitch"
            | "github"
            | "discord"
            | "linkedin",
    ) => {
        if (particle) {
            let user = await particle.auth.login({ preferredAuthType });
            if (user) {
                setAccount(user);
                localStorage.setItem("user-info", JSON.stringify(user));
            }
        }
    };

    console.log(account);

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

            { account ? (
                <p>Hi, <b>{account.name}</b></p>
            ) : (
                <Button type="main" click={() => { handleLogin("google") }}>
                    Sign In
                </Button>
            )}
        </header>
    )
}