import { getAllNodes } from 'next-mdx/server'
import Link from 'next/link';
import {motion} from "framer-motion";

function BlogPage({posts}){
    return  <motion.div
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -5, opacity: 0 }}
        transition={{ duration: 0.4 }}
    >
    <div className="site-container pb-16">
        <div className="space-y-4">

            {posts.map(post=>{
                return <article key={post.url}>
                    <div className=" border-4 border-opacity-60 border-dark-blue
                    space-y-8 p-5 rounded-[24px] text-center">
                        <div className="flex flex-col  items-center justify-center">
                            <Link href={post.url}>
                                <a><img src={post.frontMatter.image} width={300} className="rounded-full max-h-[10rem]" alt=""/></a>
                            </Link>
                            <h2 className="text-xl font-bold text-light-blue hover:text-dark-blue
                         ease-in-out duration-150 mt-4">
                                <Link href={post.url}>
                                    <a>{post.frontMatter.title}</a>
                                </Link>
                            </h2>

                        </div>
                        <p className="text-semi-blue">{post.frontMatter.excerpt}</p>
                        <div className="text-slate-600" >
                            <span>{post.frontMatter.date}</span>
                        </div>
                    </div>
                </article>
            })}
        </div>


    </div>
    </motion.div>
}
export async function getStaticProps() {
    return {
        props: {
            posts: await getAllNodes("post"),
        },
    }
}

export default BlogPage