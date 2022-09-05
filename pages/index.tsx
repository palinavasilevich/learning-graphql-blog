import Head from "next/head";
import { FC } from "react";
import { Categories, PostCard, PostWidget } from "../components";
import { getPosts } from "../services";
import { IPost } from "../types/types";

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

type HomePropsType = {
  posts: IPost[];
};

const Home: FC<HomePropsType> = ({ posts }) => (
  <div className="container mx-auto px-10 mb-8">
    <Head>
      <title>Blog</title>
      <link rel="icon" href="/favicon.icon" />
    </Head>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 col-span-1">
        {posts.map((post) => (
          <PostCard post={post.node} key={post.node.title} />
        ))}
      </div>
      <div className="lg:col-apn-4 col-span-1">
        <div className="lg:sticky relative top-8">
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
