import { ParticleNetwork } from "@particle-network/auth";
import { Avalanche } from "@particle-network/chains";

export default class Wallet {

    particle: ParticleNetwork

    constructor() {
        this.particle = new ParticleNetwork({
            projectId: (process.env.NEXT_PUBLIC_PROJECT_ID as string),
            clientKey: (process.env.NEXT_PUBLIC_CLIENT_KEY as string),
            appId: (process.env.NEXT_PUBLIC_APP_ID as string),

            wallet: {
                displayWalletEntry: false,
                uiMode: "light",
            },
        });
    }
}