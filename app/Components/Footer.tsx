import Image from 'next/image';
import Link from 'next/link';
export default function Footer(){
    return(
        <div className="grid bg-gray-800 h-[120px] w-2/2 ">
        <h1 className="text-white  mt-[2px] text-[30px] ml-[1170px]">Powered By</h1>
       <Link href="https://web.facebook.com/groups/deep.learning.edu/?_rdc=1&_rdr"> <Image src="/images/panacloud.jpg" alt="panacloud" height={50} width={110}
               className="ml-[1230px]"/></Link>
        </div>
    )
}
