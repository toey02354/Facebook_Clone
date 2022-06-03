import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { Divider, Avatar } from "@mui/material";
import {
  Videocam,
  Image as ImageIcon,
  Mood,
  Public as PublicIcon,
  VideoCall,
} from "@mui/icons-material";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Facebook Clone</title>
      </Head>
      {/* Story */}
      <div className="h-[200vh] w-[80vw] lg:w-[50vw] flex flex-col justify-start items-start p-[1rem] gap-4">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-1">
            <Image
              src="/profilepic.jpg"
              height={200}
              width={200}
              className="rounded-2xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/profilepic.jpg"
              height={200}
              width={200}
              className="rounded-2xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/profilepic.jpg"
              height={200}
              width={200}
              className="rounded-2xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/profilepic.jpg"
              height={200}
              width={200}
              className="rounded-2xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/profilepic.jpg"
              height={200}
              width={200}
              className="rounded-2xl"
            />
          </div>
        </div>
        {/* Create a Post */}
        <div className="flex flex-col bg-[#252627] w-full p-4 rounded-2xl">
          <div className="flex flex-row p-2">
            <Image
              src="/profilepic.jpg"
              height={40}
              width={40}
              className="rounded-full"
              layout="fixed"
            />
            <input
              type="text"
              name="Create a post"
              placeholder="คุณกำลังคิดอะไรอยู่"
              className="w-full bg-[#4f4f4f] ml-4 py-2 px-4 outline-none rounded-2xl placeholder:text-white"
            />
          </div>
          <Divider className="bg-[#5c5c5c]" />
          <div className="flex flex-row justify-between items-center pt-4 pb-2 px-4">
            <div className="flex justify-center items-center gap-2">
              <Videocam className="text-pink-700" /> วีดีโอถ่ายทอดสด
            </div>
            <div className="flex justify-center items-center gap-2">
              <ImageIcon className="text-green-700" />
              รูปภาพ/วีดีโอ
            </div>
            <div className="flex justify-center items-center gap-2">
              <Mood className="text-yellow-600" />
              ความรู้สึก/กิจกรรม
            </div>
          </div>
          <div className="flex flex-row"></div>
        </div>
        {/* Create a Live Room */}
        <div className="w-full flex flex-row justify-start items-center p-4 gap-2 bg-[#252627] rounded-2xl overflow-hidden">
          <div className="flex flex-row border-2 border-blue-700/60 p-2 rounded-3xl">
            <VideoCall className="text-violet-600 text-[1.5rem]" />
            <pre className="">สร้างห้อง</pre>
          </div>
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
          <Avatar className="h-[1.5rem] w-[1.5rem]" />
        </div>
        {/* Posts */}
        <div className="w-full flex flex-col justify-start p-4 gap-4 bg-[#252627] rounded-2xl">
          <div className="flex flex-row gap-2">
            <Image
              src="/profilepic.jpg"
              height={40}
              width={40}
              className="rounded-full"
              layout="fixed"
            />
            <div className="flex flex-col">
              <h4>Natthaphol Uthumphirat</h4>
              <h6 className="text-xs">
                3 ชม. <PublicIcon className="text-xs" />
              </h6>
            </div>
          </div>
          <p>ฝนตก</p>
          <Image
            src="/post1pic.jpg"
            height={600}
            width={900}
            layout="responsive"
          />
        </div>
        <div className="w-full flex flex-col justify-start p-4 gap-4 bg-[#252627] rounded-2xl">
          <div className="flex flex-row gap-2">
            <Image
              src="/profilepic.jpg"
              height={40}
              width={40}
              className="rounded-full"
              layout="fixed"
            />
            <div className="flex flex-col">
              <h4>Natthaphol Uthumphirat</h4>
              <h6 className="text-xs">
                3 ชม. <PublicIcon className="text-xs" />
              </h6>
            </div>
          </div>
          <p>ฝนตก</p>
          <Image
            src="/post1pic.jpg"
            height={600}
            width={900}
            layout="responsive"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
