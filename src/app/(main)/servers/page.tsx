import Button from "@/components/Button";
import Link from "next/link";

export default function Servers() {
    return (
        <div className="p-4">
            <div className="rounded-lg p-3 bg-[#f6f6f6] flex items-center justify-end">
                <Button type="main" href="/servers/create">
                    Create a Server
                </Button>
            </div>

            <div className="mt-12">
                <h2 className="font-semibold text-2xl mb-2">Your Servers</h2>
                <p className="text-lg text-gray-600">There is not an active server yet. <Link href="/servers/create">Create a new one</Link></p>
            </div>
        </div>
    )
}