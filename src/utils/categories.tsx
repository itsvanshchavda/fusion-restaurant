import { GiFruitTree, GiBeerBottle, GiFullPizza } from "react-icons/gi";
import { MdOutlineIcecream } from "react-icons/md";
import {FaFish} from "react-icons/fa";

export const Categories = [
    {
        id: 1,
        name: "Pizza",
        urlParam: 'chicken',    
        icon: <GiFullPizza />,
    },
    {
        id: 2,
        name: "Fruits",
        urlParam: 'fruits',
        icon: <GiFruitTree />,
    },
    {
        id: 3,
        name: "Soft Drinks",
        urlParam: 'drinks',
        icon: <GiBeerBottle />,
    },
    {
        id: 4,
        name: "Desserts",
        urlParam: 'desserts',

    },
    {
        id: 5,
        name: "Icecreams",
        urlParam: 'icecreams',
        icon: <MdOutlineIcecream />,
    },


]