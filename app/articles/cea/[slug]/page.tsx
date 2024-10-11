import Layout from "@/app/components/Layout";
import { ArticleHeader } from "@/app/components/MoveTo";

export default function Article() {
	return (
		<Layout>
			<article className="pt-[90px] w-full min-h-screen flex justify-center">
				<div className="container p-2 lg:p-8">
					<ArticleHeader
						author='Abhinesh Sharma'
						avatar='https://github.com/shadcn.png'
						fallback='CEA'
						title="This is a article from CEA. Let's talks about it."
						date='11 Oct 2024'
					>
						This is the description of the article. This is the description of the article. This is the description of the article.
						This is the description of the article. This is the description of the article.
						This is the description of the article. This is the description of the article. This is the description of the article.
						This is the description of the article. This is the description of the article.
					</ArticleHeader>
				</div>
			</article>
		</Layout>
	);
};
