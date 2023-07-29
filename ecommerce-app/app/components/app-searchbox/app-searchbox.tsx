"use client";
import SearchIcon from "@/public/icons/search.icon";
import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

type Person = {
  id: number;
  name: string;
  href: string;
};

function AppSearchbox() {
  const people: Person[] = [
    { id: 1, name: "Wade Cooper", href: "#" },
    { id: 2, name: "Arlene Mccoy", href: "#" },
    { id: 3, name: "Devon Webb", href: "#" },
    { id: 4, name: "Tom Cook", href: "#" },
    { id: 5, name: "Tanya Fox", href: "#" },
    { id: 6, name: "Hellen Schmidt", href: "#" },
  ];

  const [selected, setSelected] = useState<Person | null>(null);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="flex bg-red-400 items-center p-1 rounded-lg flex-1">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-gray-200 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              placeholder="Search..."
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 focus:outline-none"
              displayValue={(person: Person) => person?.name ?? ""}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <>
                  <Combobox.Option
                    className={({ active }) =>
                      `relative cursor-default select-none  text-gray-900`
                    }
                    value={query}
                  >
                    {() => (
                      <span
                        className={`cursor-pointer block truncate p-2 pl-6`}
                      >
                        {query}
                      </span>
                    )}
                  </Combobox.Option>
                </>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none  text-gray-900`
                    }
                    value={person}
                  >
                    {() => (
                      <span
                        className={`cursor-pointer block truncate p-2 pl-6`}
                      >
                        {person.name}
                      </span>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      <div className="color-white mx-2">
        <SearchIcon />
      </div>
    </div>
  );
}

export default AppSearchbox;
