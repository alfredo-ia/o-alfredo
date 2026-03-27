'use client'

import { motion } from 'framer-motion'

/**
 * CTA final — instalação + call to action. Inspiração rogo.ai/ohmyopenagent.
 */
export function CallToAction() {
	return (
		<section id="getting-started" className="relative py-32">
			{/* Background glow */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00a0df]/8 blur-[120px]" />
			</div>

			<div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
				<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
					<h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Pronto para orquestrar?</h2>
					<p className="mb-10 text-lg text-muted-foreground">Instale em segundos. Configure em minutos. Orquestre para sempre.</p>

					{/* Install command */}
					<div className="mb-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-8 py-4 font-mono">
						<span className="text-[#61ffca]">$</span>
						<code className="text-foreground">bun add -g alfredo</code>
					</div>

					{/* Action buttons */}
					<div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
						<a
							href="https://github.com/alfredo-ia/alfredo"
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-xl bg-[#00a0df] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#00a0df]/90 hover:shadow-lg hover:shadow-[#00a0df]/20"
						>
							Ver no GitHub
						</a>
						<a
							href="https://github.com/alfredo-ia/alfredo#readme"
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-semibold text-foreground transition-all hover:bg-white/10"
						>
							Documentação
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
