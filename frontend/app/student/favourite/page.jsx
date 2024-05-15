import Card from "../../components/Card";

function page() {
  return (
    <div>
      <h2 className="text-2xl mt-14 ml-10 text-[#86B6F6]">Favourite courses</h2>
      <div className="flex justify-around w-full flex-wrap mt-10 ">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default page;
