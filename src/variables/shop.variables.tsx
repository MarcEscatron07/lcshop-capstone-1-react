const tabs: any[] = [
    {
        tabName: 'Jerseys',
        tabHeader: 'LCS Team Stage Jerseys',
    },
    {
        tabName: 'Casual Wear',
        tabHeader: 'LCS Casual Wear'
    },
    {
        tabName: 'Accessories',
        tabHeader: 'LCS Accessories'
    }
];

const sortBy: any[] = [
    {
        name: 'LATEST',
        value: 'sort-latest'
    },
    {
        name: 'FEATURED',
        value: 'sort-featured'
    },
    {
        name: 'BEST SELLING',
        value: 'sort-best-selling'
    },
    {
        name: 'ALPHABETICAL, A-Z',
        value: 'sort-alpha-asc'
    },
    {
        name: 'ALPHABETICAL, Z-A',
        value: 'sort-alpha-desc'
    },
    {
        name: 'PRICE (ASCENDING)',
        value: 'sort-price-asc'
    },
    {
        name: 'PRICE (DESCENDING)',
        value: 'sort-price-desc'
    },
];

const shopItems: any[] = [
    {
        tab: 'Jerseys',
        items: [
            { 
                name: 'CLG 2019 Summer Split LCS Jersey', 
                currency: '$', 
                price: 60.00.toFixed(2), 
                srcFront: 'images/shop/jerseys/jersey-clg.webp', 
                srcBack: 'images/shop/jerseys/jersey-clg-back.webp',
                btnText: 'Add To Cart',
            },
            { 
                name: 'Team Liquid LCS 2019 Playoff Jersey', 
                currency: '$', 
                price: 60.00.toFixed(2), 
                srcFront: 'images/shop/jerseys/jersey-tl.webp', 
                srcBack: 'images/shop/jerseys/jersey-tl-back.png',
                btnText: 'Add To Cart',
            },
            { 
                name: 'Cloud9 LCS Jersey 2019', 
                currency: '$', 
                price: 60.00.toFixed(2), 
                srcFront: 'images/shop/jerseys/jersey-c9.webp', 
                srcBack: 'images/shop/jerseys/jersey-c9-back.webp',
                btnText: 'Add To Cart',
            },
            { 
                name: 'Echo Fox LCS Jersey 2019', 
                currency: '$', 
                price: 60.00.toFixed(2), 
                srcFront: 'images/shop/jerseys/jersey-fox.webp', 
                srcBack: 'images/shop/jerseys/jersey-fox-back.webp',
                btnText: 'Add To Cart',
            },
            { 
                name: 'TSM LCS Jersey 2019', 
                currency: '$', 
                price: 60.00.toFixed(2), 
                srcFront: 'images/shop/jerseys/jersey-tsm.png', 
                srcBack: 'images/shop/jerseys/jersey-tsm-back.png',
                btnText: 'Add To Cart',
            },
            { 
                name: 'FlyQuest LCS Jersey 2019', 
                currency: '$', 
                price: 60.00.toFixed(2), 
                srcFront: 'images/shop/jerseys/jersey-fly.png', 
                srcBack: 'images/shop/jerseys/jersey-fly-back.png',
                btnText: 'Add To Cart',
            },
            { 
                name: 'OpTic LCS Jersey 2019', 
                currency: '$', 
                price: 60.00.toFixed(2), 
                srcFront: 'images/shop/jerseys/jersey-opt.png', 
                srcBack: 'images/shop/jerseys/jersey-opt-back.png',
                btnText: 'Add To Cart',
            },
            { 
                name: 'Clutch Gaming LCS Jersey 2019', 
                currency: '$', 
                price: 60.00.toFixed(2), 
                srcFront: 'images/shop/jerseys/jersey-clutch.png', 
                srcBack: 'images/shop/jerseys/jersey-clutch-back.png',
                btnText: 'Add To Cart',
            },
            { 
                name: 'Golden Guardians LCS Jersey 2019', 
                currency: '$', 
                price: 60.00.toFixed(2), 
                srcFront: 'images/shop/jerseys/jersey-ggs.png', 
                srcBack: 'images/shop/jerseys/jersey-ggs-back.png',
                btnText: 'Add To Cart',
            },
            { 
                name: '100 Thieves LCS Jersey 2019', 
                currency: '$', 
                price: 60.00.toFixed(2), 
                srcFront: 'images/shop/jerseys/jersey-100t.png', 
                srcBack: 'images/shop/jerseys/jersey-100t-back.png',
                btnText: 'Add To Cart',
            },
            { 
                name: 'CLG LCS Jersey 2019', 
                currency: '$', 
                price: 60.00.toFixed(2), 
                srcFront: 'images/shop/jerseys/jersey-clg-alt.png', 
                srcBack: 'images/shop/jerseys/jersey-clg-alt-back.png',
                btnText: 'Add To Cart',
            },
        ]
    },
    {
        tab: 'Casual Wear',
        items: [
            {
                name: '\'47 Team Liquid Scrum Tee', 
                currency: '$', 
                price: 40.00.toFixed(2), 
                srcFront: 'images/shop/casual/casual-tee-tl.webp', 
                srcBack: 'images/shop/casual/casual-tee-back-blue.webp',
                btnText: 'Add To Cart',
            },
            {
                name: '\'47 CLG Scrum Tee', 
                currency: '$', 
                price: 40.00.toFixed(2), 
                srcFront: '/images/shop/casual/casual-tee-clg.webp', 
                srcBack: 'images/shop/casual/casual-tee-back-black.webp',
                btnText: 'Add To Cart',
            },
            {
                name: '\'47 Clutch Scrum Tee', 
                currency: '$', 
                price: 40.00.toFixed(2), 
                srcFront: '/images/shop/casual/casual-tee-clutch.webp', 
                srcBack: 'images/shop/casual/casual-tee-back-black.webp',
                btnText: 'Add To Cart',
            },
            {
                name: '\'47 Golden Guardians Scrum Tee', 
                currency: '$', 
                price: 40.00.toFixed(2), 
                srcFront: '/images/shop/casual/casual-tee-ggs.webp', 
                srcBack: 'images/shop/casual/casual-tee-back-lightblue.webp',
                btnText: 'Add To Cart',
            },
            {
                name: '\'47 OpTic Scrum Tee', 
                currency: '$', 
                price: 40.00.toFixed(2), 
                srcFront: '/images/shop/casual/casual-tee-opt.webp', 
                srcBack: 'images/shop/casual/casual-tee-back-black.webp',
                btnText: 'Add To Cart',
            },
            {
                name: '\'47 FlyQuest Scrum Tee', 
                currency: '$', 
                price: 40.00.toFixed(2), 
                srcFront: '/images/shop/casual/casual-tee-fly.webp', 
                srcBack: 'images/shop/casual/casual-tee-back-black.webp',
                btnText: 'Add To Cart',
            },
            {
                name: 'LCS Summer Finals Gold Foil Tee', 
                currency: '$', 
                price: 20.00.toFixed(2), 
                srcFront: '/images/shop/casual/casual-tee-summer-finals.webp', 
                srcBack: null,
                btnText: 'Add To Cart',
            },
        ]
    },
    {
        tab: 'Accessories',
        items: [
            {
                name: 'LCS 10 Teams Wristbands', 
                currency: '$', 
                price: 5.00.toFixed(2), 
                srcFront: '/images/shop/accessories/acc-wristband.webp', 
                srcBack: null,
                btnText: 'Add To Cart',
            },
            {
                name: 'LCS 10 Teams Mousepad', 
                currency: '$', 
                price: 20.00.toFixed(2), 
                srcFront: '/images/shop/accessories/acc-mousepad.webp', 
                srcBack: null,
                btnText: 'Add To Cart',
            },
            {
                name: 'LCS 10 Teams Lanyard', 
                currency: '$', 
                price: 5.00.toFixed(2), 
                srcFront: '/images/shop/accessories/acc-lanyard.webp', 
                srcBack: null,
                btnText: 'Add To Cart',
            },
            {
                name: 'LCS Summer Waterbottle', 
                currency: '$', 
                price: 25.00.toFixed(2), 
                srcFront: '/images/shop/accessories/acc-waterbottle.webp', 
                srcBack: null,
                btnText: 'Add To Cart',
            },
        ]
    }
];

export {
    tabs,
    sortBy,
    shopItems
}