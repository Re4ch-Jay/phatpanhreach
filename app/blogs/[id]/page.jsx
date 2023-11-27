import Image from "next/image";
import BlogDetail from "./BlogDetail";
import { blogs } from '@/data/blog';

export async function generateMetadata({ params }, parent) {
  const matchingBlog = blogs.find(blog => blog.id === params.id);

  const image = matchingBlog.image || '/banner.png';

  return {
    title: matchingBlog.title,
    description: matchingBlog.description,
    images: image,
    openGraph: {
      title: matchingBlog.title,
      description: matchingBlog.description,
      images: [
        {
          url: image,
          secureUrl: image,
          width: 1200,
          height: 630,
          alt: matchingBlog.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@panhareach_phat',
      title: matchingBlog.title,
      description: matchingBlog.description ,
      creator: '@panhareach_phat',
      images: {
        url: image,
        alt: matchingBlog.title,
      }
    },
  };
}

export default function BlogDetailPage({ params }) {
  const matchingBlog = blogs.find(blog => blog.id === params.id);
  const image = matchingBlog.image || '/banner.png';
  return (
    <>
      <div className="container mx-auto max-w-screen-lg px-4 py-5 bg-gray-900 rounded-lg shadow-lg mt-10">
        <div className="flex justify-center items-center">
          <img alt={params.id} src={image} className="w-80 md:w-auto md:h-96"  />
        </div>
        <BlogDetail fileName={params.id} />
      </div>
    </>
  );
}
