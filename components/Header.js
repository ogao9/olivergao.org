import Link from "next/link";
import Image from "next/image";

export default function Header() {
	return (
		<header className="relative flex justify-between items-center border-b pt-6 pb-1">
			<Link href="/">
				<Logo/>
			</Link>
			<nav>
				<ul className='flex space-x-2 text-sm sm:text-base'>
					<li><Link href="/#updates" className="nav-link">Updates</Link></li>
					<li><Link href="/#work" className="nav-link">Work</Link></li>
					<li><Link href="/#blog" className="nav-link">Blog</Link></li>
				</ul>
			</nav>
		</header>
	);
}

function Logo() {
	return (
		<div className='flex items-center'>
			<Image src='/logo.png' alt="Logo" width={32} height={32} className='mr-2'/>
			<h1 className="text-2xl sm:text-3xl font-semibold">Oliver Gao</h1>
		</div>
	)
}