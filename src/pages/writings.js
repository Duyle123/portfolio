import Link from "next/link"

export default function writings() {
  return (
    <div>writings
      <Link href={'/writings/blog'}>Blog Page</Link>
      <Link href={''}>Research Page</Link>
    </div>
  )
}
