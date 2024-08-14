import { useState } from 'react';
import { Dialog, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { NavLink, Link } from 'react-router-dom';
import Drawer from '../CartPage/Drawer';
import SearchDialog from '../Dialog/SearchDialog';

const navigation = {
  pages: [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Store', to: 'store' },
    { name: 'Contact', to: 'contact' },
    { name: 'Blog', to: 'blog' },
    { name: 'Features', to: 'feature' },
  ],
};

export default function HeaderMegaMenu({}) {
  const [open, setOpen] = useState(false);
  const [isDrawer, setIsDrawer] = useState(false);
  const [isSearch, setSearch] = useState(false);

  const toggleDrawer = () => {
    setIsDrawer(!isDrawer);
  };
  
  const toggleSearch = () => {
    setSearch(!isSearch);
  };

  return (
    <div className="bg-white z-50">
      {/* Mobile menu */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-40 lg:hidden">
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="-m-2 z-40 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div style={{ cursor: 'pointer' }} className="space-y-6 px-4 py-6">
              {navigation.pages.map((page, index) => (
                <div key={index} className="flow-root">
                  <Link to={page.to} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </Link>
                </div>
              ))}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="#">
                  <span className="sr-only">MOREOVER</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </Link>
              </div>

              {/* Desktop navigation */}
              <div className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.to}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="ml-auto flex items-center">
                {/* Search */}
                <div className="flex lg:ml-6">
                  <div
                    onClick={() => toggleSearch()}
                    className="p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                  </div>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <div
                    onClick={() => toggleDrawer()}
                    className="group -m-2 flex items-center p-2"
                  >
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </div>
                </div>

                {/* User Menu */}
                <Menu as="div" className="relative ml-3">
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                  <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem as="a" href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Your Profile
                    </MenuItem>
                    <MenuItem as="a" href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </MenuItem>
                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sign out
                    </Link>
                  </MenuItems>
                </Menu>

                {/* Drawer & Search Dialog Components */}
                {isDrawer && <Drawer isDrawer={isDrawer} toggleDrawer={toggleDrawer} />}
                {isSearch && <SearchDialog isSearch={isSearch} toggleSearch={toggleSearch} />}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
