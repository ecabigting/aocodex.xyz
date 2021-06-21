import Link from 'next/link'

export default function Nav(){
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/cookbook">Cook Book</Link>
                    </li>
                    <li>
                        <Link href="/player">Player</Link>
                    </li>
                    <li>
                        <Link href="/recentbattles">Recent Battles</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}