import {
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function SearchBar() {
  return (
    <form className="max-w-md mx-auto">
      <label
        htmlFor="search"
        className="block mb-2.5 text-sm font-medium text-heading sr-only "
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <MagnifyingGlassIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-full focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
          placeholder="Search"
          required
        />
        <button
          type="button"
          className="absolute end-1.5 bottom-1.5 bg-blue-600 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-full text-xs px-3 py-1.5 focus:outline-none cursor-pointer"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
