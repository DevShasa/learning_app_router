import Link from "next/link"

export default function NotFound() {
  return (
    <div>
        <h2>Not Found</h2>
        <p>We did not find the page you are looking for</p>
        <Link href="/">Return Home</Link>
    </div>
  )
}
