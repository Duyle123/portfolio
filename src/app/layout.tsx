import './globals.css'
import strawfordFont from './fonts/strawford'

export const metadata = {
  title: "Duy's portfolio",
  description: "Hi! I'm Duy. I'm a graduate of NYU with a bachelors in Media and Communication. ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${strawfordFont.className}`}
      >{children}</body>
    </html>
  )
}
