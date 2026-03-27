'use client'

import { cliCommands } from '@engines/cli'
import { motion } from 'framer-motion'

/**
 * Seção CLI — terminal visual com comandos reais do Alfredo.
 */
export function CliSection() {
	return (
		<section id="cli" className="relative py-32">
			<div className="pointer-events-none absolute left-1/3 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#61ffca]/5 blur-[120px]" />

			<div className="mx-auto max-w-7xl px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16 text-center"
				>
					<span className="mb-4 inline-block text-sm font-medium text-[#61ffca]">CLI</span>
					<h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Uma CLI. Tudo integrado.</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
						De bootstrap a deploy. Cada comando é uma porta para um subsistema completo.
					</p>
				</motion.div>

				{/* Terminal window */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]"
				>
					{/* Terminal header */}
					<div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
						<div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
						<div className="h-3 w-3 rounded-full bg-[#febc2e]" />
						<div className="h-3 w-3 rounded-full bg-[#28c840]" />
						<span className="ml-4 text-xs text-muted-foreground">terminal</span>
					</div>

					{/* Terminal body */}
					<div className="space-y-3 p-6 font-mono text-sm">
						{cliCommands.map((cmd, i) => (
							<motion.div
								key={cmd.command}
								initial={{ opacity: 0, x: -10 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.06 }}
								className="flex items-start gap-3"
							>
								<span className="shrink-0 text-[#61ffca]">$</span>
								<div className="flex flex-1 flex-wrap items-baseline gap-x-3">
									<code className="font-semibold text-foreground">{cmd.command}</code>
									<span className="text-xs text-muted-foreground"># {cmd.description}</span>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	)
}
