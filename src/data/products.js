// 1. Eng tepada hamma rasmlarni import qilib olamiz
import futbolka from "../assets/png/futbolka.png";
import jens from "../assets/png/jens.png";
import koylak from "../assets/png/koylak.png";
import futbolka2 from "../assets/png/futbolka-2.png";

import koylak2 from "../assets/png/koylak-2.png";
import futbolka3 from "../assets/png/futbolka-3.png";
import short from "../assets/png/short.png";
import jens2 from "../assets/png/jens-2.png";

// 2. Endi massiv ichida ularni tirnoqsiz o'zgaruvchi sifatida beramiz
export const newArrivalsData = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    image: futbolka, // 👈 Tirnoqsiz yoziladi!
    rating: 4.5,
    price: 120,
    oldPrice: null,
    discount: null
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    image: jens, // 👈 Tirnoqsiz
    rating: 3.5,
    price: 240,
    oldPrice: 260,
    discount: "-20%"
  },
  {
    id: 3,
    title: "Checkered Shirt",
    image: koylak,
    rating: 4.5,
    price: 180,
    oldPrice: null,
    discount: null
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    image: futbolka2,
    rating: 4.5,
    price: 130,
    oldPrice: 160,
    discount: "-30%"
  }
];

export const topSellingData = [
  {
    id: 5,
    title: "Vertical Striped Shirt",
    image: koylak2,
    rating: 5.0,
    price: 212,
    oldPrice: 232,
    discount: "-20%"
  },
  {
    id: 6,
    title: "Courage Graphic T-shirt",
    image: futbolka3,
    rating: 4.0,
    price: 145,
    oldPrice: null,
    discount: null
  },
  {
    id: 7,
    title: "Loose Fit Bermuda Shorts",
    image: short,
    rating: 3.0,
    price: 80,
    oldPrice: null,
    discount: null
  },
  {
    id: 8,
    title: "Faded Skinny Jeans",
    image: jens2,
    rating: 4.5,
    price: 210,
    oldPrice: null,
    discount: null
  }
];
