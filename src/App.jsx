import Form from "./components/Form"


function App() {

  return (
    <>
        <div className="
          bg-slate-200
          h-screen
          flex
          items-center
          justify-center
        ">
           <div className="
           w-10/12
           mx-auto
           md:w-1/2
           lg:w-1/3
           xl:w-1/4
           ">
             <Form />
           </div>
        </div>
    </>
  )
}

export default App
