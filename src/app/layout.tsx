import './globals.css'
import strawfordFont from './fonts/strawford'

export const metadata = {
  title: "Duy's portfolio",
  description: "Hi! I'm Duy. I'm a graduate of NYU with a bachelors in Media and Communication. I've worked on multiple projects in the media, technology, and entertainment sector.",
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
