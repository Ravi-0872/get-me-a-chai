import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-white flex justify-center items-center flex-col gap-4 h-[44vh]">
        <div className="font-bold flex gap-2 items-center text-5xl">
          Buy me a chai{" "}
          <span>
            <img
              className="rounded-full"
              src="https://cdn.dribbble.com/userupload/26707337/file/original-be3a15c324d1eb37346f8f6730439e9f.gif"
              width={70}
              alt="Chai is here"
            />
          </span>
        </div>
        <p>
          Its a crowndfunding platform for developers to get fund from people
          like you enthusiasts. Get funded by your fans,followers
        </p>
        <div className="flex gap-4">
          <button
            type="button"
            className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5"
          >
            Start Now
          </button>
          <button
            type="button"
            className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-16 ">
        <h1 className="text-3xl font-bold text-center mb-14">
          Your Fans can buy you a Chai!!!
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item flex items-center flex-col justify-center">
            <img
              src="https://i.pinimg.com/originals/e6/8a/bc/e68abc028623cdae0fa205466f200a96.gif"
              className="px-2 bg-white rounded-full"
              width={89}
              alt=""
            />
            <p className="p-1 px-1 font-bold">Fund Yourself</p>
            <p className=" text-center">Your can fund yourself WOW!</p>
          </div>
          <div className="item flex items-center flex-col justify-center">
            <img
              src="https://cdn.pixabay.com/animation/2024/08/07/01/21/01-21-03-962_512.gif"
              className=" rounded-full"
              width={89}
              alt=""
            />
            <p className="p-1 px-1 font-bold">Fans Want to help</p>
            <p className=" text-center">Your fans are available to help you</p>
          </div>
          <div className="item flex items-center flex-col justify-center">
            <img
              src="https://cdn-icons-gif.flaticon.com/17659/17659435.gif"
              className=" rounded-full"
              width={89}
              alt=""
            />
            <p className="p-1 px-1 font-bold">Fans Want to help</p>
            <p className=" text-center">Your fans are available to help you</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-16 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-14">
          Learn More About Us
        </h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QtaorVNAwbI?si=ZbG3WyJs9-qmGc7R"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
