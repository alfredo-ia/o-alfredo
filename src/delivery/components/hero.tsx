'use client'

import { heroContent } from '@engines/hero'
import { metrics } from '@engines/metrics'
import { motion } from 'framer-motion'

/**
 * Hero section — inspiração rogo.ai: título enorme, gradiente sutil, métricas inline.
 * Estilo dark-first com glow azul Alfredo (#00a0df).
 */
export function Hero() {
	return (
		<section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16">
			{/* Background glow */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#00a0df]/10 blur-[120px]" />
				<div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-[#a277ff]/8 blur-[100px]" />
			</div>

			<div className="relative z-10 mx-auto max-w-5xl text-center">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#00a0df]/20 bg-[#00a0df]/5 px-4 py-1.5"
				>
					<span className="h-2 w-2 rounded-full bg-[#61ffca] animate-pulse" />
					<span className="text-sm text-[#00a0df]">Orquestrador de Desenvolvimento com IA</span>
				</motion.div>

				{/* Headline */}
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-8xl"
				>
					<span className="whitespace-pre-line">{heroContent.headline}</span>
				</motion.h1>

				{/* Description */}
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
				>
					{heroContent.description}
				</motion.p>

				{/* CTAs */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
				>
					<a
						href={heroContent.primaryCta.href}
						className="rounded-xl bg-[#00a0df] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#00a0df]/90 hover:shadow-lg hover:shadow-[#00a0df]/20"
					>
						{heroContent.primaryCta.label}
					</a>
					{heroContent.secondaryCta && (
						<a
							href={heroContent.secondaryCta.href}
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-semibold text-foreground transition-all hover:bg-white/10"
						>
							{heroContent.secondaryCta.label}
						</a>
					)}
				</motion.div>

				{/* Install command */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.5 }}
					className="mt-12 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3 font-mono text-sm text-muted-foreground"
				>
					<span className="text-[#61ffca]">$</span>
					<span>bun add -g alfredo</span>
				</motion.div>

				{/* Metrics bar */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6"
				>
					{metrics.map((metric) => (
						<div key={metric.label} className="text-center">
							<div className="text-3xl font-bold text-foreground">
								{metric.value}
								{metric.suffix && <span className="text-[#00a0df]">{metric.suffix}</span>}
							</div>
							<div className="mt-1 text-xs text-muted-foreground">{metric.label}</div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
