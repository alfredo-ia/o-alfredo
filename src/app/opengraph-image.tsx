import { ImageResponse } from 'next/og'

/**
 * Imagem Open Graph gerada dinamicamente pelo Next.js (1200×630px).
 * Aparece ao compartilhar o link em redes sociais e mensageiros.
 * Usa apenas conteúdo real do Alfredo — sem claims falsos.
 */
export const runtime = 'edge'
export const alt = 'Alfredo — Orquestrador de Desenvolvimento com IA'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
	return new ImageResponse(
		<div
			style={{
				width: '1200px',
				height: '630px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				background: 'linear-gradient(135deg, #0a0a0f 0%, #0d0d1a 50%, #0a0a0f 100%)',
				fontFamily: 'sans-serif',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{/* Glow de fundo */}
			<div
				style={{
					position: 'absolute',
					top: '-120px',
					left: '50%',
					transform: 'translateX(-50%)',
					width: '800px',
					height: '400px',
					borderRadius: '50%',
					background: 'radial-gradient(ellipse, rgba(0,160,223,0.15) 0%, transparent 70%)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					bottom: '-80px',
					right: '100px',
					width: '400px',
					height: '300px',
					borderRadius: '50%',
					background: 'radial-gradient(ellipse, rgba(162,119,255,0.12) 0%, transparent 70%)',
				}}
			/>

			{/* Badge */}
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '8px',
					background: 'rgba(0,160,223,0.1)',
					border: '1px solid rgba(0,160,223,0.3)',
					borderRadius: '999px',
					padding: '6px 16px',
					marginBottom: '28px',
				}}
			>
				<div
					style={{
						width: '8px',
						height: '8px',
						borderRadius: '50%',
						background: '#00a0df',
					}}
				/>
				<span style={{ color: '#00a0df', fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em' }}>MULTI-AGENT ORCHESTRATOR</span>
			</div>

			{/* Título */}
			<div
				style={{
					fontSize: '72px',
					fontWeight: 800,
					color: '#ffffff',
					letterSpacing: '-0.03em',
					lineHeight: 1.05,
					textAlign: 'center',
					marginBottom: '20px',
				}}
			>
				Alfredo
			</div>

			{/* Subtítulo */}
			<div
				style={{
					fontSize: '24px',
					color: 'rgba(255,255,255,0.55)',
					textAlign: 'center',
					maxWidth: '700px',
					lineHeight: 1.5,
					marginBottom: '48px',
				}}
			>
				Orquestrador de desenvolvimento com IA. 8 agentes especializados, fluxo auditável e memória institucional.
			</div>

			{/* Chips de destaque */}
			<div style={{ display: 'flex', gap: '12px' }}>
				{['8 Agentes', 'Fluxo Hera/Odin', '11 MCPs', 'TypeScript'].map((label) => (
					<div
						key={label}
						style={{
							background: 'rgba(255,255,255,0.06)',
							border: '1px solid rgba(255,255,255,0.12)',
							borderRadius: '8px',
							padding: '8px 18px',
							color: 'rgba(255,255,255,0.7)',
							fontSize: '15px',
							fontWeight: 500,
						}}
					>
						{label}
					</div>
				))}
			</div>

			{/* URL no rodapé */}
			<div
				style={{
					position: 'absolute',
					bottom: '32px',
					color: 'rgba(255,255,255,0.25)',
					fontSize: '14px',
					letterSpacing: '0.05em',
				}}
			>
				o-alfredo.ia.br
			</div>
		</div>,
		{ ...size },
	)
}
