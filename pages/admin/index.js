
import React from 'react';
import Layout from '../../components/Layout';
import Admin from '../../components/Admin';
import Link from 'next/link';
import Head from 'next/head'
import { APP_NAME } from '../../config';


const head= () => (
    <Head>
        <title>{APP_NAME} | Dashboard</title>
    </Head>
)

const AdminIndex = () => {
    return (
       <React.Fragment>
       {head()}
            <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2 className="text-center">Admin Dashboard</h2>
                        </div>
                        <div className="col-md-4 ">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create Category</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create Tag</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                   
                                        <a href="/admin/crud/blog">Create Blog</a>
                                    
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/blogs">
                                        <a>Update/Delete Blog</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/user/update">
                                        <a>Update Profile</a>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        
                    </div>
                </div>
            </Admin>
        </Layout>
       </React.Fragment>
    );
};

export default AdminIndex;