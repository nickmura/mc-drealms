import Link from "next/link";
import { BsInfoCircleFill, BsQuestionCircleFill } from "react-icons/bs";
import { FaHome, FaServer } from "react-icons/fa";

export default function Sidebar() {
    return (
        <nav className="
            flex flex-col justify-between h-[calc(100dvh)] bg-white
            sticky top-4 w-[300px] min-w-[300px] mt-4 p-4 left-4 shadow-sm rounded-xl"
        >
            <div className="flex flex-col">
                <Link
                    className="
                        flex items-center justify-start transition-all
                        p-4 rounded-lg cursor-pointer gap-5
                        hover:bg-[rgba(0,0,0,.04)]"
                    href="/"
                >
                    <FaHome size={32} color="#2c2c2c" />
                    <span className="text-lg font-medium text-gray-800">Home</span>
                </Link>
                <Link
                    className="
                        flex items-center justify-start transition-all
                        p-4 rounded-lg cursor-pointer gap-5
                        hover:bg-[rgba(0,0,0,.04)]"
                    href="/servers"
                >
                    <FaServer size={32} color="#2c2c2c" />
                    <span className="text-lg font-medium text-gray-800">Servers</span>
                </Link>
            </div>
            <div className="flex flex-col">
                <Link
                    className="
                        flex items-center justify-start transition-all
                        p-4 rounded-lg cursor-pointer gap-5
                        hover:bg-[rgba(0,0,0,.04)]"
                    href="/faq"
                >
                    <BsQuestionCircleFill size={32} color="gray" />
                    <span className="text-lg text-[gray] font-medium">FAQ</span>
                </Link>
                <Link
                    className="
                        flex items-center justify-start transition-all
                        p-4 rounded-lg cursor-pointer gap-5
                        hover:bg-[rgba(0,0,0,.04)]"
                    href="/"
                >
                    <BsInfoCircleFill size={32} color="gray" />
                    <span className="text-lg text-[gray] font-medium">Help</span>
                </Link>
            </div>
        </nav>
    )
}