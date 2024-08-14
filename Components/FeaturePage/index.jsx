import { ShoppingBagIcon, TagIcon, GlobeAltIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Exclusive Collections',
    description:
      'Discover our exclusive clothing collections that you won’t find anywhere else. Stay ahead of trends with our unique selection.',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Seasonal Sales',
    description:
      'Enjoy seasonal sales and discounts on your favorite items. Perfect for upgrading your wardrobe without breaking the bank.',
    icon: TagIcon,
  },
  {
    name: 'Global Shipping',
    description:
      'We offer global shipping options to ensure you can get our products no matter where you are in the world.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Customer Support',
    description:
      'Our dedicated customer support team is here to help with any questions or issues you might have. Shop with confidence.',
    icon: ChartBarIcon,
  },
]

export default function FeaturePage() {
  return (
    <div className="bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Shop with Confidence</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Features that make us stand out
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a range of features designed to enhance your shopping experience and ensure you get the best from our store.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
