import React from "react";

const Contact = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg my-32">
        <h2 className="text-center">Get in Touch</h2>
        <p className="text-3xl font-bold text-gray-800 mb-2  text-center">Contact me</p>
        <p className="text-gray-500 mb-8 text-center">
          Listen ipram dolor sit amet, consectetur adipiscing elit.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">First name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Last name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Choose a topic</label>
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option disabled defaultValue>
                Select one...
              </option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className=" bg-[#5E3BEE] text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
