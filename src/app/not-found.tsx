import Link from "next/link";

export default async function NotFound() {

    return <div className="container text-xl font-bold text-center">

        <h2>Not Found</h2>
        <Link href="/" className="underline">Return Home</Link>
    </div>
}