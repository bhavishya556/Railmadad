import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { Toaster } from "@/components/ui/toaster"
import ChakraProviderNext from '@/providers/ChakraProviderNext'

const inter = Inter({ subsets: ['latin'] })
import Navbar from '@/components/GloablComponents/Navbar/Navbar'
import Footer from '@/components/GloablComponents/Footer/Footer'

// const APP_TITLE = 'BizElevators | Elevating Businesses with Strategic HR Solutions'
// const APP_DESCRIPTION = 'Welcome to BizElevators Consultancy, your new-age HR partner. We provide innovative HR solutions to help businesses reach new heights. Our strategic insights and practical solutions ensure your organization remains agile and responsive to market demands.'
// const APP_NAME = 'BizElevators Consultancy'

export const metadata: Metadata = {
  manifest: "/manifest.json",

  title: "RailMadad",
  description: "Our AI-powered RailMadad software makes it incredibly easy to submit railway complaints. In just 30 seconds, you can capture a photo of your issue, add your PNR number, and our system will automatically forward it to the correct department. No login required—just a fast and seamless experience to ensure your concerns are addressed quickly.",
}

//   applicationName: APP_NAME,
//   keywords: [
//     "HR consultancy",
//     "Strategic HR solutions",
//     "Talent management",
//     "Employee verification",
//     "Corporate-ready training",
//     "Business growth",
//     "Operational efficiency",
//     "Leadership development",
//     "Recruitment services",
//     "Workforce optimization"
//   ],

//   authors: [
//     { name: 'UrsTech Solution', url: "https://urstechsolution.com" },
//   ],
//   creator: 'UrsTech Solution',
//   publisher: 'UrsTech Solution',
//   alternates: {
//     canonical: '/',
//     languages: {
//       'en-US': '/en-US',
//     },
//   },
//   openGraph: {
//     title: APP_TITLE,
//     description: APP_DESCRIPTION,
//     url: process.env.BASE_URL || "https://bizelevators.com",
//     siteName: APP_NAME,
//     type: "website",
//     locale: "en_US"
//   },
//   twitter: {
//     title: APP_TITLE,
//     description: APP_DESCRIPTION,
//     card: "summary_large_image"
//   }
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProviderNext >
        <Navbar/> 
        {children}
        <Footer/> 
        <Toaster  />
        </ ChakraProviderNext>
        <script src="./node_modules/preline/dist/preline.js"></script>
      </body>
    </html>
  )
}
