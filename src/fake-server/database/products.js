import { makeIdGenerator } from '../utils';
import brandsData from './brands';
import { categoriesListData, prepareCategory } from './categories';

const getId = makeIdGenerator();

const attributesDef = [
    {
        name: 'Color',
        slug: 'color',
        values: [
            { name: 'White', slug: 'white' },
            { name: 'Silver', slug: 'silver' },
            { name: 'Light Gray', slug: 'light-gray' },
            { name: 'Gray', slug: 'gray' },
            { name: 'Dark Gray', slug: 'dark-gray' },
            { name: 'Coal', slug: 'coal' },
            { name: 'Black', slug: 'black' },
            { name: 'Red', slug: 'red' },
            { name: 'Orange', slug: 'orange' },
            { name: 'Yellow', slug: 'yellow' },
            { name: 'Pear Green', slug: 'pear-green' },
            { name: 'Green', slug: 'green' },
            { name: 'Emerald', slug: 'emerald' },
            { name: 'Shamrock', slug: 'shamrock' },
            { name: 'Shakespeare', slug: 'shakespeare' },
            { name: 'Blue', slug: 'blue' },
            { name: 'Dark Blue', slug: 'dark-blue' },
            { name: 'Violet', slug: 'violet' },
            { name: 'Purple', slug: 'purple' },
            { name: 'Cerise', slug: 'cerise' },
        ],
    },
    {
        name: 'Speed',
        slug: 'speed',
        values: [
            { name: '750 RPM', slug: '750-rpm' },
        ],
    },
    {
        name: 'Power Source',
        slug: 'power-source',
        values: [
            { name: 'Cordless-Electric', slug: 'cordless-electric' },
        ],
    },
    {
        name: 'Battery Cell Type',
        slug: 'battery-cell-type',
        values: [
            { name: 'Lithium', slug: 'lithium' },
        ],
    },
    {
        name: 'Voltage',
        slug: 'voltage',
        values: [
            { name: '20 Volts', slug: '20-volts' },
        ],
    },
    {
        name: 'Battery Capacity',
        slug: 'battery-capacity',
        values: [
            { name: '2 Ah', slug: '2-Ah' },
        ],
    },
];

