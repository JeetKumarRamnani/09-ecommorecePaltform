import React from 'react';

function CustomerSignup() {
  return (
    <section className='SignUp-Form-Container w-96 mx-auto mt-10'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Name
          </label>
          <input
            type='text'
            placeholder='Enter Your Name...'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Email
          </label>
          <input
            type='email'
            placeholder='Enter Your Email...'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Phone No
          </label>
          <input
            type='text'
            placeholder='Enter Your Phone No...'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Password
          </label>
          <input
            type='password'
            placeholder='Enter Your Password...'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>

        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Repeat Your Password
          </label>
          <input
            type='password'
            placeholder='Repeat Your Password...'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>

        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
          >
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
}

export default CustomerSignup;
