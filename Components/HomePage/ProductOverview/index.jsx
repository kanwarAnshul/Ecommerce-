/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: 'Slim fit jeans with a medium wash.',
    price: '$50',
    color: 'Blue',
  },
  {
    id: 3,
    name: 'Leather Jacket',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: 'Black leather jacket with zippered front.',
    price: '$120',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Classic Watch',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: 'Classic wristwatch with a brown leather strap.',
    price: '$150',
    color: 'Brown',
  },
  {
    id: 5,
    name: 'White Sneakers',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'White sneakers with minimalistic design.',
    price: '$75',
    color: 'White',
  },
  {
    id: 6,
    name: 'Wool Scarf',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Warm wool scarf in a grey color.',
    price: '$40',
    color: 'Grey',
  },
  {
    id: 7,
    name: 'Striped Hoodie',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Hoodie with horizontal stripes in navy and white.',
    price: '$60',
    color: 'Navy',
  },
  {
    id: 8,
    name: 'Denim Jacket',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/flagged/photo-1564468781192-f023d514222d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Classic denim jacket with button front.',
    price: '$85',
    color: 'Denim Blue',
  },
  {
    id: 9,
    name: 'Graphic Tee',
    href: '#',
    imageSrc:
      'https://plus.unsplash.com/premium_photo-1677011779128-3f2ee9810c97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Graphic t-shirt with colorful print.',
    price: '$30',
    color: 'White',
  },
  {
    id: 10,
    name: 'Sporty Cap',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Sporty cap with adjustable strap.',
    price: '$25',
    color: 'Black',
  },
]

export default function ProductOverview() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product Overview</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
