import Head from 'next/head'
import Link from 'next/link'

export default function stats() {
  return (
    <div className="container">
      <Head>
        <title>PSYCE SMP | Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Server Stats
        </h1>
        
        <div className="grid">
          <a className="card">
            <h3>Currently online</h3>
            <p><a className='purple'>5</a> out of <a className='purple'>11</a> people are currently online</p>
          </a>

          <a className="card">
            <h3>Whitelisted Accounts</h3>
            <p>There are currently <a className='purple'>17</a> whitelisted accounts</p>
          </a>

          <a className="card">
            <h3>Uptime</h3>
            <p>The server has been running for <a className='purple'>201</a> days</p>
          </a>

          <a className="card">
            <h3>World size</h3>
            <p>The server's world size is currently <a className='purple'>42gb</a></p>
          </a>
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

        .purple {
           color: #5c37bc;
           text-decoration: none;
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

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
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
