import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link'
import LinkPreview from './LinkPreview';

function Profile() {
  return (
        <div className='mt-7 mb-6 flex flex-col sm:flex-row items-start'>
          <div className='pl-5 pt-5 flex'>
            <img className="w-40 h-40 rounded-full border-2 border-green-200 object-cover"
              src="/avatar.jpg" />
            <div className='pt-5 pl-8'>
                <h2 className="font-bold text-4xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
                  <span className=' bg-sky-200 dark:bg-sky-800'>Sandeep Yaramchitti</span> 
                </h2>
                <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                  Brining my ideas into life through Code.
                </h2>
                <div className=' flex items-center space-x-3'>
                  <LinkPreview href='https://www.linkedin.com/in/sandeep-yaramchitti-74833475/'  passHref={true} >
                    <button className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
                      <svg className="w-6 h-6 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                      </svg>
                    </button>
                  </LinkPreview>

                  <LinkPreview href='https://github.com/SandeepKumarYaramchitti'  passHref={true} >
                    <button className="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
                      <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></g>
                      </svg>
                    </button>
                  </LinkPreview>
                  <LinkPreview href='https://twitter.com/sandeep01957280'  passHref={true} >
                    <button className="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
                      <svg className="w-6 h-6 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                    </button>
                  </LinkPreview>
                  <LinkPreview href='https://mail.google.com/mail/u/0/#inbox'  passHref={true} >
                    <button className="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
                      <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z" fill="currentColor"/></g></svg>
                    </button>
                  </LinkPreview>
                  <LinkPreview href='https://medium.com/@sandeepkumary'>
                    <button className=" bg-slate-200 p-2 font-semibold text-black inline-flex items-center space-x-2 rounded-full">
                      <svg fill="#000000" className="w-6 h-6 fill-current"  xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 483.86 483.86" preserveAspectRatio="xMidYMid meet">
                        <g>
                        <path d="M483.86,112.345h-26.699c-6.952,0-25.143,7.552-25.143,13.981v233.467c0,6.445,18.191,11.729,25.143,11.729h26.699v51.835
                          H311.052v-51.835h34.57V129.615h-6.016L256.42,423.356h-64.406l-82.11-293.741h-6.219v241.906h34.555v51.835H0v-51.835h19.173
                          c7.527,0,15.383-5.283,15.383-11.729V126.326c0-6.43-7.855-13.981-15.383-13.981H0V60.504h179.155l58.496,207.342h1.574
                          l59.073-207.342H483.86V112.345z"/>
                        </g>
                      </svg>
                    </button>
                  </LinkPreview>
                  <LinkPreview href='https://sandeepyaramchitti.hashnode.dev/'>
                    <button className=" bg-slate-200 p-2 font-semibold text-black inline-flex items-center space-x-2 rounded-full">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 256 256"  xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink">
                          <g fillRule="evenodd">
                              <path d="M17.5913461,85.5328619 C-5.86378203,108.98799 -5.86378203,147.01185 17.5913461,170.464766 L85.5337714,238.409404 C108.9889,261.862319 147.01276,261.862319 170.465675,238.409404 L238.410313,170.464766 C261.863229,147.009638 261.863229,108.985777 238.410313,85.5328619 L170.465675,17.5904365 C147.010547,-5.86247884 108.986687,-5.86247884 85.5337714,17.5904365 L17.5913461,85.5328619 Z M157.724673,157.725976 C174.143262,141.307386 174.143262,114.690241 157.724673,98.2738645 C141.308296,81.8552748 114.691151,81.8552748 98.274774,98.2738645 C81.8561843,114.692454 81.8561843,141.307386 98.274774,157.725976 C114.693364,174.142353 141.308296,174.142353 157.726886,157.725976 L157.724673,157.725976 Z" fill="#2962FF">
                              </path>
                          </g>
                      </svg>
                    </button>
                  </LinkPreview>
                  <LinkPreview href='https://dev.to/sandeepkumaryaramchitti'>
                    <button className=" bg-slate-200 p-2 font-semibold  inline-flex items-center space-x-2 rounded-full">
                      <svg className="w-6 h-6 fill-current dark:bg-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 .469-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.079-.408-.234-.525zM19.236 3H4.764C3.791 3 3.002 3.787 3 4.76v14.48c.002.973.791 1.76 1.764 1.76h14.473c.973 0 1.762-.787 1.764-1.76V4.76A1.765 1.765 0 0 0 19.236 3zM9.195 13.414c0 .755-.466 1.901-1.942 1.898H5.389V8.665h1.903c1.424 0 1.902 1.144 1.903 1.899v2.85zm4.045-3.562H11.1v1.544h1.309v1.188H11.1v1.543h2.142v1.188h-2.498a.813.813 0 0 1-.833-.792V9.497a.813.813 0 0 1 .792-.832h2.539l-.002 1.187zm4.165 4.632c-.531 1.235-1.481.99-1.906 0l-1.548-5.818h1.309l1.193 4.569 1.188-4.569h1.31l-1.546 5.818z"/></svg>
                    </button>
                  </LinkPreview>
                  
                </div>
            </div>
          </div>
        </div>
  )
}

export default Profile
