import React from "react";
import {
  AiOutlineDribbble,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { CgYoutube } from "react-icons/cg";
import { FiFacebook } from "react-icons/fi";
import { SiFigma } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer class="p-10 bg-[#27282B]  text-white">
        <div className="container mx-auto">
          <div className="flex gap-10 sm:flex-wrap md:flex-nowrap flex-col md:flex-row">
            <div>
              <h2 className="text-lg font-bold mt-3 mb-3">Logo</h2>
              <p className="text-gray-400">
                We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididun.
              </p>
              <div className="flex gap-4 my-10 flex-col md:flex-row">
                <div className="flex items-center gap-3 ">
                  <AiOutlinePhone className="text-[40px] p-2 bg-[#343538] rounded-full" />

                  <div>
                    <h3 className="text-gray-400">Have a question?</h3>
                    <h3 className="font-bold">310-437-2766</h3>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <AiOutlineMail className="text-[40px] p-2 bg-[#343538] rounded-full" />

                  <div>
                    <h3 className="text-gray-400">Contact us at</h3>
                    <h3 className="font-bold">unreal@outlook.com</h3>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold">Newsletter</h2>
              <p className="text-gray-400 mt-3">
                Be the first one to know about discounts, offers and events
                weekly in your mailbox. Unsubscribe whenever you like with one
                click.
              </p>
              <div className="my-10 flex justify-end">
                <input
                  type="email"
                  placeholder="Enter your email"
                  class="input bg-[#343538] input-bordered w-full max-w-xs"
                />
                <button class="btn btn-secondary rounded-full relative left-[-20px]">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-3 mt-8">
            <a className="cursor-pointer">About us</a>
            <a className="cursor-pointer">Jobs</a>
            <a className="cursor-pointer">Blog</a>
            <a className="cursor-pointer">Press</a>
            <a className="cursor-pointer">FAQ</a>
            <a className="cursor-pointer">Careers</a>
            <a className="cursor-pointer">Contact</a>
            <a className="cursor-pointer">Privacy policy</a>
            <a className="cursor-pointer">Sitemap</a>
            <a className="cursor-pointer">Terms of Use</a>
          </div>
          <div className="flex justify-between flex-wrap mt-10 mb-6">
            <div className="flex gap-4">
              <div className="flex items-center gap-3">
                <FiFacebook className="text-[40px] p-2 bg-[#343538] rounded-full" />
              </div>
              <div className="flex items-center gap-3">
                <CgYoutube className="text-[40px] p-2 bg-[#343538] rounded-full" />
              </div>
              <div className="flex items-center gap-3">
                <AiOutlineDribbble className="text-[40px] p-2 bg-[#343538] rounded-full" />
              </div>
              <div className="flex items-center gap-3">
                <SiFigma className="text-[40px] p-2 bg-[#343538] rounded-full" />
              </div>
              <div className="flex items-center gap-3">
                <BsWhatsapp className="text-[40px] p-2 bg-[#343538] rounded-full" />
              </div>
            </div>
            <div>
              <p className="text-gray-400">© 2000-2021, All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
