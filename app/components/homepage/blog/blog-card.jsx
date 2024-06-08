// @flow strict
"use client"; // Add this line at the top

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";
import { BsHeartFill } from "react-icons/bs";
import { FaCommentAlt } from "react-icons/fa";

function BlogCard({ blog }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <div
        key={blog.id}
        className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
      >
        <div
          className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg"
          onClick={openModal}
        >
          <Image
            src={blog.cover_image}
            height={1080}
            width={1920}
            alt={blog.title}
            className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <div className="p-2 sm:p-3 flex flex-col">
          <div className="flex justify-between items-center text-[#16f2b3] text-sm">
            <p>{blog.published_at}</p>
          
          </div>
          <Link target="_blank" href={blog.url}>
            <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">
              {blog.title}
            </p>
          </Link>
          <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
            {blog.company}
          </p>
          <p className="mb-2 text-sm text-[#16f2b3]">{blog.duration}</p>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="modal-overlay"
        closeTimeoutMS={500} // Add closeTimeoutMS for smooth closing animation
      >
        <div className="flex justify-end">
          <button onClick={closeModal} className="text-white text-lg">
            X
          </button>
        </div>
        <Image
          src={blog.cover_image}
          height={1080}
          width={1920}
          alt={blog.title}
          className="object-contain h-auto w-auto max-h-[80vh] max-w-[80vw] mx-auto"
        />
      </Modal>

      <style jsx global>{`
        .modal {
          position: absolute;
          top: 50%;
          left: 50%;
          right: auto;
          bottom: auto;
          transform: translate(-50%, -50%);
          background: #1b203e;
          padding: 20px;
          border-radius: 8px;
          outline: none;
          z-index: 1000; /* Set z-index to ensure modal is on top */
          opacity: ${modalIsOpen ? 1 : 0}; // Add opacity for fade-in effect
          transition: opacity 0.5s; // Add transition for smooth fade-in effect
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          z-index: 999; /* Set z-index to ensure overlay is behind modal */
          opacity: ${modalIsOpen ? 1 : 0}; // Add opacity for fade-in effect
          transition: opacity 0.5s; // Add transition for smooth fade-in effect
        }
      `}</style>
    </>
  );
}

export default BlogCard;
