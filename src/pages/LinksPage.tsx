import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaLink,
  FaUser,
  FaPlus,
  FaTrashAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaGlobe,
} from "react-icons/fa";

type Link = {
  platform: string;
  url: string;
};

const platformData: Record<string, { icon: JSX.Element; label: string }> = {
  GitHub: { icon: <FaGithub />, label: "GitHub" },
  LinkedIn: { icon: <FaLinkedin />, label: "LinkedIn" },
  Twitter: { icon: <FaTwitter />, label: "Twitter" },
  Website: { icon: <FaGlobe />, label: "Website" },
};

const LinksPage = () => {
  const router = useRouter();
  const [links, setLinks] = useState<Link[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAddLink = () => {
    setLinks([...links, { platform: "", url: "" }]);
    setEditingIndex(links.length);
  };

  const handleRemoveLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, field: keyof Link, value: string) => {
    const newLinks = links.map((link, i) =>
      i === index ? { ...link, [field]: value } : link
    );
    setLinks(newLinks);
  };

  // Check if router is ready (i.e., only use on the client side)
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div className='min-h-screen w-full bg-background'>
      {/* Navbar */}
      <nav className='w-full p-6'>
        <div className='bg-white flex items-center justify-between gap-2 p-6 rounded'>
          <div className='flex items-center'>
            <img src='devlinks-logo.png' alt='Logo' />
          </div>
          <div className='flex items-center space-x-8'>
            <Link
              href='/LinksPage'
              className={`flex items-center space-x-2 rounded p-2 ${
                router.pathname === "/LinksPage"
                  ? "bg-secondary text-primary"
                  : "text-black"
              }`}
            >
              <FaLink />
              <span>Links</span>
            </Link>
            <Link
              href='/profile'
              className={`flex items-center space-x-2 rounded p-2 ${
                router.pathname === "/profile"
                  ? "bg-secondary text-primary"
                  : "text-black"
              }`}
            >
              <FaUser />
              <span>Profile Details</span>
            </Link>
          </div>
          <Link
            href='/preview'
            className='bg-white text-primary border border-primary rounded px-4 py-2'
          >
            Preview
          </Link>
        </div>
      </nav>{" "}
      {/* Main Content */}
      <div className='flex w-full justify-between p-8'>
        {" "}
        {/* Preview Section */}
        <div className='w-[560px] h-auto bg-white rounded-lg shadow-lg p-4 mr-8'>
          <div className='relative flex justify-center items-center'>
            <svg
              width='308'
              height='632'
              viewBox='0 0 308 632'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 54.5C1 24.9528 24.9528 1 54.5 1H253.5C283.047 1 307 24.9528 307 54.5V577.5C307 607.047 283.047 631 253.5 631H54.5C24.9528 631 1 607.047 1 577.5V54.5Z'
                stroke='#737373'
              />
              <path
                d='M12 55.5C12 30.9233 31.9233 11 56.5 11H80.5C86.8513 11 92 16.1487 92 22.5C92 30.5081 98.4919 37 106.5 37H201.5C209.508 37 216 30.5081 216 22.5C216 16.1487 221.149 11 227.5 11H251.5C276.077 11 296 30.9233 296 55.5V576.5C296 601.077 276.077 621 251.5 621H56.5C31.9233 621 12 601.077 12 576.5V55.5Z'
                fill='white'
                stroke='#737373'
              />
              <circle cx='153.5' cy='112' r='48' fill='#EEEEEE' />
              <rect
                x='73.5'
                y='185'
                width='160'
                height='16'
                rx='8'
                fill='#EEEEEE'
              />
              <rect
                x='117.5'
                y='214'
                width='72'
                height='8'
                rx='4'
                fill='#EEEEEE'
              />
              <rect
                x='35'
                y='278'
                width='237'
                height='44'
                rx='8'
                fill='#EEEEEE'
              />
              <rect
                x='35'
                y='342'
                width='237'
                height='44'
                rx='8'
                fill='#EEEEEE'
              />
              <rect
                x='35'
                y='406'
                width='237'
                height='44'
                rx='8'
                fill='#EEEEEE'
              />
              <rect
                x='35'
                y='470'
                width='237'
                height='44'
                rx='8'
                fill='#EEEEEE'
              />
              <rect
                x='35'
                y='534'
                width='237'
                height='44'
                rx='8'
                fill='#EEEEEE'
              />
            </svg>
            <div className='absolute inset-0 flex justify-center items-center'>
              <div className='absolute w-[237px] p-4 flex flex-col items-center'>
                <div className='bg-gray-300 rounded-full w-16 h-16 mb-4'></div>
                {/* <p className='font-bold text-lg mb-1'>User Name</p>
                <p className='text-gray-500 mb-4'>user@example.com</p> */}
                <div className='w-full space-y-2'>
                  {links.map((link, index) => (
                    <div
                      key={index}
                      className='flex items-center justify-between bg-gray-200 p-2 rounded'
                    >
                      {link.platform && (
                        <span className='flex items-center space-x-2'>
                          {platformData[link.platform]?.icon}
                          <span>{platformData[link.platform]?.label}</span>
                        </span>
                      )}
                    </div>
                  ))}
                  {/* {!links.length && (
                    <div className='text-center text-gray-400'>
                      No links added yet.
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Link Management Section */}
        <div className='flex-2 h-auto w-[808px] bg-white rounded-lg shadow-lg p-8 overflow-hidden'>
          <h2 className='text-2xl font-bold mb-4'>Customize your links</h2>
          <p className='text-gray-500 mb-4'>
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
          <button
            onClick={handleAddLink}
            className='flex w-full items-center mb-4 bg-white text-primary border border-primary rounded px-4 py-2 focus:outline-none'
          >
            <FaPlus className='mr-2' /> Add new link
          </button>
          {links.length === 0 && (
            <div className='bg-gray-100 p-4 rounded'>
              <h3 className='text-lg font-bold mb-2'>Let’s get you started</h3>
              <p className='text-gray-500'>
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!
              </p>
            </div>
          )}
          {links.map((link, index) => (
            <div key={index} className='bg-gray-50 p-4 rounded mb-4'>
              <div className='flex items-center justify-between mb-2'>
                <span className='font-semibold'>Link #{index + 1}</span>
                <button onClick={() => handleRemoveLink(index)}>
                  <FaTrashAlt className='text-red-500' />
                </button>
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Platform
                </label>
                <select
                  value={link.platform}
                  onChange={(e) =>
                    handleChange(index, "platform", e.target.value)
                  }
                  className='w-full mt-1 border-gray-300 rounded'
                >
                  <option value=''>Select a platform</option>
                  <option value='GitHub'>GitHub</option>
                  <option value='LinkedIn'>LinkedIn</option>
                  <option value='Twitter'>Twitter</option>
                  <option value='Website'>Website</option>
                </select>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Link
                </label>
                <input
                  type='url'
                  placeholder='e.g. https://www.github.com/johnappleseed'
                  value={link.url}
                  onChange={(e) => handleChange(index, "url", e.target.value)}
                  className='w-full mt-1 border-gray-300 rounded'
                />
              </div>
            </div>
          ))}
          <button
            className={`mt-4 bg-primary text-white rounded px-4 py-2 focus:outline-none ${
              links.length === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={links.length === 0}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
