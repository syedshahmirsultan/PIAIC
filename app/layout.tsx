import './globals.css';
import Footer from '../app/Components/Footer';
import Navbar from '../app/Components/Navbar';
export const metadata = {
  title: 'PIAIC ',
  description: 'Generated by Syed Shahmir Sultan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><Navbar/>{children}
      </body>
    </html>
  )
}
