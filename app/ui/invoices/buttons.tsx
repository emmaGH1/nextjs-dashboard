'use client'

import { useState } from 'react';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { deleteInvoice } from '@/app/lib/actions'

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const [confirmedDelete, setConfirmedDelete ] = useState(false)
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  
  return (
    <form action={deleteInvoiceWithId} className='relative'>
      <button type='button' className="rounded-md border p-2 hover:bg-gray-100" onClick={() => setConfirmedDelete(prev => !prev)}>
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
      
      <div className={`${confirmedDelete ? 'flex' : 'hidden'} 
        fixed inset-0 flex items-center justify-center bg-opacity-50
      `}>

        <div className="fixed inset-0 bg-black opacity-50"></div>

        <div className='flex flex-col bg-white shadow-lg p-5 z-10 rounded-md'>
          <div>
            <h1 className='font-bold text-lg mb-3'>Delete Invoice</h1>
            <p className='c text-gray-600'>Are you sure you want to delete this invoice? </p>
          </div>

          <div className='flex flex-col md:flex-row mt-4'>
            <button 
              type='button'
              onClick={() => setConfirmedDelete(false)}
              className='flex h-10 mb-2 justify-center items-center rounded-lg bg-white px-4 text-sm font-medium text-black border-gray-500 border transition-colors hover:text-black/80'
            >
              Cancel
            </button>
            <button 
             type='submit'
             onClick={() => setConfirmedDelete(false)}
             className='flex h-10 md:ml-5 justify-center items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors duration-700 hover:bg-red-800'
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </form>
  
  )
}