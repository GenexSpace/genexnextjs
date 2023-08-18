import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Genex Shop",
    path: "https://shop.genex.space",
    newTab: true,
  },
   {
    id: 4,
    title: "PhilAstra Space Club",
    path: "https://philastra.genex.space/",
    newTab: true,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  }
  
];
export default menuData;
