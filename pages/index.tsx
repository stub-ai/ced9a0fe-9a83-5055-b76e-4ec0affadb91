import Image from 'next/image'
import { Inter } from 'next/font/google'
import PricingCard from '../components/PricingCard'

const inter = Inter({ subsets: ['latin'] })

const plans = [
  {
    name: 'Basic',
    price: 10,
    features: ['1 GB Storage', '10 GB Bandwidth', '24/7 Support']
  },
  {
    name: 'Pro',
    price: 20,
    features: ['10 GB Storage', '100 GB Bandwidth', '24/7 Support']
  },
  {
    name: 'Enterprise',
    price: 30,
    features: ['100 GB Storage', 'Unlimited Bandwidth', '24/7 Support']
  }
]

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="font-bold text-3xl mb-4">Our Pricing Plans</h1>
      <div className="flex space-x-4">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </main>
  )
}