import Head from 'next/head'
import Link from 'next/link'



export default function faq() {
  return (
    <div className="container">
      <Head>
        <title>PSYCE SMP | FaQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Frequently Asked Questions
        </h1>

        
        <div className='list'>
            <ul>
                <li>
                    <h2>How do I join?</h2>
                    <p>Follow the steps on this website, find it <Link href='/'><a className='underline'>here</a></Link>.</p>
                </li>
                <li>
                    <h2>Do I need a discord account?</h2>
                    <p>Yes, you need a discord account.</p>
                </li>
                <li>
                    <h2>Cant get into MC server?</h2>
                    <p>
                        Once you join the MC server, take note of the code that is presented to you. After that go into the
                        psyce discord server and find the bot, private message him the code. Then you should have access.
                    </p>
                </li>
                <li>
                    <h2>Where can I find server stats?</h2>
                    <p>
                        In our discord server, but you can also find stats on <Link href='stats'><a className='underline'>this page</a></Link>.
                    </p>
                </li>
                <li>
                    <h2>Any further problems?</h2>
                    <p>Don't be afraid to ask us in the PSYCE discord server! Join <a href="https://discord.gg/KXxNQuMac3" className='underline' target="__blank">here</a>.</p>
                </li>
            </ul>
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

        .list {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 1rem;
        }

        .list h2 {
            margin-bottom: -10px;
        }

        footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .underline {
            text-decoration: underline;
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

        .title {
          text-align: center;
        }

        

        @media (max-width: 600px) {
          .container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
          }
          .list {
              width: 100%;
              padding: 10px;
          }
          .list h2 {
            font-size: 1.4rem;
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
