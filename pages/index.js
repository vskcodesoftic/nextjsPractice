import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>home page</h1>
    <ul>
      <li>
         <Link  href="/portfolio">Portfolio</Link>
      </li>
    </ul>
    </div>
  )
}
