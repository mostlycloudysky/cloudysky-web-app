import React from 'react'

function NewsLetter() {
  return (
    <>  
      <div className="border border-hightlight-high rounded p-6 my-4 w-full mb-5 bg-sky-100 dark:bg-sky-900">
        <p className="text-lg md:text-xl font-bold">
          Subscribe to My Newsletter
        </p>
        <p className="my-1">
        Get emails from me about Software Development, Tech, and early access to new articles.🌟 
        </p>
        <form className="relative my-4" >
          <input
            aria-label="Email for newsletter"
            placeholder="Email address"
            type="email"
            autoComplete="email"
            required
            className="px-4 py-2 mt-1 outline-none block w-full bg-base border-foam rounded-md pr-32"
          />
          <button
            className="flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-pine dark:text-white rounded w-28"
            type="submit"
          >
            Subscribe
          </button>
        </form>
        {/* <p className="text-sm">
          { subscriberCount } subscribers - {issues && issues.length} {issues && issues.length > 1 ? 'issues' : 'issue'}
        </p> */}
      </div>
      <div className='border-b-[1px] border-muted'></div>
    </>
  )
}

export default NewsLetter
