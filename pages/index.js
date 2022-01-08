import Layout from '../components/Layout';
import Link from 'next/link';
import React from "react";
import Head from 'next/head'
import { APP_NAME } from "../config";

const head= () => (
    <Head>
        <title>{APP_NAME} | PROGRAMMING & DEVELOPMENT BLOGS/TUTORIALS</title>
    </Head>
)


const Index = () => {
    return (
       <React.Fragment>
       {head()}
            <Layout>
            <article className="overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-4 fw-bold">
                                PROGRAMMING & DEVELOPMENT BLOGS/TUTORIALS
                            </h1>
                        </div>
                    </div>
                </div>

                <br />

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-4 pb-5">
                            <p className="lead">
                                Best Programming , Web development, Mathematics and Machine learning blogs and tutorials are available on GeeksBlogging.
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://cdn.pixabay.com/photo/2015/12/09/15/51/code-1084923_960_720.png' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Programming</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/programming">
                                        <a>
                                            <h3 className="h1">Programming</h3>
                                        </a>
                                    </Link>
                                    <h5 className="lead">"First, solve the problem. Then, write the code."</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://cdn.pixabay.com/photo/2016/12/09/22/10/programming-1896158_960_720.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Android development</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/android">
                                        <a>
                                            <h3 className="h1">Android development</h3>
                                        </a>
                                    </Link>
                                    <h5 className="lead">
                                    “If debugging is the process of removing software bugs, then programming must be the process of putting them in”
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Web development</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/web">
                                        <a>
                                            <h3 className="h1">Web development</h3>
                                        </a>
                                    </Link>
                                    <h5 className="lead">“A website without visitors is like a ship lost in the horizon.”</h5>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://cdn.pixabay.com/photo/2021/12/21/06/27/line-6884685_960_720.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Machine learning</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/ML">
                                        <a>
                                            <h3 className="h1">Machine learning</h3>
                                        </a>
                                    </Link>
                                    <h5 className="lead">
                                    “Machine intelligence is the last invention that humanity will ever need to make.”
                                    </h5>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://cdn.pixabay.com/photo/2016/06/09/19/31/pie-1446373_960_720.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Mathematics</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/maths">
                                        <a>
                                            <h3 className="h1">Mathematics</h3>
                                        </a>
                                    </Link>
                                    <h5 className="lead">
                                        "Go down deep enough into anything and you will find mathematics."
                                    </h5>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://cdn.pixabay.com/photo/2017/03/07/20/35/climb-2125148_960_720.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Miscellaneous</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/others">
                                        <a>
                                            <h3 className="h1">Miscellaneous</h3>
                                        </a>
                                    </Link>
                                    <h5 className="lead">
                                    "It's never too late to be what you might have been."
                                    </h5>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </article>
        </Layout>
       </React.Fragment>
    );
};

export default Index;