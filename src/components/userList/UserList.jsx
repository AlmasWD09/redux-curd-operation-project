
const UserList = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="uppercase font-bold text-2xl text-sky-500 text-center py-8">all user</h1>
      
      <div className="max-w-4xl mx-auto overflow-x-auto ">
      <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md dark:bg-gray-800">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="px-6 py-3 text-left text-gray-700 dark:text-gray-200">Username</th>
            <th className="px-6 py-3 text-left text-gray-700 dark:text-gray-200">Email</th>
            <th className="px-6 py-3 text-left text-gray-700 dark:text-gray-200">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b dark:border-gray-600">
            <td className="px-6 py-4 text-gray-700 dark:text-gray-200">John Doe</td>
            <td className="px-6 py-4 text-gray-700 dark:text-gray-200">john@example.com</td>
            <td className="px-6 py-4">
              <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Edit</button>
              <button className="px-4 py-2 ml-2 text-white bg-red-500 rounded-md hover:bg-red-600">Delete</button>
            </td>
          </tr>
          <tr className="border-b dark:border-gray-600">
            <td className="px-6 py-4 text-gray-700 dark:text-gray-200">Jane Doe</td>
            <td className="px-6 py-4 text-gray-700 dark:text-gray-200">jane@example.com</td>
            <td className="px-6 py-4">
              <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Edit</button>
              <button className="px-4 py-2 ml-2 text-white bg-red-500 rounded-md hover:bg-red-600">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default UserList