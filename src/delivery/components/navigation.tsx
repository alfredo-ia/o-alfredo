'use client'

import { navigationItems } from '@engines/navigation'
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

/**
 * Navbar fixa com backdrop blur, barra de progresso de scroll e menu mobile.
 * A barra indica visualmente quanto da página foi rolado.
 * Oculta automaticamente quando o usuário prefere movimento reduzido.
 * Em telas < md, exibe botão hamburger com overlay slide-in animado.
 */
export function Navigation() {
	const { scrollYProgress } = useScroll()
	const springScrollProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
	const prefersReducedMotion = useReducedMotion()
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
		}
		return () => document.body.classList.remove('overflow-hidden')
	}, [isOpen])

	const instantTransition = { duration: 0 }
	const springTransition = { type: 'spring' as const, stiffness: 300, damping: 30 }
	const overlayTransition = prefersReducedMotion ? instantTransition : springTransition

	const staggerContainer = {
		animate: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.05 } },
	}

	const staggerItem = {
		initial: { opacity: 0, x: 20 },
		animate: { opacity: 1, x: 0, transition: prefersReducedMotion ? instantTransition : { duration: 0.3 } },
		exit: { opacity: 0, x: 20, transition: prefersReducedMotion ? instantTransition : { duration: 0.15 } },
	}

	return (
		<>
			{!prefersReducedMotion && (
				<motion.div
					style={{ scaleX: springScrollProgress, transformOrigin: '0%' }}
					className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-[#00a0df]"
				/>
			)}
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
						className="hidden rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/10 md:inline-flex"
					>
						GitHub →
					</a>

					<button
						type="button"
						className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-foreground transition-colors hover:bg-white/10 md:hidden"
						onClick={() => setIsOpen(true)}
						aria-label="Abrir menu de navegação"
						aria-expanded={isOpen}
					>
						<Menu className="h-5 w-5" />
					</button>
				</nav>
			</header>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						key="mobile-menu"
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={overlayTransition}
						className="fixed inset-0 z-[55] flex flex-col bg-background/95 backdrop-blur-xl md:hidden"
					>
						<div className="flex h-16 items-center justify-between px-6">
							<a href="#" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
								<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00a0df]">
									<span className="text-sm font-bold text-white">A</span>
								</div>
								<span className="text-lg font-semibold tracking-tight text-foreground">Alfredo</span>
							</a>
							<button
								type="button"
								className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-foreground transition-colors hover:bg-white/10"
								onClick={() => setIsOpen(false)}
								aria-label="Fechar menu de navegação"
							>
								<X className="h-5 w-5" />
							</button>
						</div>

						<motion.div
							className="flex flex-1 flex-col gap-2 px-6 pt-8"
							variants={staggerContainer}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							{navigationItems.map((item) => (
								<motion.a
									key={item.href}
									href={item.href}
									variants={staggerItem}
									onClick={() => setIsOpen(false)}
									className="flex min-h-[44px] items-center rounded-lg px-4 text-lg font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
									{...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
								>
									{item.label}
								</motion.a>
							))}
							<motion.div variants={staggerItem} className="mt-4 border-t border-white/10 pt-4">
								<a
									href="https://github.com/alfredo-ia/alfredo"
									target="_blank"
									rel="noopener noreferrer"
									onClick={() => setIsOpen(false)}
									className="flex min-h-[44px] items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
								>
									GitHub →
								</a>
							</motion.div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
