import Document, { Html, Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
  
  setGoogleTags(){
    if(publicRuntimeConfig.PRODUCTION){
      return {
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-PZ1MNGRQGH');
        
        `
      }
    }
  }
  

  render() {
    return (
      <Html lang="en">
            
        <Head>
            {/* <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
            <link rel="shortcut icon" href="/static/favicon.ico" />
            <link 
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css"

            />
            <link rel="stylesheet" href="/static/css/styles.css" />
            {/* <link
               href="https://cdn.quilljs.com/1.3.6/quill.snow.css"
                rel="stylesheet"
             /> */}


            <link
               href="https://cdn.quilljs.com/1.3.7/quill.snow.css"
                rel="stylesheet"
             />




            <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
            />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-PZ1MNGRQGH"></script>
           <script dangerouslySetInnerHTML={this.setGoogleTags()}/>
           
        </Head>
        <body>
          <Main /> 
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument