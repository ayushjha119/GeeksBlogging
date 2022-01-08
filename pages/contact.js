import Layout from '../components/Layout';
import Link from 'next/link';
import React from "react";
import Head from 'next/head'
import { APP_NAME } from '../config';
import ContactForm from '../components/form/ContactForm';

const head= () => (
    <Head>
        <title>{APP_NAME} | contact developer</title>
    </Head>
)

const Contact = () => {
    return (
       <React.Fragment>
       {head()}
            <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2>Contact form</h2>
                        <hr />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </Layout>
       </React.Fragment>
    );
};

export default Contact;