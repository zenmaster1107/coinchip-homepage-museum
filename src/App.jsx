import { useEffect, useState } from 'react'
import Chrome from './Chrome.tsx'
import LeftDock from './LeftDock.tsx'
import PageContent from './PageContent.tsx'
import RightDock from './RightDock.tsx'
import './design-tokens.css'
import './primitives.css'
import {
  accountByPage,
  pageById,
  pillItems,
  recentActivity,
  utilityItems,
} from './mockData.ts'

const PAGE_IDS = new Set(pillItems.map((item) => item.id))

function getInitialPage() {
  const params = new URLSearchParams(window.location.search)
  const candidate = params.get('page')
  return candidate && PAGE_IDS.has(candidate) ? candidate : 'trade'
}

export default function App() {
  const [activePage, setActivePage] = useState(getInitialPage)

  useEffect(() => {
    const url = new URL(window.location.href)
    url.searchParams.set('page', activePage)
    window.history.replaceState({}, '', url)
    document.title = `${pageById[activePage].title} | Coinchip`
  }, [activePage])

  return (
    <Chrome
      leftDock={
        <LeftDock
          activity={recentActivity}
          navigation={pillItems}
          activeId={activePage}
          onSelectPage={(item) => setActivePage(item.id)}
        />
      }
      rightDock={<RightDock account={accountByPage[activePage]} utilities={utilityItems} />}
    >
      <section className="cc-pageCanvas">
        <PageContent page={pageById[activePage]} />
      </section>
    </Chrome>
  )
}
