import React from 'react'
import Blogs from '../components/blog/Blogs'
import Hero from '../components/Hero'

export default function BlogPage({theme}) {
  return (
    <>
    <div theme={theme}>
        <Hero theme={theme}/>
        <Blogs theme={theme}/>
    </div>
    </>
  )
}
