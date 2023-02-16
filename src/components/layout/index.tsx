import styles, {globalStyles} from './styles'

interface Props {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}

export default Layout
