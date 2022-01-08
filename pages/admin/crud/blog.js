import React from 'react';
import Layout from '../../../components/Layout';
import Admin from '../../../components/Admin';
import BlogCreate from '../../../components/crud/BlogCreate';
import Head from 'next/head'
import { APP_NAME } from '../../../config';
import Link from 'next/link';

const head= () => (
    <Head>
        <title>{APP_NAME} | Create a new blog</title>
    </Head>
)

const Blog = () => {
    return (
       <React.Fragment>
       {head()}
            <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Create a new blog</h2>
                        </div>
                        <div className="col-md-12">
                            <BlogCreate />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
       </React.Fragment>
    );
};

export default Blog;