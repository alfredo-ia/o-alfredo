import { AgentShowcase } from '@delivery/components/agent-showcase'
import { CallToAction } from '@delivery/components/call-to-action'
import { CliSection } from '@delivery/components/cli-section'
import { FeatureGrid } from '@delivery/components/feature-grid'
import { Footer } from '@delivery/components/footer'
import { Hero } from '@delivery/components/hero'
import { Navigation } from '@delivery/components/navigation'
import { OrchestratorFlow } from '@delivery/components/orchestrator-flow'
import { Testimonials } from '@delivery/components/testimonials'

/**
 * Landing page institucional do Alfredo — o-alfredo.ia.br.
 * Composição de todas as seções seguindo ordem narrativa:
 * apresentação → agentes → orquestração → features → CLI → testimonials → CTA → footer.
 */
export default function Home() {
	return (
		<>
			<Navigation />
			<main>
				<Hero />
				<AgentShowcase />
				<OrchestratorFlow />
				<FeatureGrid />
				<CliSection />
				<Testimonials />
				<CallToAction />
			</main>
			<Footer />
		</>
	)
}
