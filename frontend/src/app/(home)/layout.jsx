import NavBar from "./component/NavBar";
import SideBar from "./component/SideBar";

export default function homeLayout({ children }) {
  return (
    <>
 <div className=" grid   sm:grid-cols-4 md:grid-cols-5 md:grid-rows-5 md:gap-4 overflow-hidden h-screen bg-[#1E1E1E]">
        <div className="row-span-5 hidden md:block  ">
          <SideBar />
        </div>
        <div className=" row-span-5 hidden md:block  border-l p-2 col-start-5 row-start-1 overflow-y-auto hide-scrollbar ">
        <div className="text-white   w-full text-2xl    p-4 ">Cluster</div>
          {[...Array(10)].map((x) => (
            <div className="flex mt-5  space-x-4 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <img
                className="w-14 h-14 rounded-full object-cover"
                src="https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg"
              />
              <h1 className="text-lg font-medium text-gray-800">vyshnav</h1>
            </div>
          ))}
        </div>
        <div className="col-span-3 row-span-5 col-start-2  row-start-1 mt-5">  
            <div className="">
            <NavBar/>
            </div>
       
          {children}
        </div>
      </div>
    </>
  );
}
