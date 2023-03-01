import styles from './styles.module.css'

interface Props {
  src: string
  alt: string
  text?: string
}

const Avatar = ({src, alt, text}: Props) => {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} alt={alt} src={src} />
      {text && <strong>{text}</strong>}
    </div>
  )
}

export default Avatar