const productsDef = [
    {
        slug: 'Centrala termica in condensare Buderus',
        name: 'Centrala termica in condensare Buderus Logamax Plus GB162-70 V2 (doar incalzire)',
        price: 12725,
        images: [
            'images/products/product-1.jpg',
            'images/products/product-1-1.jpg',
        ],
        badges: 'new',
        rating: 4,
        reviews: 12,
        availability: 'In stoc',
        brand: 'brandix',
        categories: ['screwdrivers'],
        attributes: [
            { slug: 'color', values: 'yellow' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'undefined-tool-iradix-dps3000sy-2700-watts',
        name: 'Pompa de circulatie Wilo VeroLine IPL 40/110-0,12/4',
        price: 2195,
        images: [
            'images/products/product-2.jpg',
            'images/products/product-2-1.jpg',
        ],
        badges: 'hot',
        rating: 5,
        reviews: 3,
        availability: 'In stoc',
        brand: 'zosch',
        categories: ['instruments'],
        attributes: [
            { slug: 'color', values: ['silver', 'cerise'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'drill-screwdriver-brandix-alx7054-200-watts',
        name: 'Pompa electronica de circulatie Wilo Stratos 100/1-12 PN 6',
        price: 14600,
        images: [
            'images/products/product-3.jpg',
            'images/products/product-3-1.jpg',
        ],
        rating: 4,
        reviews: 8,
        availability: 'In stoc',
        brand: 'brandix',
        categories: ['power-tools'],
        attributes: [
            { slug: 'color', values: 'yellow' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'drill-series-3-brandix-ksr4590pqs-1500-watts',
        name: 'Pompa electronica de circulatie Wilo Stratos Pico 15/1-4',
        price: 949,
        compareAtPrice: 989,
        images: [
            'images/products/product-4.jpg',
            'images/products/product-4-1.jpg',
        ],
        badges: 'sale',
        rating: 3,
        reviews: 15,
        availability: 'In stoc',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: 'white' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-router-power-tool-2017erxpk',
        name: 'Centrala termica in condensare Ferroli Bluehelix Alpha 24C - 24 kW',
        price: 2749,
        images: [
            'images/products/product-5.jpg',
            'images/products/product-5-1.jpg',
        ],
        rating: 4,
        reviews: 2,
        availability: 'In stoc',
        brand: 'wakita',
        categories: [],
        attributes: [
            { slug: 'color', values: 'dark-blue' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-drilling-machine-dm2019kw4-4kw',
        name: 'Pompa electronica de circulatie Wilo Yonos Maxo 50/0,5-12',
        price: 5999,
        images: [
            'images/products/product-6.jpg',
            'images/products/product-6-1.jpg',
        ],
        rating: 3,
        reviews: 21,
        availability: 'In stoc',
        brand: 'wakita',
        categories: [],
        attributes: [
            { slug: 'color', values: 'orange' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-pliers',
        name: 'Aer conditionat Daikin Sensira Bluevolution 2018 FTXF60A + RXF60B 22000 BTU',
        price: 4397,
        images: [
            'images/products/product-7.jpg',
            'images/products/product-7-1.jpg',
        ],
        rating: 2,
        reviews: 1,
        availability: 'In stoc',
        brand: 'wevalt',
        categories: [],
        attributes: [
            { slug: 'color', values: 'red' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'water-hose-40cm',
        name: 'Centrala termica in condensare Daikin D2CND024A1A pentru incalzire si preparare ACM',
        price: 3599,
        images: [
            'images/products/product-8.jpg',
            'images/products/product-8-1.jpg',
        ],
        rating: 2,
        reviews: 5,
        availability: 'In stoc',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: ['pear-green', 'blue'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'spanner-wrench',
        name: 'Centrala termica in condensare Daikin D2CND024A1A pentru incalzire si preparare ACM',
        price: 3599,
        images: [
            'images/products/product-9.jpg',
            'images/products/product-9-1.jpg',
        ],
        rating: 4,
        reviews: 34,
        availability: 'In stoc',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'green' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'water-tap',
        name: 'Centrala termica in condensare Daikin D2CND024A1A pentru incalzire si preparare ACM',
        price: 3599,
        images: [
            'images/products/product-10.jpg',
            'images/products/product-10-1.jpg',
        ],
        rating: 5,
        reviews: 3,
        availability: 'In stoc',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'gray' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'hand-tool-kit',
        name: 'Panou solar Ferroli Ecotube New 15 cu 15 tuburi vidate - Putere termica 1.53 kW',
        price: 4125,
        images: [
            'images/products/product-11.jpg',
            'images/products/product-11-1.jpg',
        ],
        rating: 4,
        reviews: 7,
        availability: 'In stoc',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'black' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'ash-s-chainsaw-3.5kw',
        name: 'Panou solar plan vertical Buderus Logasol SKT',
        price: 2510,
        images: [
            'images/products/product-12.jpg',
            'images/products/product-12-1.jpg',
        ],
        rating: 5,
        reviews: 17,
        availability: 'In stoc',
        brand: 'mitasia',
        categories: [],
        attributes: [
            { slug: 'color', values: 'violet' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-angle-grinder-kzx3890pqw',
        name: 'Boiler electric digital cu telecomanda Ferroli TDG Plus 100',
        price: 995,
        images: [
            'images/products/product-13.jpg',
            'images/products/product-13-1.jpg',
        ],
        rating: 2,
        reviews: 8,
        availability: 'In stoc',
        brand: 'mitasia',
        categories: [],
        attributes: [
            { slug: 'color', values: 'purple' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-air-compressor-deltakx500',
        name: 'Brandix Air Compressor DELTAKX500',
        price: 1800,
        images: [
            'images/products/product-14.jpg',
            'images/products/product-14-1.jpg',
        ],
        rating: 3,
        reviews: 14,
        availability: 'In stoc',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: ['light-gray', 'emerald'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-electric-jigsaw-jig7000bq',
        name: 'Brandix Electric Jigsaw JIG7000BQ',
        price: 290,
        images: [
            'images/products/product-15.jpg',
            'images/products/product-15-1.jpg',
        ],
        rating: 2,
        reviews: 1,
        availability: 'In stoc',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: ['coal', 'shamrock'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-screwdriver-screw1500acc',
        name: 'Brandix Screwdriver SCREW1500ACC',
        price: 1499,
        images: [
            'images/products/product-16.jpg',
            'images/products/product-16-1.jpg',
            'images/products/product-16-2.jpg',
            'images/products/product-16-3.jpg',
            'images/products/product-16-4.jpg',
        ],
        rating: 5,
        reviews: 3,
        availability: 'In stoc',
        brand: 'metaggo',
        categories: [],
        attributes: [
            { slug: 'color', values: ['dark-gray', 'shakespeare'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
];

const productsData = productsDef.map((productDef) => {
    let badges = [];

    if (productDef.badges) {
        badges = typeof productDef.badges === 'string' ? [productDef.badges] : productDef.badges;
    }

    const categories = categoriesListData
        .filter((category) => productDef.categories.includes(category.slug))
        .map((category) => prepareCategory(category));

    const attributes = (productDef.attributes || []).map((productAttributeDef) => {
        const attributeDef = attributesDef.find((x) => x.slug === productAttributeDef.slug);

        if (!attributeDef) {
            return null;
        }

        let valuesDef = [];

        if (typeof productAttributeDef.values === 'string') {
            valuesDef = [productAttributeDef.values];
        } else if (productAttributeDef.values) {
            valuesDef = productAttributeDef.values;
        }

        const values = valuesDef.map((valueSlug) => {
            const valueDef = attributeDef.values.find((x) => x.slug === valueSlug);

            if (!valueDef) {
                return null;
            }

            return {
                ...valueDef,
                customFields: {},
            };
        }).filter((x) => x !== null);

        if (!values.length) {
            return null;
        }

        return {
            name: attributeDef.name,
            slug: attributeDef.slug,
            featured: !!productAttributeDef.featured,
            values,
            customFields: {},
        };
    }).filter((x) => x !== null);

    return {
        id: getId(),
        name: productDef.name,
        sku: '83690/32',
        slug: productDef.slug,
        price: productDef.price,
        compareAtPrice: productDef.compareAtPrice || null,
        images: productDef.images.slice(),
        badges: badges.slice(),
        rating: productDef.rating,
        reviews: productDef.reviews,
        availability: productDef.availability,
        brand: brandsData.find((x) => x.slug === productDef.brand) || null,
        categories,
        attributes,
        customFields: {},
    };
});

export default productsData;
