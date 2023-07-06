import Link from "next/link"

export default function writings() {
  return (
    <div> 
      <Link href={'/writings/blog'}>Blog Page</Link>
      <Link href={''}>Research Page</Link>
    </div>
  )
}
