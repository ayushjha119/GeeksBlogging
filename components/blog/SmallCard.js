
import Link from "next/link"

import { API } from '../../config'
import { Parser } from 'html-to-react'
import moment from 'moment'


const SmallCard = ({blog}) => {

    return (
    <div className="card">
    <section>
        <Link href={`/blogs/${blog.slug}`}>
            <a style={{ textDecoration: 'none' }}>
              <img className="img img-fluid" 
                style={{height: '250px',width: '100%'}}
                 src={`${API}/blog/photo/${blog.slug}`} 
                 alt={blog.title}

                 />
            </a>
        </Link>
    </section>


    <div className="card-body">
    <section>
        <Link href={`/blogs/${blog.slug}`}>
            <a style={{ textDecoration: 'none' }}>
            <h5 className="card-title">{blog.title}</h5>
            </a>
        </Link>
        <p className="card-text">{Parser().parse(blog.excerpt)}</p>
    </section>
    </div>
    <div className="card-body">
      
          Posted {moment(blog.updatedAt).fromNow()} by{' '} <Link href={`/profile/${blog.postedBy.username}`}><a className="float-right" >{blog.postedBy.username}</a></Link>
        

    </div>
 
    </div>

 )
}

export default SmallCard