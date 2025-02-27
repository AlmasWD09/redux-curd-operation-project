
const EditUser = () => {
  const handleSubmit = (event) => {
    event.preventDefault()

  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <section className="max-w-8xl mx-auto p-6 bg-gray-300 rounded-md shadow-md ">
      <h1 className="text-center text-sky-600 font-bold text-2xl py-4">Edit User</h1>

      <form onSubmit={handleSubmit} className="max-w-8xl mx-auto">
        <div className="px-20">
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
            <input
              id="emailAddress"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="mt-6 w-full">
          <button type="submit" className="w-full px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-sky-700 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600">
            Submit
          </button>
        </div>
      </form>
    </section>
    </div>
  )
}

export default EditUser