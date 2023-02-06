import { NextPage } from "next"
import Link from "next/link"

interface Props {
    userName: string
}

const TimelinePage: NextPage<Props> = ({ userName }) => {
    return (
        <>
            <h1>This is the timeline of {userName}</h1>
            <Link href="/">Go Home</Link>
        </>
    )
}

TimelinePage.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const {userName} = data
        return {userName}
    })
}

export default TimelinePage