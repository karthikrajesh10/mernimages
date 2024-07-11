import tourImg01 from "../images/tours/sigiriya.jpg";
import tourImg02 from "../images/tours/yala.jpg";
import tourImg03 from "../images/tours/temple.jpg";
import tourImg04 from "../images/tours/ella.jpg";
import tourImg05 from "../images/tours/GalleLighthouse.jpg";
import tourImg06 from "../images/tours/mirissa.jpg";
import tourImg07 from "../images/tours/ambuluwawa.jpg";
import tourImg08 from "../images/tours/EllaTrain.jpg";

const tours = [
  {
    id: "01",
    title: "Sigiriya Rock Fortress",
    city: "Sigiriya",
    distance: 300,
    address: 'Sigiriya, Sri Lanka',
    price: 50,
    maxGroupSize: 15,
    desc: "Climb the ancient rock fortress and enjoy panoramic views.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Yala National Park Safari",
    city: "Yala",
    distance: 400,
    address: 'Yala, Sri Lanka',
    price: 120,
    maxGroupSize: 10,
    desc: "Experience a thrilling safari and spot wildlife in Yala National Park.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Temple of the Tooth Relic",
    city: "Kandy",
    distance: 100,
    address: 'Kandy, Sri Lanka',
    price: 30,
    maxGroupSize: 20,
    desc: "Visit the sacred temple that houses the relic of the tooth of Buddha.",
    reviews: [
      {
        name: "Michael Brown",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Ella Rock Hike",
    city: "Ella",
    distance: 200,
    address: 'Ella, Sri Lanka',
    price: 40,
    maxGroupSize: 8,
    desc: "Enjoy a scenic hike to Ella Rock and witness breathtaking views.",
    reviews: [
      {
        name: "Emily Johnson",
        rating: 4.8,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Galle Fort Tour",
    city: "Galle",
    distance: 120,
    address: 'Galle, Sri Lanka',
    price: 25,
    maxGroupSize: 20,
    desc: "Explore the historic Galle Fort, a UNESCO World Heritage site.",
    reviews: [
      {
        name: "Michael Brown",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Mirissa",
    city: "Mirissa",
    distance: 180,
    address: 'Mirissa, Sri Lanka',
    price: 70,
    maxGroupSize: 15,
    desc: "Go on a whale watching tour in Mirissa and see these majestic creatures up close.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Ambuluwawa Tower",
    city: "Gampola",
    distance: 500,
    address: 'Gampola, Sri Lanka',
    price: 22,
    maxGroupSize: 20,
    desc: "Climb the unique Ambuluwawa Tower and enjoy panoramic views of the surrounding landscape.",
    reviews: [],
    avgRating: 4.7,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Nine Arch Bridge",
    city: "Ella",
    distance: 200,
    address: 'Ella, Sri Lanka',
    price: 50,
    maxGroupSize: 15,
    desc: "Visit the iconic Nine Arch Bridge in Ella and witness its architectural marvel.",
    reviews: [
      {
        name: "Anna Wilson",
        rating: 4.9,
      },
    ],
    avgRating: 4.9,
    photo: tourImg01,
    featured: false,
  },
];

export default tours;
