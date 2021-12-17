import Head from 'next/head'
import Link from 'next/link'
const axios = require('axios')
import { getUserDetails } from '../utils/axios'


function Whitelist() {
    return (
    <div className="container">
      <Head>
        <title>PSYCE SMP | Whitelist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>lol</p>
      </main>

      <footer>
        <a>
          website by &#169;STHLM Preclarus
        </a>
        
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        form{
            display: flex;
            align-items: center;
            margin-top: 5rem;
            flex-direction: column;
        }

        form input{
            font-size: 2rem;
            border: none;
            border-bottom: 2px solid black;
            text-align: center;
        }

        form input:focus{
            outline: none;
        }

        form button{
            background-color: white; 
            color: black; 
            border: 2px solid #5c37bc;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        ul{
            text-align: center;
            padding: 0;
        }
        ul *{
            margin-bottom: 1rem;
        }

        code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

        footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        @media (max-width: 600px) {
          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          main {
            width: 90%;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          ul *{
            margin-bottom: 1rem;
        }
          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 3rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await getUserDetails();

  return {
    props: { data: res.data },
  };
};

export default Whitelist


