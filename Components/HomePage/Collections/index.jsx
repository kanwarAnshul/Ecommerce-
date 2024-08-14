import React from 'react'
import collection from '../../../src/assets/images/collection.png'
import collection2 from '../../../src/assets/images/collection2.png'
import collection3 from '../../../src/assets/images/collection3.png'

const callouts = [
  {
    name: 'Womens',
    description: 'Elegant styles for every occasion',
    imageSrc: collection,
    imageAlt: 'Elegant women\'s clothing collection.',
    href: '#',
  },
  {
    name: 'Mens',
    description: 'Classic and modern essentials',
    imageSrc: collection2,
    imageAlt: 'Classic men\'s clothing collection.',
    href: '#',
  },
  {
    name: 'Accessories',
    description: 'Chic additions for your daily look',
    imageSrc: collection3,
    imageAlt: 'Stylish accessories collection.',
    href: '#',
  },
]

export default function Collections() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative overflow-hidden">
                <div className="relative h-80 w-full bg-white rounded-lg overflow-hidden">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    style={{ objectFit: 'contain' }} // Ensures image covers container without distortion
                  />
                  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <a href="#" className="bg-white text-blue-500 py-2 px-4 rounded shadow-md">
                      Shop Now
                    </a>
                  </div>
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
