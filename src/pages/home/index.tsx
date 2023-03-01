import Devit from '@/components/devit'
import Layout from '@/components/layout'
import {useEffect, useState} from 'react'

const HomePage = () => {
  const [timeline, setTimeline] = useState<any[]>()

  useEffect(() => {
    fetch('/api/statuses/home_timeline')
      .then(response => response.json())
      .then(setTimeline)
  }, [])

  return (
    <>
      <Layout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline &&
            timeline.map(devit => (
              <Devit
                key={devit.id}
                username={devit.username}
                message={devit.message}
                id={devit.id}
                avatar={devit.avatar}
              />
            ))}
        </section>
        <nav></nav>
      </Layout>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          border-bottom: solid 1px #ccc;
          height: 49px;
          position: sticky;
          top: 0;
          width: 100%;
          background: #fff;
        }
        h2 {
          font-size: 21px;
          font-weight: 800;
        }
         {
          /* section {
          padding-top: 49px;
        } */
        }
        nav {
          bottom: 0;
          position: sticky;
          border-top: solid 1px #ccc;
          width: 100%;
          height: 49px;
          background: #fff;
        }
      `}</style>
    </>
  )
}

export default HomePage
