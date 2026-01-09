import Image from "next/image"

export default function Header() {
    return (
        <div className="flex h-20 items-end rounded-lg bg-blue-500 p-4">
            <Image
                className="size-10"
                src="/rabbit.png"
                alt="bunny logo"
                width={50}
                height={50}
                priority
            />
            <h1 className="text-white font-bold">TaskBunny</h1>
        </div>
    )
}