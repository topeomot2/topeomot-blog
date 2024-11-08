import Image from 'next/image'
import "./globals.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className="flex antialiased text-slate-500 dark:bg-slate-900 dark:text-slate-400">
        <div className="container mx-auto px-24">
          <div className="flex py-5  justify-between items-center">
            <div className="flex items-center">
              <Image src={'/me.jpg'} alt='topeomot' width={64} height={64} className="rounded-full mr-2" />
              <Link href="https://topeomot.com" className="text-2xl font-extrabold dark:text-slate-200">Topeomot.com</Link>
            </div>

            <div className="flex flex-content max-w-100 justify-between">
              <Link href="https://www.linkedin.com/in/temitope-omotunde-b0981313/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="w-5 mr-4 hover:border-2" /></Link>
              <Link href="https://github.com/topeomot2" target="_blank"><FontAwesomeIcon icon={faGithub} className="w-5 hover:border-2" /></Link>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}