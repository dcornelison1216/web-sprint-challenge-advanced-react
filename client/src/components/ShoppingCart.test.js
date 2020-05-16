import React from "react";
import * as rtl from "@testing-library/react";
import ShoppingCart from './ShoppingCart';

const plants = {
  [{"name":"Peperomia Rosso",
  "id":143,"scientificName":"Peperomia caperata rosso",
  "difficulty":"easy",
  "light":"direct",
  "img":"https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
  "sizes":["small"],
  "watering":2,
  "description":"Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.",
  "price":21}],
  [{"name":"String of Dolphins","id":125341,"scientificName":"Senecio peregrinus","difficulty":"easy","light":"direct","img":"https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_DOLPHINS-1_800x.png?v=1587613674","sizes":["small"],"watering":2,"description":"Flipper's trailing stems are full of glossy succulent leaves, reminiscent to a pod of breaching dolphins. Flipper hails from South Africa, so he thrives in warm environments with lots of sun. This dolphin doesn't need too much water to thrive, making him low maintenance and easy to love.","price":15}],
  [{"name":"Snake Plant","id":4893,"scientificName":"Sansevieria zeylanica","difficulty":"easy","light":"direct","img":"https://cdn.shopify.com/s/files/1/2781/9558/products/6__SANSEVIERIA_ZEYLANICA-1_800x.png?v=1587146468","sizes":["small","medium"],"watering":2,"description":"One of the most popular and hardy of houseplants, he's virtually indestructible and adaptable to almost any condition. Whether you throw full, direct sunlight at him or shove him in the low-light corner of your apartment, he'll grow. And to top it off, he'll go weeks without water if he must.","price":18}]
]}

// const plants = {
//   {
//     "name":"Peperomia Rosso",
//     "id":143,"scientificName":"Peperomia caperata rosso",
//     "difficulty":"easy",
//     "light":"direct",
//     "img":"https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
//     "sizes":["small"],
//     "watering":2,
//     "description":"Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.",
//     "price":21
//   },
//   {
//     "name":"String of Dolphins","id":125341,"scientificName":"Senecio peregrinus","difficulty":"easy","light":"direct","img":"https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_DOLPHINS-1_800x.png?v=1587613674","sizes":["small"],"watering":2,"description":"Flipper's trailing stems are full of glossy succulent leaves, reminiscent to a pod of breaching dolphins. Flipper hails from South Africa, so he thrives in warm environments with lots of sun. This dolphin doesn't need too much water to thrive, making him low maintenance and easy to love.","price":15
//   },
//   {
//     "name":"Staghorn Fern","id":67148,"scientificName":"Platycerium bifurcatum","difficulty":"medium","light":"indirect","img":"https://cdn.shopify.com/s/files/1/2781/9558/products/FERN_STAGHORN-11_800x.png?v=1587427931","sizes":["small"],"watering":2,"description":"Originally from South Africa, Jade loves sun-drenched beaches, the occasional surf, and sandy soils. Too much water too often doesn't sit well with her, so maybe offer her a beer? (Please don't give your plants beer).","price":15
//   }
// };

test('displays plants in cart', () => {
  const cart = rtl.render(<ShoppingCart cart={plants} />)
})
