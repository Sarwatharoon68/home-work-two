import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="container-lg mx-auto px-4 py-20   ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {/* Card 1 */}
        <div className="bg-purple-400 rounded-lg shadow-md p-4 flex flex-col items-center">
          <div className="flex items-center justify-center">
            <Image
              src="/img"
              alt="Product One"
              width={300}
              height={300}
              className="w-64 h-64 object-cover rounded-md"

            />
          </div>
          <p className="text-center pt-4 text-fuchsia-800 text-lg">PKR 5,000</p>
          <div className="flex justify-center items-center my-3">
            <button className="px-6 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-700">
              Buy Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className=" rounded-lg shadow-md p-4 flex flex-col items-center bg-purple-400">
          <div className="flex items-center justify-center">
            <Image
              src="/Product2"
              alt="Product Two"
              width={300}
              height={100}
              className="w-64 h-64 object-cover rounded-md"

            />
          </div>
          <p className="text-center pt-4 text-fuchsia-800 text-lg">PKR 5,000</p>
          <div className="flex justify-center items-center my-3">
            <button className="px-6 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-700">
              Buy Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className=" rounded-lg shadow-md p-4 flex flex-col items-center bg-purple-400 ">
          <div className="flex items-center justify-center">
            <Image
              src="/Product3"
              alt="Product Three"
              width={300}
              height={300}
              className="w-64 h-64 object-cover rounded-md"

            />
          </div>
          <p className="text-center pt-4  text-fuchsia-800 text-lg">PKR 5,000</p>
          <div className="flex justify-center items-center my-3">
          <button className="px-6 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-700">Buy Now</button>

          </div>
        </div>
      </div>
    </div>
  );
}
