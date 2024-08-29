import React from 'react';
import { NavLink } from "react-router-dom";

function Home() {
    const products = [
        {
            id: 1,
            imageAlt: "product_1",
            imageSrc: undefined,
            name: "product_1",
            href: "/product/1",
            color: "blue",
            price: 10
        },
        {
            id: 2,
            imageAlt: "product_1",
            imageSrc: undefined,
            name: "product_1",
            href: "/product/2",
            color: "blue",
            price: 10
        },
        {
            id: 3,
            imageAlt: "product_1",
            imageSrc: undefined,
            name: "product_1",
            href: "/product/3",
            color: "blue",
            price: 10
        },
        {
            id: 4,
            imageAlt: "product_1",
            imageSrc: undefined,
            name: "/product/4",
            href: "/product/4",
            color: "blue",
            price: 10
        },
    ]


  return (
    <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <NavLink to={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </NavLink>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
