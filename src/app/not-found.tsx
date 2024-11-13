import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="container text-center text-xl font-bold">
      <h2>Not Found</h2>
      <Link href="/" className="underline">
        Return Home
      </Link>
    </div>
  );
}
