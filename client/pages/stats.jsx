import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function stats() {
  const API = axios.create({baseURL: 'https://api.mcsrvstat.us/2'})
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    API.get('/mc.dotcheat.com')
    .then(res => {
      setData(res.data)
      console.log(res.data)
      setLoading(false)
    })
    
  }, [])

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
          {loading ? (
            <a className="card">
            <h3>Fetching data...</h3>
            <p><a className='purple' >{data?.players?.online}</a> out of <a className='purple'>{data?.players?.max}</a> people are currently online</p>
          </a>
          ): (
            <a className="card">
            <h3>Currently {data?.online? 'online': 'offline'}</h3>
            <p><a className='purple' >{data?.players?.online}</a> out of <a className='purple'>{data?.players?.max}</a> people are currently online</p>
          </a>
          )}

          <a className="card">
            <h3>{loading? 'Fetching Data': 'Message of the day'}</h3>
            <p>{data?.motd?.clean}</p>
          </a>

          <a className="card">
            <h3>{loading? 'Fetching Data': 'Server Information'}</h3>
            <p>Server software: <a className='purple'>{data?.software}</a></p>
            <p>Server version: <a className='purple'>{data?.version}</a></p>
          </a>

          <a className="card">
            <h3>World size</h3>
            <p>The server's world size is currently <a className='purple'>42gb</a></p>
          </a>

          <p> Online status and Server Information section is working, @Dani M is currently working on the rest! </p>
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
