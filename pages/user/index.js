import Layout from '../../components/Layout'
import Private from '../../components/Private';
import Link from 'next/link'
import React from "react";
import Head from 'next/head'
import { APP_NAME } from '../../config';

const head= () => (
    <Head>
        <title>{APP_NAME} | Dashboard</title>
    </Head>
)

const userIndex = () => {
    return (
        <React.Fragment>
        {head()}
            <Layout>
           <Private>
           <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>User Dashboard</h2>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-group">


                                <li className="list-group-item">
                                        <a href="/user/crud/blog">Create Blog</a>
                                </li>

                                <li className="list-group-item">
                                   
                                <Link href="/user/crud/blogs">
                                        <a>Update/Delete Blog</a>
                                    </Link>
                                    
                                </li>

                                <li className="list-group-item">
                                        <a href="/user/update">Update Profile</a>
                                </li>

                            </ul>
                        </div>
                       
                    </div>
                </div>
           </Private>
         
        </Layout>
        </React.Fragment>
    );
};

export default userIndex;