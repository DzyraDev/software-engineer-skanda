// @flow strict
import { blog } from "@/utils/data/blog"; // Import data from local file
import BlogCard from "./blog-card"; // Corrected import path

function Page() {
  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Portfolio
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blog.length === 0 ? (
          <p>No blog items available.</p>
        ) : (
          blog.map(
            (blogItem) =>
              blogItem?.cover_image && (
                <BlogCard blog={blogItem} key={blogItem.id} />
              )
          )
        )}
      </div>
    </div>
  );
}

export default Page;
