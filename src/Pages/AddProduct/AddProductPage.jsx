import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const AddProductPage = () => {
  const { user } = useAuth() || {};

  console.log("login user:", user);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imageUrl = form.image.value;
    const brandName = form.brandName.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const email = user?.email;

    const productInfo = {
      name,
      imageUrl,
      brandName,
      category,
      price,
      rating,
      email,
    };
    console.log("product info:", productInfo);

    fetch("http://localhost:5070/addproduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          toast.success("Product has been added successfully!");
        }
      });
  };
  return (
    <section className="max-w-4xl m-4 p-8 mx-auto bg-white rounded-md shadow-md ">
      <h2 className="text-2xl font-bold text-center  capitalize">
        <span className="text-blue-700">Add</span> Your Product
      </h2>

      <form onSubmit={handleAddProduct}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className=" " for="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="" for="image">
              Image
            </label>
            <input
              id="imageURL"
              type="url"
              name="image"
              placeholder="Enter Image URL"
              className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="" for="brandName">
              Brand Name
            </label>
            <select
              required
              className="w-full px-4 py-3 bg-white border  border-blue-300 focus:outline-blue-200 rounded-md"
              name="brandName"
            >
              <option disabled selected>
                Image Design Contests
              </option>
              <option>Article Writing</option>
              <option>Marketing Strategy</option>
              <option>Digital Advertisement Contests</option>
              <option>Gaming Review</option>
              <option>Book Review</option>
              <option>Business Idea Contests</option>
              <option>Movie Review</option>
            </select>
          </div>
          <div>
            <label className="  " for="category">
              Type
            </label>
            <input
              id="category"
              name="category"
              type="text"
              placeholder="Enter type"
              className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className=" " type="number">
              Price
            </label>
            <input
              id="number"
              type="number"
              name="price"
              className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className=" " for="rating">
              Rating
            </label>
            <input
              id="rating"
              type="text"
              name="rating"
              placeholder="Enter Rating"
              className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="flex justify-center w-full mt-6">
          <button className="w-full h-8 leading-5 text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-green-600">
            Add Product
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProductPage;
