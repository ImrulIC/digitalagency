import React from "react";

async function getData() {
  const response = await fetch("https://agency.teamrabbil.com/api/BrandList");
  if (!response.ok) {
    throw new Error("BrandList api failed");
  }
  const data = await response.json();
  return data;
}

const Brand = async () => {
  const brandData = await getData();

  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-2">
            {brandData.map((item) => {
              const { id, image, name } = item;
              return (
                <div key={id} className="mb-4 w-full md:w-1/2 lg:w-1/4 px-2">
                  <div className="py-16 bg-gray-50 rounded">
                    <a href="#">
                      <img className="mx-auto h-8" src={image} alt={name} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
