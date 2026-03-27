'use client'

import { testimonials } from '@engines/testimonials'
import { motion } from 'framer-motion'

/**
 * Seção de testimonials — cards com citação, autor e papel.
 */
export function Testimonials() {
	return (
		<section className="relative py-32">
			<div className="mx-auto max-w-7xl px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16 text-center"
				>
					<span className="mb-4 inline-block text-sm font-medium text-[#f694ff]">Comunidade</span>
					<h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Quem usa, confia.</h2>
				</motion.div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((t, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="rounded-2xl border border-white/5 bg-white/[0.02] p-6"
						>
							{/* Quote */}
							<p className="mb-6 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>

							{/* Author */}
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-sm font-bold text-muted-foreground">
									{t.author.charAt(0)}
								</div>
								<div>
									<p className="text-sm font-medium text-foreground">{t.author}</p>
									<p className="text-xs text-muted-foreground">{t.role}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
