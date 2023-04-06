import { ThemeProvider } from 'next-themes'
import homePage from '../pages/home'

export default function Home() {
  return (
    <>
     {homePage()}
    </>
     
  )
}
