module.exports = () => {
    const faker = require('faker');
    const _ = require('lodash');
    return {
        clothes: _.times(50, (n) => {
            return {
                id: n,
                product: faker.commerce.product(),
                productDescription: faker.commerce.productDescription(),
                productMaterial: faker.commerce.productMaterial()
            }
        })
    }
}
