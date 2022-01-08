
import Link from "next/link"

import { API } from '../../config'
import { Parser } from 'html-to-react'
import moment from 'moment'


const Card = ({blog}) => {
    const showBlogCategories = blog => 
        blog.categories.map((c,i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className="btn btn-secondary mr-1 ms-2 mt-3">{c.name}</a>
            </Link>
        ))
    


    const showBlogTags = blog => 
        blog.tags.map((t,i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-warning mr-1 ms-2 mt-3">{t.name}</a>
            </Link>
        ))

    

    return(
        <div className="lead pb-4">
        <header> 
            <Link href={`/blogs/${blog.slug}`} >
                <a class="text-success" style={{ textDecoration: 'none' }} >
                    <h2 className=" pt-3 pb-3 font-weight-bold">{blog.title}</h2>
                </a>
            </Link>
        </header>
        <section>
           <p className="mark ml-1 pt-2 pb-2">
                Written by <Link href={`/profile/${blog.postedBy.username}`}><a>{blog.postedBy.username}</a></Link> | Published {moment(blog.updatedAt).fromNow()}
           </p>
        </section>
    <section>
        {showBlogCategories(blog)}
        {showBlogTags(blog)}
        <br />
        <br />
        <br />
    </section>
    <div className="row">
        <div className="col-md-4">
            <section>
                <img className="img img-fluid" 
                style={{maxHeight: 'auto',width: '100%'}}
                 src={`${API}/blog/photo/${blog.slug}`} 
                 alt={blog.title}

                 />
            </section>
        </div>
        <div className="col-md-8">
        <section>
            <div className="pb-3">
             {Parser().parse(blog.excerpt)}
            </div>
            <Link href={`/blogs/${blog.slug}`}>
                <a className="btn btn-info pt-2">Read more</a>
            </Link>
        </section>
        </div>
    </div>
</div>
    )
}

export default Card