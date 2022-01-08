import Layout from '../components/Layout';
import SignupComponent from '../components/auth/SignupComponent';
import Link from 'next/link';
import React from "react";
import Head from 'next/head'
import { APP_NAME } from '../config';

const head= () => (
    <Head>
        <title>{APP_NAME} | Signup</title>
    </Head>
)


const Signup = () => {
    return (
      <React.Fragment>
      {head()}
            <Layout>
            <h2 className="text-center pt-4 pb-4">Signup</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <SignupComponent />
                </div>
            </div>
        </Layout>
      </React.Fragment>
    );
};

export default Signup;