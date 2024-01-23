import productImage from "@/app/_assets/pictures/electronic_product_default.jpg";

export const flashSaleProductsData = [
  {
    "product": {
      "image": "https://picsum.photos/id/5/200/200",
      "name": "Cozy Flannel Receiving Blanket for Newborns",
      "price": 24999,
      "cutPrice": 14999,
      "discountPercentage": 40
    },
    "view": {
      "discountPercentageTag": true
    }
  },
  {
    "product": {
      "image": "https://picsum.photos/id/4/200/200",
      "name": "Organic Cotton Muslin Swaddle Wrap for Babies",
      "price": 18990,
      "cutPrice": 9990,
      "discountPercentage": 47
    },
    "view": {
      "discountPercentageTag": true
    }
  },
  {
    "product": {
      "image": "https://picsum.photos/id/3/200/200",
      "name": "Adorable Animal-Themed Crib Sheets for Babies",
      "price": 15990,
      "cutPrice": 7990,
      "discountPercentage": 50
    },
    "view": {
      "discountPercentageTag": true
    }
  },
  {
    "product": {
      "image": "https://picsum.photos/id/1/200/200",
      "name": "Soft and Cuddly Plush Toys for Infants",
      "price": 9990,
      "cutPrice": 4990,
      "discountPercentage": 50
    },
    "view": {
      "discountPercentageTag": true
    }
  },
  {
    "product": {
      "image": "https://picsum.photos/id/2/200/200",
      "name": "Baby Play Gym with Activity Mat and Toys",
      "price": 34990,
      "cutPrice": 19990,
      "discountPercentage": 43
    },
    "view": {
      "discountPercentageTag": true
    }
  }
]

export const freeDeliveryProductsData = Array.from(Array(10).keys()).fill(
  {
    product: {
      image: productImage,
      name: "Soft Newborn Baby Wrap Blankets Baby Sleeping",
      price: "19,900",
      cutPrice: "3,000",
      discountPercentage: "22",
      rating: {
        average: 4,
        total_rated_user: 172,
      }
    },
    view: {
      freeShippingTitle: true
    },
  },
);

export const normalProductsData = Array.from(Array(10).keys()).fill(
  {
    product: {
      image: productImage,
      name: "Soft Newborn Baby Wrap Blankets Baby Sleeping",
      price: "19,900",
      cutPrice: "3,000",
      discountPercentage: "22",
      rating: {
        average: 4,
        total_rated_user: 172,
      }
    },
    view: {

    },
  },
);