import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-100 p-8 w-full overflow-hidden shadow-md rounded-md">
          <div className="mb-5">
            <label className="block mb-2 text-lg font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border border-gray-400 p-2 pr-4 rounded w-full text-lg"
              placeholder="Name"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-lg font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border border-gray-400 p-2 pr-4 rounded w-full text-lg"
              placeholder="Email"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 text-lg transition cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
