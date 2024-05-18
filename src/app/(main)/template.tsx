import Sidebar from "@/components/Sidebar"

export default function MainTemplate({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
	return (
		<div className="h-[100vh] w-full flex">
			<Sidebar />

			<div className="
				bg-white shadow-sm rounded-xl
				relative ml-8 mr-4 top-4 flex-1"
			>
                {children}
            </div>
		</div>
	);
}
