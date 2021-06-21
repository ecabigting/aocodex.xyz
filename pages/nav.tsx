import Link from 'next/link'

export default function Nav(){
    return (
        <div>
            <nav className="flex items-center flex-wrap py-3 px-3">
                <div className="inline-flex items-center p-2 mr-4 text-xl font-bold hover:text-gray-700">
                    <Link href="/">AOCodex</Link>
                </div>
                <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <Link href='/player'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-400 hover:text-white '>
                                Player
                            </a>
                        </Link>
                        <Link href='/potions'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-400 hover:text-white'>
                                Potions
                            </a>
                        </Link>
                        <Link href='/cookbook'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-400 hover:text-white'>
                                Cook Book
                            </a>
                        </Link>
                        <Link href='/recentbattles'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-400 hover:text-white'>
                                Recent Battles
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}