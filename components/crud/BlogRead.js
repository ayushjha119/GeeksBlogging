import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";
import { getCookie,isAuth } from "../../actions/auth";
import { list, removeBlog } from "../../actions/blog";
import moment from "moment";
import { Button } from "reactstrap";


const BlogRead = ({username}) => {

    const [blogs, setBlogs] = useState([])
    const [message, setMessage] = useState('')
    const token = getCookie('token')

    useEffect(() => {
        loadBlogs()
    },[])

    const loadBlogs = () => {
        list(username).then(data => {
            if(data.error){
                console.log(data.error)
            }else {
                setBlogs(data);
            }
        })
    }


    const deleteBlog = (slug) => {
        removeBlog(slug, token).then(data => {
            if(data.error){
                console.log(data.error)
            }else{
                setMessage(data.message)
                loadBlogs()
            }
        })
    }


    const deleteConfirm = (slug) => {
        let answer = window.confirm('Are you sure you want to delete the blog?')
        if(answer){
            deleteBlog(slug)
        }
    }

    const showUpdateButton = (blog) => {
        if(isAuth() && isAuth().role === 0)
        {
            return (
                
                    <a href={`/user/crud/${blog.slug}`} className="ms-2 btn btn-sm btn-warning">Update</a>
                
            )
        }else if(isAuth() && isAuth().role === 1){
            return(
                //<Link href={`/admin/crud/${blog.slug}`}>
                    <a className="ms-2 btn btn-sm btn-warning" href={`/admin/crud/${blog.slug}`}>Update</a>
                //</Link> 
            )
        }
    }

    const showAllBlogs = () => {
        return blogs.map((blog , i) =>{
            return(
                <div key={i} className="pb-5">
                    <h3>{blog.title}</h3>
                    <p className="mark"> Written by {blog.postedBy.name} | Published on {moment(blog.updatedAt).fromNow()}</p>
                <Button className="btn btn-sm btn-danger" onClick={() =>deleteConfirm(blog.slug)}>Delete</Button>
                {showUpdateButton(blog)}
                </div>
                
            )
        })
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    {message && <div className="alert alert-warning">{message}</div>}
                    {showAllBlogs()}
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default BlogRead;