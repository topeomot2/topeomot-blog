import path from "path";
import Link from "next/link";
import { format } from "date-fns/format";
import { getFilesByExtension } from "./utils";

export default async function Page() {
  const directoryPath = path.join(process.cwd(), "blogs");
  const extension = ".mdx";
  const files = await getFilesByExtension(directoryPath, extension);
  return (
    <>
      <div className="container pb-5 italic">
        Hi, I&#39;m Tope. I am a Software Developer and this is my personal blog
        to share things I have learnt and applied in my journey as a Human and
        Programmer.
      </div>

      {files.map((file, index) => {
        return (
          <div
            key={index}
            className="mb-5 w-full rounded border border-slate-500 p-5"
          >
            <Link
              href={`posts/${file.postId}`}
              className="text-base font-bold text-slate-700 hover:underline dark:text-slate-200"
            >
              {file.meta!.title}
            </Link>
            <div className="text-sm">{file.meta!.description}</div>
            <div>
              {file.meta!.date &&
                format(new Date(Date.parse(file.meta!.date)), "PPP")}
            </div>
          </div>
        );
      })}
    </>
  );
}
