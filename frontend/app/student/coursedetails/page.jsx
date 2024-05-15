import Book from "../../assets/images/book.jpg";
import star from "../../assets/images/star.svg";
import Image from "next/image";
const page = () => {
  return (
    <div className="flex">
      <section className="max-w-[350px] h-full ml-20 mt-20 shadow-lg">
        <div>
          <Image src={Book} className="rounded-t-xl" />
        </div>
        <div className="bg-[#B4D4FF] rounded-b-xl py-4 text-[#16191D]">
          <div className="flex justify-between pt-4 px-4">
            <h3>Card Title</h3>
            <Image src={star} className="" />
          </div>
          <p className="mt-4 px-4">
            Lorem ipsum dolor sit amet consectetur. Massa gravida viverra nulla
            tortor eu dui Lorem ipsum dolor sit amet consectetur. Massa gravida
            viverra nulla tortor eu dui Lorem ipsum dolor sit amet consectetur.
            Massa gravida viverra nulla tortor eu dui Lorem ipsum dolor sit amet
            consectetur. Massa gravida viverra nulla tortor eu dui.
          </p>
          <form className="flex flex-col px-4">
            <h3 className="mt-4 text-xl">Apply Now </h3>
            <input
              type="text"
              name=""
              id=""
              className="my-4 py-2 outline-none rounded-full bg-[#EEF5FF] px-2"
            />
            <input
              type="text"
              name=""
              id=""
              className="my-4 py-2 outline-none rounded-full bg-[#EEF5FF] px-2"
            />
          </form>
          <div className="flex justify-center items-center w-full px-4">
            <button className="bg-black text-white py-2 px-8 rounded-full mt-4 flex-grow ">
              Apply
            </button>
          </div>
        </div>
      </section>
      {/* GET STARTED SECTION */}

      <section className="ml-40 mt-20">
        <h3 className="text-3xl">Get Started</h3>
        <div className="bg-[#B4D4FF] mt-4 p-12 rounded-3xl">
          <h3 className="text-xl mb-2">1 Lorem ipsum dolor sit </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Massa gravida viverra nulla
            tortor eu dui....
          </p>
        </div>
        <div className="bg-[#B4D4FF] mt-4 p-12 rounded-3xl">
          <h3 className="text-xl mb-2">1 Lorem ipsum dolor sit </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Massa gravida viverra nulla
            tortor eu dui....
          </p>
        </div>
        <div className="bg-[#B4D4FF] mt-4 p-12 rounded-3xl">
          <h3 className="text-xl mb-2">1 Lorem ipsum dolor sit </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Massa gravida viverra nulla
            tortor eu dui....
          </p>
        </div>
        <div className="bg-[#B4D4FF] mt-4 p-12 rounded-3xl">
          <h3 className="text-xl mb-2">1 Lorem ipsum dolor sit </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Massa gravida viverra nulla
            tortor eu dui....
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
