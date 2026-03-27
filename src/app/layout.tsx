import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

const siteUrl = 'https://o-alfredo.ia.br'
const siteName = 'Alfredo'
const siteDescription =
	'Orquestrador de desenvolvimento com IA. 8 agentes especializados, fluxo auditável de 14 passos, memória institucional e 11 integrações MCP.'

export const metadata: Metadata = {
	title: {
		default: 'Alfredo — Orquestrador de Desenvolvimento com IA',
		template: '%s | Alfredo',
	},
	description: siteDescription,
	metadataBase: new URL(siteUrl),
	keywords: ['alfredo', 'orquestrador', 'IA', 'desenvolvimento', 'agentes', 'MCP', 'CLI', 'TypeScript', 'multiagente', 'automação'],
	authors: [{ name: 'Alfredo', url: siteUrl }],
	creator: 'Alfredo',
	openGraph: {
		type: 'website',
		locale: 'pt_BR',
		url: siteUrl,
		siteName,
		title: 'Alfredo — Orquestrador de Desenvolvimento com IA',
		description: siteDescription,
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Alfredo — Orquestrador de Desenvolvimento com IA',
		description: siteDescription,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true },
	},
	alternates: {
		canonical: siteUrl,
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'SoftwareApplication',
							name: siteName,
							description: siteDescription,
							url: siteUrl,
							applicationCategory: 'DeveloperApplication',
							operatingSystem: 'Windows, macOS, Linux',
							offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
						}),
					}}
				/>
			</head>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	)
}
