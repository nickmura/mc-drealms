import Confetti from "@/components/Confetti";
import Link from "next/link";

export default function Home() {
	return (
		<div className="relative flex flex-col items-center justify-center h-full">
			<Confetti />

			<div className="mt-[-150px]">
				<h1>Welcome to Drealms</h1>
				<p>The place that you can hire Minecraft servers 🎉</p>
			</div>

			<div>
				<h2>Quick Start</h2>

				<div>
					<Link href="/servers">Hire a Server</Link>
					<Link href="/faq">Learn more about Drealms</Link>
					<Link href="/help">Get Help</Link>
				</div>
			</div>
		</div>
	);
}