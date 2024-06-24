import Appbar from "./components/Appbar"
import Divder from "./components/Divder"
import Filter from "./components/Filter"
import Footer from "./components/Footer"
import Item from "./components/Item"


function App() {
 return (
  <>
  {/* 
  <div>
    <span className="text-stone-500 text-4xl font-light font-display">Season Specials</span>
  </div>
  <div>
    <span className="text-stone-500 text-4xl font-light font-display">Find us on</span> */}
    <Appbar/>
    <Filter/>
    <Item/>
    <Divder title={"Season Specials"}/>
    <Item/>
    <Footer/>
  </>
 )
}

export default App
