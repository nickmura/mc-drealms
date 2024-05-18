import Confetti from "@/components/Confetti";
import Link from "next/link";

export default function Home() {
	return (
		<div className="relative flex flex-col items-center justify-center h-full">
			<div className="mt-[-150px] flex flex-col items-center text-center">
				<h1 className="text-5xl font-bold">Welcome to Drealms</h1>
				<p className="text-lg mt-2">The place that you can hire Minecraft servers 🎉</p>
			</div>

			<div className="mt-12 flex flex-col items-center text-center">
				<h2 className="font-semibold text-2xl mb-2">Quick Start</h2>

				<div className="flex gap-5">
					<Link
						className="
							border-[1px] border-[rgb(255,0,55)] rounded-md h-[240px] w-[240px] flex items-center justify-center
							p-4 text-xl
							transition-all hover:bg-[rgb(255,0,55)] hover:text-white"
						href="/servers"
					>
						Hire a Server
					</Link>
					<Link
						className="
							border-[1px] border-[rgb(255,0,55)] rounded-md h-[240px] w-[240px] flex items-center justify-center
							p-4 text-xl
							transition-all hover:bg-[rgb(255,0,55)] hover:text-white"
						href="/faq"
					>
						Learn more about Drealms
					</Link>
					<Link
						className="
							border-[1px] border-[rgb(255,0,55)] rounded-md h-[240px] w-[240px] flex items-center justify-center
							p-4 text-xl
							transition-all hover:bg-[rgb(255,0,55)] hover:text-white"
						href="/"
					>
						Get Help
					</Link>
				</div>
			</div>
		</div>
	);
}