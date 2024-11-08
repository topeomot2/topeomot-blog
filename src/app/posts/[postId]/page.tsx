import { getPostDetails } from "@/app/utils";
import { format } from "date-fns/format";





export default async function Page({ params }: { params: { postId: string } }) {
    const { meta, content } = await getPostDetails(params.postId);
    return <>
        <div className="mb-5">
            <div className="text-xl font-bold text-slate-700 dark:text-slate-200">{meta.title}</div>
            <div className="text-sm">{meta.date && format(new Date(Date.parse(meta.date)), "PPP")}</div>
        </div>
        {content}

    </>
}