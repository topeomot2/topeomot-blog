import { promises as fs } from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";


export interface Post {
    postId: string,
    content?: React.JSX.Element,
    meta?: {
        title: string,
        description: string
        tags: string[],
        series?: string,
        published: boolean,
        date?: string
    }
}


export async function getPostDetails(postId: string): Promise<Post> {

    try {
        const directoryPath = path.join(process.cwd(), 'blogs');
        const fileContent = await fs.readFile(`${directoryPath}/${postId}.mdx`, { encoding: 'utf-8' });
        const { frontmatter, content } = await compileMDX({
            source: fileContent,
            options: {
                parseFrontmatter: true,
                mdxOptions: {
                    remarkPlugins: [
                        [remarkGfm]
                    ],
                    rehypePlugins: [
                        [rehypePrism, { ignoreMissing: true }]
                    ]
                }
            },
        });

        return { meta: frontmatter as Post["meta"], content, postId }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return { postId }
    }

}



export async function getFilesByExtension(directoryPath: string, extension: string): Promise<Post[]> {

    const files = await fs.readdir(directoryPath);

    const promises: Promise<Post>[] = [];
    files.forEach(file => {
        const ext = path.extname(file);
        if (ext === extension) {
            const postId = path.basename(file).split(ext)[0];
            promises.push(getPostDetails(postId));
        }
    });

    const posts = await Promise.all(promises);
    posts.filter(post => post.content && post.meta).sort((post1, post2) =>
        Date.parse(post2.meta!.date!) - Date.parse(post1.meta!.date!)
    )
    return posts;
}
