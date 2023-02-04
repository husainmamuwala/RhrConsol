import React from 'react'

const Navbar = () => {
    const Links=[
        {
            name:"Home",link:"/"
        },
        {
            name:"About",link:"/about"
        },
        {
            name:"Services",link:"/services"
        },
        {
            name:"Enquiry",link:"/en"
        }
    ]
  return (
    <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
  </svg>
  </div>
  )
}

export default Navbar