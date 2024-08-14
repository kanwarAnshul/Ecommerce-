import { Link } from 'react-router-dom'

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'How to use social proof in your marketing strategy',
    href: '#',
    description:
      'Eos enim quo. Animi est distinctio nobis. Cumque expedita quas est deleniti. Dolorum culpa autem nihil enim deserunt et rem inventore.',
    date: 'Apr 10, 2020',
    datetime: '2020-04-10',
    category: { title: 'Social Media', href: '#' },
    author: {
      name: 'Lindsay Walton',
      role: 'Co-Founder / CMO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: '5 Tips for improving your SEO performance',
    href: '#',
    description:
      'Molestiae voluptatum veritatis. Voluptatum voluptatem autem. Voluptatem facere aut voluptas exercitationem sit.',
    date: 'May 22, 2020',
    datetime: '2020-05-22',
    category: { title: 'SEO', href: '#' },
    author: {
      name: 'Tom Cook',
      role: 'SEO Specialist',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 4,
    title: 'Content Marketing Trends for 2021',
    href: '#',
    description: 'Labore nesciunt rerum. Nihil sint ut eligendi. Illum animi perferendis debitis necessitatibus.',
    date: 'Jun 5, 2020',
    datetime: '2020-06-05',
    category: { title: 'Content Marketing', href: '#' },
    author: {
      name: 'Whitney Francis',
      role: 'Head of Content',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 5,
    title: 'Understanding the basics of PPC advertising',
    href: '#',
    description:
      'Ducimus deserunt omnis quaerat. Laboriosam eos atque nisi sit amet. Ullam dolorum tempora architecto.',
    date: 'Jul 14, 2020',
    datetime: '2020-07-14',
    category: { title: 'PPC', href: '#' },
    author: {
      name: 'Kristin Watson',
      role: 'PPC Manager',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1542909188-8c69f89a2206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 6,
    title: 'The future of e-commerce in 2021',
    href: '#',
    description:
      'Ex eius et. Quis accusamus amet consequatur. Dolorem qui autem. Explicabo voluptatem fuga aut corporis aperiam.',
    date: 'Aug 30, 2020',
    datetime: '2020-08-30',
    category: { title: 'E-commerce', href: '#' },
    author: {
      name: 'Courtney Henry',
      role: 'E-commerce Strategist',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default function BlogPage() {
  return (
    <>
      <div className="bg-white py-24 sm:py-3">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="relative bg-cover bg-center bg-no-repeat h-[400px] rounded-md overflow-hidden"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1516763296043-f676c1105999?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            {/* Overlay for blur effect */}
            <div className="absolute inset-0 bg-black/60  flex flex-col items-center justify-center p-6">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">From the blog</h2>
              <p className="mt-2 text-lg leading-8 text-white">
                Discover the latest trends and tips in the fashion world.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <Link
                    to={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link to={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <Link to={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </Link>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
