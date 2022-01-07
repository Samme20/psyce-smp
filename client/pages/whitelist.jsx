import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import CopyIcon from '../resources/copy.png'
import { useToast } from '@chakra-ui/react'




export default function whitelist() {
  const [reveal, setReveal] = useState(true);
  const toast = useToast()

  function copyAlert() {
    navigator.clipboard.writeText("mc.dotcheat.com");
    toast({
      title: 'Copied to clipboard!',
      status: 'success',
      duration: 1000,
      isClosable: false,
    })
  }

  return (
    <div className="container">
      <Head>
        <title>PSYCE SMP | Whitelist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          You're almost ready to play!
        </h1>

        <p className="description">
          Follow the few steps below and you'll be online in no time.
        </p>
        
        <div className="grid">

          <a href="https://discord.gg/KXxNQuMac3" target="__blank" className="card">
            <h3>1. Join our discord</h3>
            <p>You need to join our discord to play on the minecraft server.</p>
          </a>

          <a className="card" onClick={console.log("change state to reveal, reveals ip. Nextjs onclick event.")}>
            <h3>2. Get the MC server IP</h3>
            <p>
              {reveal? 
              <code onClick={copyAlert}>mc.dotcheat.com <Image width='14px' height='14px' src={CopyIcon} alt='copy icon'></Image></code>
               : 'Click to reveal IP. Then join and follow the steps.'}
            </p>
          </a>

          <p className='basis'>If you need any further assistance, check out our <Link href='/faq'><a className='underline'>FaQ page</a></Link> or ask us in the PSYCE discord server.</p>

        </div>

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

        .icon-width {
          width: 10px;
          height: 10px;
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

        .underline {
          text-decoration: underline;
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

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          box-shadow: 3px 3px 5px 0.1 black;
          border-radius: 5px;
          transition: color 0.1s ease, border-color 0.1s ease;
        }

        
        .card:hover,
        .card:focus,
        .card:active {
          color: #5c37bc;
          border-color: #5c37bc;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .basis {
          padding: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        code:hover {
          cursor: pointer;
        }

        @media (max-width: 600px) {
          .container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
          }
          .grid {
            width: 100%;
            flex-direction: column;
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
