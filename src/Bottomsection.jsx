import Bottomleft from "./components/Bottomleft"
import Bottomright from "./components/Bottomright"
const Bottomsection = () => {
  return (
    <div className="mx-auto max-w-7xl bg-[#F4F4F4] mt-32">
        <div className="flex flex-col  xl:flex-row xl:justify-between">
            <Bottomleft />
            <Bottomright />
        </div>
    </div>
    
  )
}

export default Bottomsection
