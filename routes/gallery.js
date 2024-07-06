import { Router } from "express";
var router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const images = [
    {
      url: "/images/sunset.png",
      title: "Beautiful sunset",
      description: "A stunning sunset over the ocean",
    },
    {
      url: "/images/bb3.jpg",
      title: "Office shots",
      description: "Confident Woman in the office",
    },
    {
      url: "/images/bb5.png",
      title: "Wedding photo",
      description: "sharing a time of joy with familty and friends",
    },

    {
      url: "/images/bb2.png",
      title: "Potrait",
      description: "captivating potrait",
    },

    {
      url: "/images/f.png",
      title: "Classical",
      description: "depict a classic style",
    },
    { url: "/images/back4.png", title: "Effects" },
  ];

  res.render("gallery", { images: images });
});

export default router;
