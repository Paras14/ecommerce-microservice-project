import { useParams } from 'react-router-dom'

export default function ProductPageDetails() {
  
  const products = [
    {
        id: 1,
        imageAlt: "product_1",
        imageSrc: undefined,
        name: "product_1",
        href: "abc",
        color: "blue",
        price: 10,
        description:"This is description for product 1",
        details:"Details of the product"
    },
    {
        id: 2,
        imageAlt: "product_1",
        imageSrc: undefined,
        name: "product_1",
        href: "abc",
        color: "blue",
        price: 10,
        description:"This is description for product 2",
        details:"Details of the product"
    },
    {
        id: 3,
        imageAlt: "product_1",
        imageSrc: undefined,
        name: "product_1",
        href: "abc",
        color: "blue",
        price: 10,
        description:"This is description for product 3",
        details:"Details of the product"
    },
    {
        id: 4,
        imageAlt: "product_1",
        imageSrc: undefined,
        name: "product_1",
        href: "abc",
        color: "blue",
        price: 10,
        description:"This is description for product 4",
        details:"Details of the product"
    },
  ];
  const { productId } = useParams();
  const productID = Number(productId);
  const product = products.filter((product) => product.id === productID)[0];
  console.log("product: ", product);
  return (
    <div className="bg-white">
      <div className="pt-6">
          <li className="text-sm">
            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
              {product.name}
            </a>
          </li>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

            

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}