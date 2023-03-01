import Avatar from '../avatar'

interface Props {
  username: string
  message: string
  id: string | number
  avatar: string
}

const Devit = ({username, message, id, avatar}: Props) => {
  console.log({id})
  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>
      <style jsx>{`
        article {
          border-bottom: 2px solid #eaf7ff;
          display: flex;
          padding: 10px 15px;
        }
        div {
          padding-right: 10px;
        }
        p {
          line-height: 1.3125;
          margin: 0;
        }
      `}</style>
    </>
  )
}

export default Devit
