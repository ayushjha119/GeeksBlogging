import Layout from "../components/Layout";
import React from "react";
import Head from 'next/head'
import { APP_NAME } from "../config";

const head= () => (
    <Head>
        <title>{APP_NAME} | about</title>
    </Head>
)
const About = () => {
    
    return(
    <React.Fragment>
        {head()}
          <Layout>
            <div className="container">
                    <h2 className="text-success text-center">Hello, welcome to GeeksBlogging (Multiuser programming blogging website) </h2>
                    
                    <h4 className="text-warning text-center">Here i will guide you how to use this platform</h4>
                    <p className="text-secondary">
                    <ul>
                        <li>
                            First of all a user have to create account on this website 
                            for which they have two options.
                           <ul>
                           <li>
                                Login via google.
                            </li>
                            <li>
                                Signup using email and password.
                            </li>
                           </ul>
                           <p>Login via google is very simple and easy to use method as available on other websites.<br />
                           If a user wish to use signup using email, he/she can also do that here for that he/she will receive a<br /> link in 
                           his/her email. a user have to verify that link by clicking on that link/token within 10 min.<br />
                           I had to implement this link verification for account creation to avoid spam user email<br />
                           </p>
                            
                        </li>
                        <li>
                            <p>
                                After login a user have many options such as:
                                <ul>
                                    <li>
                                        A user can create, update, read, and delete their blogs.
                                    </li>
                                    <li>
                                        A user can update his/her username, profile photo, about and password <br />
                                        by visiting user's dashboard and then update profile
                                    </li>
                                    <li>
                                        A user can comment on any blog post or  give personal compliment/send message <br />
                                        to blog author by clicking on their user name and visiting their profile
                                    </li>
                                    <li>
                                        If anyone wants to give suggestion or want me to add more categories, tags<br /> you can go to contact which is 
                                        present on navbar and send your message to me.
                                    </li>
                                </ul>
                            </p>
                        </li>
                    </ul>
                    </p>

                    <h5>
                        NOTE: Please Don't post unnecessary things. If you get caught legal action will be taken against you. So please don't ruin my project as removing those
                         unnecessary
                        posted things from website will take time and i don't have time to keep an eye on everyone's post.
                    </h5>
                    
            </div>
        </Layout>
    </React.Fragment>
      
    )
}

export default About;