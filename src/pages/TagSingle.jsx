import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import BlogList from '../components/BlogList'
import EmptyList from '../components/EmptyList';
import { blogList } from '../Data/data'

export default function TagSingle() {
  const [blogs, setBlogs] = useState(null);
  const params = useParams();
  document.title = `Show posts from - ${params}`;

  useEffect(() => {
    let blog = blogList.filter(blog => blog.tag === params.tag);
    if (blog) {
      setBlogs(blog);
    }
  }, [params.tag])
  return (
    <section>

      {blogs ? (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-[70px] px-3 mt-[100px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px] mx-auto'>
          {blogs.map((blog) => (
            <BlogList
            key={blog.id}
            id={blog.id}
            blog={blog}
            />
            ))}
          </div>
        ) : (
          <EmptyList />
        )}

    </section>
  )
}
