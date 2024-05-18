'use client'

import Button from "@/components/Button";
import Confetti from "@/components/Confetti";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Create() {

    interface ServerData {
        region: "eu" | "na"
        version: 'java' | 'bedrock'
        gamemode: 'survival' | 'creative'
        type: 'vanilla' | 'bukkit' | 'forge'
        mods: Boolean
    }

    const [purchased, setPurchased] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<ServerData>({
        region: "eu",
        version: "java",
        gamemode: "survival",
        type: "vanilla",
        mods: false
    });
    const [link, setLink] = useState<string>("");
    const [PLink, setPLink] = useState<string>("");

    useEffect(() => {
        if (loading && link) {
            const interval = setInterval(() => {
                // Check the payment link
                fetch("/api/payment/checkPaymentLink?plink=" + PLink, { cache: 'no-cache' })
                    .then(data => data.json())
                    .then(data => {
                        console.log(data);
                        if (data?.success !== false) setPurchased(true);
                    })
                    .catch(err => console.error(err));
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [link, loading]);

    function create() {
        setLoading(true);

        fetch("/api/payment/createPaymentLink?location=eu", { cache: 'no-cache' })
            .then(data => data.json())
            .then(data => {
                setLink(data.url);
                setPLink(data.id)
                window.open(data.url, "_blank");
            })
            .catch(err => console.error(err));
    }

    console.log(link);

    return (
        <div className="p-4 h-full">
            { purchased && (<Confetti />) }

            <h1 className="text-3xl font-bold">Create your Minecraft Server</h1>
            <div className="flex flex-col mt-4 h-full">
                <p className="mb-2 font-medium text-lg">Region</p>
                <div className="flex">
                    <div
                        className={`
                            rounded-l-md p-3 flex items-center justify-center font-medium text-md cursor-pointer
                            ${data?.region === "eu" ? "bg-[rgb(255,0,55)] text-white" : "bg-gray-100"}`}
                        onClick={() => setData({...data, region: "eu"})}
                    >
                        EU
                    </div>
                    <div
                        className={`
                            rounded-r-md p-3 flex items-center justify-center font-medium text-md cursor-pointer
                            ${data?.region === "na" ? "bg-[rgb(255,0,55)] text-white" : "bg-gray-100"}`}
                        onClick={() => setData({...data, region: "na"})}
                    >
                        NA
                    </div>
                </div>

                <p className="mb-2 mt-6 font-medium text-lg">Version</p>
                <div className="flex">
                    <div
                        className={`
                            rounded-l-md p-3 flex items-center justify-center font-medium text-md cursor-pointer
                            ${data?.version === "java" ? "bg-[rgb(255,0,55)] text-white" : "bg-gray-100"}`}
                        onClick={() => setData({...data, version: "java"})}
                    >
                        Java
                    </div>
                    <div
                        className={`
                            rounded-r-md p-3 flex items-center justify-center font-medium text-md !text-gray-300
                            ${data?.version === "bedrock" ? "bg-[rgb(255,0,55)] text-white" : "bg-gray-100"}`}
                    >
                        Bedrock
                    </div>
                </div>

                <p className="mb-2 mt-6 font-medium text-lg">Gamemode</p>
                <div className="flex">
                    <div
                        className={`
                            rounded-l-md p-3 flex items-center justify-center font-medium text-md cursor-pointer
                            ${data?.gamemode === "survival" ? "bg-[rgb(255,0,55)] text-white" : "bg-gray-100"}`}
                        onClick={() => setData({...data, gamemode: "survival"})}
                    >
                        Survival
                    </div>
                    <div
                        className={`
                            rounded-r-md p-3 flex items-center justify-center font-medium text-md cursor-pointer
                            ${data?.gamemode === "creative" ? "bg-[rgb(255,0,55)] text-white" : "bg-gray-100"}`}
                        onClick={() => setData({...data, gamemode: "creative"})}
                    >
                        Creative
                    </div>
                </div>

                <p className="mb-2 mt-6 font-medium text-lg">Type</p>
                <div className="flex">
                    <div
                        className={`
                            rounded-l-md p-3 flex items-center justify-center font-medium text-md cursor-pointer
                            ${data?.type === "vanilla" ? "bg-[rgb(255,0,55)] text-white" : "bg-gray-100"}`}
                        onClick={() => setData({...data, type: "vanilla"})}
                    >
                        Vanilla
                    </div>
                    <div
                        className={`
                            p-3 flex items-center justify-center font-medium text-md !text-gray-300
                            ${data?.type === "bukkit" ? "bg-[rgb(255,0,55)] text-white" : "bg-gray-100"}`}
                    >
                        Bukkit
                    </div>
                    <div
                        className={`
                            rounded-r-md p-3 flex items-center justify-center font-medium text-md !text-gray-300
                            ${data?.type === "forge" ? "bg-[rgb(255,0,55)] text-white" : "bg-gray-100"}`}
                    >
                        Forge
                    </div>
                </div>

                <p className="mb-2 mt-6 font-medium text-lg">Allow Mods</p>
                <div className="flex">
                    <input type="checkbox" height={20} width={20} disabled />
                </div>

                <div className="flex flex-1 mt-10">
                    <Button
                        custom={{
                            width: "400px",
                            height: "50px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: loading ? "rgb(247,178,193)" : null,
                            cursor: loading ? "default" : "cursor"
                        }}
                        click={() => { if (!loading) create() }}
                        type="red"
                    >
                        { loading ? (
                            <Image
                                src="/loader.svg"
                                alt="Loader"
                                height={30}
                                width={30}
                            />
                        ) : (
                            <>Create</>
                        )}
                    </Button>
                </div>
            </div>
        </div>
    )
}