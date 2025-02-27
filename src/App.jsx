import AddUser from "./components/addUser/AddUser"

const App = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-center text-red-600 font-bold text-2xl py-4">Redux Project</h1>
      <AddUser />
    </div>
  )
}

export default App