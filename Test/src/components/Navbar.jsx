import React from "react";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "Home",
    },

    {
      id: 2,
      link: "About",
    },

    {
      id: 3,
      link: "Features",
    },

    {
      id: 4,
      link: "Testimonial",
    },

    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center py-6">
        <div><h4 className="font-semibold text-xl text-slate-50">Navbar</h4></div>

        <div className="flex justify-center items-center space-x-5 text-slate-50">
          {links.map(({ id,link }) => (
            <ul key={id} className="">
              <li>{link}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
