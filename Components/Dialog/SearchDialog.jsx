

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Button from '@mui/material/Button'
import { Dialog ,DialogTitle,DialogBackdrop,DialogPanel} from '@headlessui/react'
export default function SearchDialog({ isSearch, toggleSearch }) {
  return (
    <Dialog open={isSearch} onClose={toggleSearch} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-300 ease-in-out"
      />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:w-full sm:max-w-lg"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="sm:flex sm:flex-col w-full">
                  <DialogTitle className="text-lg font-medium leading-6 text-gray-900 mb-4">
                    Search Products
                  </DialogTitle>
                  <div className="relative mb-4">
                    <input
                      id="search"
                      name="search"
                      type="text"
                      placeholder="Search for products..."
                      className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="contained" color="primary">
                      Search
                    </Button>

                    <button
                      type="button"
                      onClick={toggleSearch}
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
