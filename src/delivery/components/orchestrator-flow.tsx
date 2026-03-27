'use client'

import { agents } from '@engines/agents'
import { orchestrationModes } from '@engines/orchestration'
import { motion } from 'framer-motion'

const agentColorMap = Object.fromEntries(agents.map((a) => [a.id, a.color]))

/**
 * Visualização do fluxo de orquestração — mostra os dois modos (Odin e Hera).
 * Inspiração ohmyopenagent.com "Think, Then Act" flow.
 */
export function OrchestratorFlow() {
	return (
		<section id="orchestration" className="relative py-32">
			<div className="pointer-events-none absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#61ffca]/5 blur-[120px]" />

			<div className="mx-auto max-w-7xl px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16 text-center"
				>
					<span className="mb-4 inline-block text-sm font-medium text-[#61ffca]">Orquestração</span>
					<h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Pensa, depois age.</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
						Dois modos de operação. Um para velocidade, outro para governança. Escolha conforme a complexidade.
					</p>
				</motion.div>

				<div className="grid gap-8 lg:grid-cols-2">
					{orchestrationModes.map((mode) => (
						<motion.div
							key={mode.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="rounded-2xl border border-white/5 bg-white/[0.02] p-8"
						>
							{/* Mode header */}
							<div className="mb-6">
								<div className="mb-2 flex items-center gap-2">
									<div className={`h-3 w-3 rounded-full ${mode.id === 'odin' ? 'bg-[#ffca85]' : 'bg-[#00a0df]'}`} />
									<h3 className="text-xl font-bold text-foreground">{mode.name}</h3>
								</div>
								<p className="text-sm text-muted-foreground">{mode.description}</p>
							</div>

							{/* Steps */}
							<div className="space-y-2">
								{mode.steps.map((step, i) => {
									const color = step.agent ? (agentColorMap[step.agent] ?? '#00a0df') : step.isGate ? '#ef4444' : '#525252'

									return (
										<div key={step.id} className="flex items-center gap-3">
											{/* Step number */}
											<div
												className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold"
												style={{
													backgroundColor: `${color}15`,
													color,
												}}
											>
												{i + 1}
											</div>

											{/* Label + description */}
											<div className="flex flex-1 items-center gap-2 overflow-hidden">
												<code className="shrink-0 text-xs font-semibold text-foreground">{step.label}</code>
												<span className="truncate text-xs text-muted-foreground">{step.description}</span>
											</div>

											{/* Gate badge */}
											{step.isGate && (
												<span className="shrink-0 rounded border border-red-500/20 bg-red-500/10 px-1.5 py-0.5 text-[10px] font-medium text-red-400">
													GATE
												</span>
											)}

											{/* Agent badge */}
											{step.agent && (
												<span
													className="shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium"
													style={{
														backgroundColor: `${color}15`,
														color,
													}}
												>
													{step.agent}
												</span>
											)}
										</div>
									)
								})}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
