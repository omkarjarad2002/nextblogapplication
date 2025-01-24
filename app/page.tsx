import Image from "next/image";
import classNames from "classnames";

export default function Home() {
  const stats = [
    {
      name: "Revenue",
      value: "$405,091.00",
      change: "+4.75%",
      changeType: "positive",
    },
    {
      name: "Overdue invoices",
      value: "$12,787.00",
      change: "+54.02%",
      changeType: "negative",
    },
    {
      name: "Outstanding invoices",
      value: "$245,988.00",
      change: "-1.39%",
      changeType: "positive",
    },
    {
      name: "Expenses",
      value: "$30,156.00",
      change: "+10.18%",
      changeType: "negative",
    },
  ];
  return (
    <main>
      <div className="">
        {/* Hero Section */}

        <div className="">
          {/* Hero Section */}
          {/* <div className="bg-gradient-to-r from-teal-400 to-blue-500 h-96 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="flex items-center justify-center h-full z-10">
              <h1 className="text-5xl font-bold text-white shadow-lg transform transition-transform duration-500 hover:scale-110 hover:translate-y-2">
                Welcome to Our Blog
              </h1>
            </div>
          </div> */}
          <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2  px-4 py-10 sm:px-6 xl:px-8"
              >
                <dt className="text-sm/6 font-medium text-gray-4">
                  {stat.name}
                </dt>
                <dd
                  className={classNames(
                    stat.changeType === "negative"
                      ? "text-rose-600"
                      : "text-gray-700",
                    "text-xs font-medium"
                  )}
                >
                  {stat.change}
                </dd>
                <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-500">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Other sections can go here */}
        </div>
        {/* Subscription Section */}
        <div className=" py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-6">
            Stay updated with the latest blog posts and news.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-lg focus:outline-none border-black"
          />
          <button className="bg-blue-500  py-2 px-4 rounded-r-lg hover:bg-blue-400 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>

      <div className=" py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold  mb-8">Choose Your Plan</h2>
          <p className="text-lg text-gray-600 mb-12">
            Flexible pricing options to suit your needs.
          </p>
          <div className="flex justify-center space-x-4">
            {/* Basic Plan */}
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-gray-800">Basic</h3>
              <p className="text-4xl font-bold text-gray-800 mt-4">$10</p>
              <p className="text-gray-600 mb-4">per month</p>
              <ul className="mb-6">
                <li className="mb-2">✔️ Feature 1</li>
                <li className="mb-2">✔️ Feature 2</li>
                <li className="mb-2">❌ Feature 3</li>
              </ul>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                Get Started
              </button>
            </div>

            {/* Standard Plan */}
            <div className="bg-blue-500 text-white shadow-lg rounded-lg p-6 max-w-xs transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold">Standard</h3>
              <p className="text-4xl font-bold mt-4">$20</p>
              <p className="mb-4">per month</p>
              <ul className="mb-6">
                <li className="mb-2">✔️ Feature 1</li>
                <li className="mb-2">✔️ Feature 2</li>
                <li className="mb-2">✔️ Feature 3</li>
              </ul>
              <button className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
                Get Started
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-gray-800">Premium</h3>
              <p className="text-4xl font-bold text-gray-800 mt-4">$30</p>
              <p className="text-gray-600 mb-4">per month</p>
              <ul className="mb-6">
                <li className="mb-2">✔️ Feature 1</li>
                <li className="mb-2">✔️ Feature 2</li>
                <li className="mb-2">✔️ Feature 3</li>
              </ul>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
