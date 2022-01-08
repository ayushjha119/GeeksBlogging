import React from 'react';
import Layout from '../../../components/Layout';
import Private from '../../../components/Private';
import BlogCreate from '../../../components/crud/BlogCreate';
import Head from 'next/head'
import { APP_NAME } from '../../../config';

import Link from 'next/link';

const head= () => (
    <Head>
        <title>{APP_NAME} | Create a new blog</title>
    </Head>
)

const CreateBlog = () => {
    return (
       <React.Fragment>
       {head()}
            <Layout>
            <Private>
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
            </Private>
        </Layout>
       </React.Fragment>
    );
};

export default CreateBlog;