'use client'

import { navigationItems } from '@engines/navigation'

/**
 * Navbar fixa com backdrop blur — inspiração rogo.ai.
 * Links âncora para seções da landing page.
 */
export function Navigation() {
	return (
		<header className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl">
			<nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
				<a href="#" className="flex items-center gap-2">
					<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00a0df]">
						<span className="text-sm font-bold text-white">A</span>
					</div>
					<span className="text-lg font-semibold tracking-tight text-foreground">Alfredo</span>
				</a>

				<div className="hidden items-center gap-8 md:flex">
					{navigationItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="text-sm text-muted-foreground transition-colors hover:text-foreground"
							{...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
						>
							{item.label}
						</a>
					))}
				</div>

				<a
					href="https://github.com/alfredo-ia/alfredo"
					target="_blank"
					rel="noopener noreferrer"
					className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
				>
					GitHub →
				</a>
			</nav>
		</header>
	)
}
