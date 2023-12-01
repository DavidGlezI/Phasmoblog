import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Navbar() {
	return (
		<nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
			<div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
				<Link
					href="/"
					className="text-white/90 no-underline hover:text-black"
				>
					David
				</Link>
				<div className="flex flex-row justify-center sm:justify-eveny align-middle gap-8 text-white lg:text-5xl">
					<Link
						className="text-white/90 hover:text-black"
						href="https://twitter.com/David_Glez0"
					>
						{' '}
						<FaXTwitter />{' '}
					</Link>

					<Link
						className="text-white/90 hover:text-black"
						href="https://github.com/DavidGlezI"
					>
						{' '}
						<FaGithub />{' '}
					</Link>

					<Link
						className="text-white/90 hover:text-black"
						href="www.linkedin.com/in/david-ibarra-255068213"
					>
						{' '}
						<FaLinkedin />
					</Link>
				</div>
			</div>
		</nav>
	);
}
