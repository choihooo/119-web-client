import { Icons } from "@team-numberone/daepiro-design-system";
import Link from "next/link";

export function Header() {
	return (
		<header className="absolute top-0 left-0 w-full px-6 py-[18px] h-[56px]">
			<nav>
				<Link href="/">
					<Icons.Logo color="var(--color-secondary-500)" />
				</Link>
			</nav>
		</header>
	);
}
