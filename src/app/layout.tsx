import './globals.css'

export const metadata = {
  title: "Duy's portfolio",
  description: "Hi! I'm Duy",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
