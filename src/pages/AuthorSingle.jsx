import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import chris from '../assets/chris-impey.webp';
import thomas from '../assets/thomas-macaulay.webp';
import emma from '../assets/emma-hazel.webp';
import BlogList from '../components/BlogList'
import { blogList } from '../Data/data'

export default function AuthorSingle() {
  const [blogs, setBlogs] = useState(null);
  const { authorName } = useParams();
  const newParams = authorName.split('|');
  document.title = newParams;
  console.log(authorName);
  
  useEffect(() => {
    let blog = blogList.filter((blog) => blog.authorFirstName + `-` + blog.authorLastName === authorName );
    console.log(blog);
    if (blog) {
      setBlogs(blog);
    }
  }, [authorName])

  function check() {
    if (authorName === 'Emma-Hazel') return emma;
    if (authorName === 'Thomas-Macaulay') return thomas;
    if (authorName === 'Chris-Impey') return chris;
  }

  return (
    <section className='mt-16'>
      <div className='flex lg:flex-row flex-col justify-center text-center lg:text-left sm:max-w-[540px] md:max-w-[720px] lg:max-w-[850px] xl:max-w-[1080px] mx-auto px-3 lg:gap-12 gap-7'>
        <img src={check()} alt="" className='rounded w-[233px] self-center'/>
        <div>
          <p className='font-WorkSans font-medium lg:mt-2 mt-0 text-[#505050] dark:text-[#d6d6d6]'><span className='font-bold dark:text-white'>04</span> Published posts</p>
          <h1 className='font-CreteRound font-medium text-3xl mt-4 mb-4 dark:text-white'>{authorName.replace('-', ' ')}</h1>
          <p className='text-[#505050] font-WorkSans font-medium dark:text-[#d6d6d6]'>{authorName.replace('-', ' ')} is a writer based in New York City. He's interested in all things tech, science, and photography related, and likes to yo-yo in his free time.</p>
          <p className='text-[#505050] font-WorkSans font-medium mt-6 dark:text-[#d6d6d6]'>Follow him <a href='https://twitter.com/chris-impey' className='text-black underline dark:text-[#d6d6d6]'>on Twitter</a></p>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-[70px] px-3 mt-[100px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1320px] mx-auto'>
        {blogs?.map((blog) => (
          <BlogList 
            key={blog.id}
            blog={blog} 
            id={blog.id}
          />
        ))}
      </div>
    </section>
  )
}
