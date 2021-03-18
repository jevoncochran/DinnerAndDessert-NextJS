exports.seed = function (knex) {
  return knex("menu_items").insert([
    {
      item: "shrimp hibachi bowl",
      price: 18.0,
      dinner_or_dessert: "dinner",
      category: "entree",
      available_today: true,
      image:
        "https://i2.wp.com/agratefulmeal.com/wp-content/uploads/2020/12/hibachi-shrimp-rice-bowl-6.jpg?resize=1024%2C683&ssl=1",
    },
    {
      item: "steak hibachi bowl",
      price: 18.0,
      dinner_or_dessert: "dinner",
      category: "entree",
      available_today: true,
      image:
        "https://fthmb.tqn.com/f5F4PmbKNAuttlfgxClWVCkq05I=/grilled-hibachi-steak-recipe-336291_step-11-fd65bb0a1562418fa28ccdf5d025c808.jpg",
    },
    {
      item: "chicken hibachi bowl",
      price: 18.0,
      dinner_or_dessert: "dinner",
      category: "entree",
      available_today: true,
      image:
        "https://digitalmarketing.blob.core.windows.net/5634/images/items/image66669.jpg",
    },
    {
      item: "add meat",
      price: 5.0,
      dinner_or_dessert: "dinner",
      category: "extra",
      available_today: true,
    },
    {
      item: "5 piece lamb chops",
      price: 20.0,
      dinner_or_dessert: "dinner",
      category: "entree",
      available_today: true,
      image:
        "https://www.cawineclub.com/images/recipes/406_main_VERVEINE_ROASTED_LAMB_CHOPS_508x336.jpg",
    },
    {
      item: "side of rice",
      price: 08.0,
      dinner_or_dessert: "dinner",
      category: "side",
      available_today: true,
      image:
        "https://www.acouplecooks.com/wp-content/uploads/2020/06/Shrimp-Fried-Rice-005.jpg",
    },
    {
      item: "side of noodles",
      price: 8.0,
      dinner_or_dessert: "dinner",
      category: "side",
      available_today: true,
      image:
        "https://www.simplyhappyfoodie.com/wp-content/uploads/2020/03/instant-pot-garlic-noodles-featured.jpg",
    },
    {
      item: "strawberry banana pudding cheesecake cup",
      price: 10.0,
      dinner_or_dessert: "dessert",
      available_today: true,
      image:
        "https://i.etsystatic.com/20036906/r/il/4c4c42/2272428642/il_1588xN.2272428642_h8aw.jpg",
    },
    {
      item: "turtle banana pudding cheesecake cup",
      price: 10.0,
      dinner_or_dessert: "dessert",
      available_today: true,
      image:
        "https://butternutbakeryblog.com/wp-content/uploads/2018/07/funfetti_banana_pudding-1-683x1024.jpg",
    },
    {
      item: "slice of cake",
      price: 4.0,
      dinner_or_dessert: "dessert",
      available_today: true,
      image:
        "https://bakerbynature.com/wp-content/uploads/2016/11/untitled-17-of-74-3-1-706x1024.jpg",
    },
    {
      item: "strawberry sweet box",
      description:
        "included: Strawberry Crunch Cupcakes, Strawberry Crunch Krispy, Strawberry Crunch Pretzel Rod, Strawberry Brownies, Strawberry Crunch Strawberries, Strawberry Cheesecake Bowl",
      price: 20.0,
      dinner_or_dessert: "dessert",
    },
    {
      item: "lamb chop dinner",
      description:
        "side of mac and cheese, loaded mash potatoes, or aspargus included",
      price: 25.0,
      dinner_or_dessert: "dinner",
      category: "entree",
    },
    {
      item: "beef short rib dinner",
      description:
        "side of mac and cheese, loaded mash potatoes, or aspargus included",
      price: 18.0,
      dinner_or_dessert: "dinner",
      category: "entree",
    },
    {
      item: "grilled chicken bites",
      price: 15.0,
      dinner_or_dessert: "dinner",
      category: "entree",
    },
  ]);
};
