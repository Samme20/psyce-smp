import Head from 'next/head'
import Link from 'next/link'
const axios = require('axios')

export default function rules() {    
    return (
    <div className="container">
      <Head>
        <title>PSYCE SMP | Rules</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Rules & terms
        </h1>

        <p className="description">
          By requesting a whitelist you agree to the following rules:
        </p>

        <ul type="none">
            <li className="description">
              <code>§ You may only deprive someone of their life if you and the offendant <i>both</i> have more than <i>1</i> death.</code>
            </li>
            <li className="description">
                <code>§ You may only grief somone else's belongings if it's judged aggrovated by a judge. This includes to <i>some</i> degree; stealing.</code>
            </li>
            <li className="description">
                <code>§ Hacked clients aswell as anything that gives you any kind of assistance (x-ray, kill aura, etc) are strictly forbidden.</code>
            </li>
            <li className="description">
                <code>§ Dont be a <a className='underline' href='https://www.urbandictionary.com/define.php?term=Cock%20vore' target="_blank">cock vorer</a></code>
            </li>
        </ul>

        <Link href="/whitelist">
          <a className='d-link'>
            Agree to terms
          </a>
        </Link>


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

        .d-link{
          margin-top: 2rem;
          padding: 1rem;
          font-size: 2rem;
          font-weight: 600;
          border: solid grey 2px;
          transition: border-color 0.3s ease;
        }

        .d-link:hover{
          border: solid #5c37bc 2px;
          transition: border-color 0.1s ease;
        }

        .underline {
          text-decoration: underline;
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
