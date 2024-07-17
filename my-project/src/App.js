import { Card, Slider } from "./components"

export default function App() {
  return (
    <div className="flex flex-col gap-24 my-24">

      <div className=" w-[600px] md:w-[920px] lg:w-[1220px] xl:[1400px] flex flex-col mx-auto">
        <div>Trending</div>
        <div className="w-[600px] md:w-[920px] lg:w-[1220px] xl:[1400px] flex gap-5 overflow-scroll">
          <Card image_index={0} tag_index={0} tag_type={true} headline_type={true} />
          <Card image_index={1} tag_index={0} tag_type={true} headline_type={true} />
          <Card image_index={2} tag_index={0} tag_type={true} headline_type={true} />
          <Card image_index={3} tag_index={0} tag_type={true} headline_type={true} />
          <Card image_index={0} tag_index={0} tag_type={true} headline_type={true} />
          <Card image_index={1} tag_index={0} tag_type={true} headline_type={true} />
          <Card image_index={2} tag_index={0} tag_type={true} headline_type={true} />
          <Card image_index={3} tag_index={0} tag_type={true} headline_type={true} />
        </div>
      </div>

    </div>
  )
}
