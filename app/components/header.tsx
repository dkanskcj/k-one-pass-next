import Link from "next/link";
import Image from 'next/image';

function Header() {

    return (
        <div className="min-w-full max-w-5xl min-h-19.5 mcenter px-3 bg-[#000000] backdrop-blur opacity-60 space-y-2">
            <div className="flex justify-between items-center top p-4">
                <Link href={'/'}>
                    <Image width={62} height={32} src="/logo.svg" alt="" />
                </Link>
                <div className="border border-primary rounded-[14px] text-white">
                    <div className="px-3.5 py-3 text-[13px] font-medium leaing-[16.22px]">
                        비즈니스 솔루션 &gt;
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
