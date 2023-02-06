import Head from "next/head"

interface Props {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <>
            <Head>
                <title>Twitter For Devs</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {children}
            </main>
        </>

    )
}

export default Layout