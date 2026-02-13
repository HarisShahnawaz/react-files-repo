import React from 'react';

export default function About() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-12 xl:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center md:gap-12 lg:gap-20">
          
          {/* Text Section */}
          <div className="md:w-7/12 lg:w-6/12 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
              React development is carried out by passionate developers
            </h2>
            <p className="text-gray-700 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis voluptatem
              accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
              aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="text-gray-700 text-lg">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
              Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
            </p>
            <button className="mt-4 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-700 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-5/12 lg:w-5/12 flex justify-center">
            <img
              src="https://images.pexels.com/photos/36092292/pexels-photo-36092292.jpeg"
              alt="About React Development"
              loading="lazy"
              className="rounded-xl shadow-2xl w-full max-w-md transform hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
