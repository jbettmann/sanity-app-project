import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import image from "../canyon.JPG";
import imageUrlBuilder from "@sanity/image-url";
import BlockContect from "@sanity/block-content-to-react";

export const About = () => {
  // variable used in function
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'author']{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, [author]);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <img src={image} alt="canyon" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-15 h-30 lg:w-30 lg:h-60 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-centet">
            <h1 className="text-6ls text-green-300 mb-4">
              Hey there. I'm{" "}
              <span className="text-red-100 font-bold">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContect
                blocks={author.bio}
                projectId="s67te8sq"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
