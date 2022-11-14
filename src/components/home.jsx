import React from "react";
import image from "../canyon.JPG";

export const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="Grand Canyon"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-center text-green-100 font-bold leading-none lg:leading-snug home-name">
          Hi. I'm Jordan
        </h1>
      </section>
    </main>
  );
};
