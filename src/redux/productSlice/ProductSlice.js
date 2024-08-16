
import { createSlice } from '@reduxjs/toolkit'

const img = require('../../assets/img_home/img_product/image1.png')
const imgTrees = [
    require('../../assets/img_home/img_product/tree/1.png'),
    require('../../assets/img_home/img_product/tree/2.png'),
    require('../../assets/img_home/img_product/tree/3.png'),
    require('../../assets/img_home/img_product/tree/4.png'),
    require('../../assets/img_home/img_product/tree/5.png'),
]

const imgPots = [
    require('../../assets/img_home/img_product/pot/14.png'),
    require('../../assets/img_home/img_product/pot/15.png'),
    require('../../assets/img_home/img_product/pot/16.png'),
    require('../../assets/img_home/img_product/pot/17.png'),
    require('../../assets/img_home/img_product/pot/18.png'),
    require('../../assets/img_home/img_product/pot/19.png'),
    require('../../assets/img_home/img_product/pot/20.png'),
]

const imgTools = [
    require('../../assets/img_home/img_product/tools/6.png'),
    require('../../assets/img_home/img_product/tools/7.png'),
    require('../../assets/img_home/img_product/tools/8.png'),
    require('../../assets/img_home/img_product/tools/9.png'),
    require('../../assets/img_home/img_product/tools/10.png'),
    require('../../assets/img_home/img_product/tools/11.png'),
    require('../../assets/img_home/img_product/tools/12.png'),
    require('../../assets/img_home/img_product/tools/13.png'),
]


export const productSlice = createSlice({
    name: 'products',
    initialState: {
        status: 'idle',
        products: [
            {
                _id: 1,
                name: "Green Plant 1",
                description: "Cool green grass",
                price: 50000,
                image: [imgTrees[0], imgTrees[2], imgTrees[3], imgTrees[4], imgTrees[1]],
                type: "Cây Trồng",
                plantType: "Ưa sáng",
                origin: "Vietnam",
                size: "small",
                quantity: 45
            },
            {
                _id: 2,
                name: "Green Plant 2",
                description: "Fresh green leaves",
                price: 45000,
                image: [imgTrees[1], imgTrees[1], imgTrees[3], imgTrees[4], imgTrees[0]],
                type: "Cây Trồng",
                plantType: "Ưa tối",
                origin: "Vietnam",
                size: "medium",
                quantity: 45
            },
            {
                _id: 3,
                name: "Green Plant 3",
                description: "Cool shady green leaves",
                price: 55000,
                image: [imgTrees[2], imgTrees[2], imgTrees[1], imgTrees[4], imgTrees[5]],
                type: "Cây Trồng",
                plantType: "Ưa sáng",
                origin: "Vietnam",
                size: "large",
                quantity: 45
            },
            {
                _id: 4,
                name: "Green Plant 4",
                description: "Deep green leaves",
                price: 60000,
                image: [imgTrees[3], imgTrees[2], imgTrees[3], imgTrees[1], imgTrees[0]],
                type: "Cây Trồng",
                plantType: "Ưa tối",
                origin: "Vietnam",
                size: "medium",
                quantity: 45
            },
            {
                _id: 5,
                name: "Green Plant 5",
                description: "Cool green grass",
                price: 48000,
                image: [imgTrees[4], imgTrees[2], imgTrees[3], imgTrees[4], imgTrees[1]],
                type: "Cây Trồng",
                plantType: "Ưa sáng",
                origin: "Vietnam",
                size: "small",
                quantity: 45
            },
            {
                _id: 6,
                name: "Plant Pot 1",
                description: "Beautiful plant pot",
                price: 20000,
                image: [imgPots[0], imgPots[2], imgPots[1], imgPots[3], imgPots[4], imgPots[5]],
                type: "Chậu Cây",
                plantType: null,
                origin: "China",
                size: "small",
                quantity: 45
            },
            {
                _id: 7,
                name: "Plant Pot 2",
                description: "Cute small plant pot",
                price: 25000,
                image: [imgPots[1], imgPots[2], imgPots[1], imgPots[3], imgPots[4], imgPots[5]],
                type: "Chậu Cây",
                plantType: null,
                origin: "China",
                size: "medium",
                quantity: 45
            },
            {
                _id: 8,
                name: "Plant Pot 3",
                description: "Large beautiful plant pot",
                price: 30000,
                image: [imgPots[2], imgPots[2], imgPots[1], imgPots[3], imgPots[4], imgPots[5]],
                type: "Chậu Cây",
                plantType: null,
                origin: "China",
                size: "large",
                quantity: 45
            },
            {
                _id: 9,
                name: "Plant Pot 4",
                description: "Fashionable plant pot",
                price: 22000,
                image: [imgPots[3], imgPots[2], imgPots[1], imgPots[3], imgPots[4], imgPots[5]],
                type: "Chậu Cây",
                plantType: null,
                origin: "China",
                size: "medium",
                quantity: 45
            },
            {
                _id: 10,
                name: "Plant Pot 5",
                description: "Adorable plant pot",
                price: 18000,
                image: [imgPots[4], imgPots[2], imgPots[1], imgPots[3], imgPots[4], imgPots[5]],
                type: "Chậu Cây",
                plantType: null,
                origin: "China",
                size: "small",
                quantity: 45
            },
            {
                _id: 11,
                name: "Tool 1",
                description: "Planting tool",
                price: 10000,
                image: [imgTools[0], imgTools[1], imgTools[2], imgTools[3], imgTools[4], imgTools[5]],
                type: "Dụng Cụ Chăm Sóc",
                plantType: null,
                origin: "USA",
                size: null,
                quantity: 45
            },
            {
                _id: 12,
                name: "Tool 2",
                description: "Water spray bottle",
                price: 5000,
                image: [imgTools[1], imgTools[1], imgTools[2], imgTools[3], imgTools[4], imgTools[5]],
                type: "Dụng Cụ Chăm Sóc",
                plantType: null,
                origin: "USA",
                size: null,
                quantity: 45
            },
            {
                _id: 13,
                name: "Tool 3",
                description: "Branch cutting knife",
                price: 7000,
                image: [imgTools[2], imgTools[1], imgTools[2], imgTools[3], imgTools[4], imgTools[5]],
                type: "Dụng Cụ Chăm Sóc",
                plantType: null,
                origin: "USA",
                size: null,
                quantity: 45
            },
            {
                _id: 14,
                name: "Tool 4",
                description: "Garden spade",
                price: 8000,
                image: [imgTools[3], imgTools[1], imgTools[2], imgTools[3], imgTools[4], imgTools[5]],
                type: "Dụng Cụ Chăm Sóc",
                plantType: null,
                origin: "USA",
                size: null,
                quantity: 45
            },
            {
                _id: 15,
                name: "Tool 5",
                description: "Garden gloves",
                price: 6000,
                image: [imgTools[4], imgTools[1], imgTools[2], imgTools[3], imgTools[4], imgTools[5]],
                type: "Dụng Cụ Chăm Sóc",
                plantType: null,
                origin: "USA",
                size: null,
                quantity: 45
            },
        ]


    },
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        updateQuantityProduct: (state, action) => {
            const { id, quantity } = action.payload;
            console.log("quantity update: ", quantity);
            let currentProduct = state.products.find((item) => item._id == id);
            console.log("quantity current: ", currentProduct.quantity);
            currentProduct.quantity = currentProduct.quantity - quantity
        }

    }

})