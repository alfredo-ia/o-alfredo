import { footerSections } from '@engines/navigation'

/**
 * Footer organizado em colunas — inspiração rogo.ai clean footer.
 */
export function Footer() {
	return (
		<footer className="border-t border-white/5 py-16">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
					{/* Brand column */}
					<div>
						<div className="mb-4 flex items-center gap-2">
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00a0df]">
								<span className="text-sm font-bold text-white">A</span>
							</div>
							<span className="text-lg font-semibold tracking-tight text-foreground">Alfredo</span>
						</div>
						<p className="text-sm leading-relaxed text-muted-foreground">
							Orquestrador de desenvolvimento com IA. 8 agentes especializados, fluxo auditável e memória institucional.
						</p>
					</div>

					{/* Link columns */}
					{footerSections.map((section) => (
						<div key={section.title}>
							<h4 className="mb-4 text-sm font-semibold text-foreground">{section.title}</h4>
							<ul className="space-y-2">
								{section.links.map((link) => (
									<li key={link.label}>
										<a
											href={link.href}
											className="text-sm text-muted-foreground transition-colors hover:text-foreground"
											{...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
										>
											{link.label}
											{link.external && <span className="ml-1 text-xs">↗</span>}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Bottom bar */}
				<div className="mt-16 border-t border-white/5 pt-8">
					<p className="text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Alfredo. Orquestrado com IA e café.</p>
				</div>
			</div>
		</footer>
	)
}
