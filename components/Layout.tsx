import Head from 'next/head'

import HeaderLink from './HeaderLink'
import Footer from './Footer'

interface Title {
  children: React.ReactNode
  title: string
}

const Layout: React.FC<Title> = ({ children, title = 'Nextjs' }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <HeaderLink path="/" testId="home-nav" label="Home" />
              <HeaderLink path="/blog-page" testId="blog-nav" label="Blog" />
              <HeaderLink
                path="/comment-page"
                testId="comment-nav"
                label="Comment"
              />
              <HeaderLink
                path="/context-page"
                testId="context-nav"
                label="Context"
              />

              <HeaderLink path="/task-page" testId="task-nav" label="Todos" />
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
