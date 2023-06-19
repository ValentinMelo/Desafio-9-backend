import express from 'express';
import ProductRoutes from './productRoutes.js';
import CartRoutes from './cartRoutes.js';
import TicketRoutes from './ticketRoutes.js';
import { faker } from '@faker-js/faker';

const router = express.Router();

router.use(express.json());
router.use('/products', ProductRoutes);
router.use('/carts', CartRoutes);
router.use('/tickets', TicketRoutes);

// Endpoint para el Mocking de productos
const faker = require('faker');

router.get('/mockingproducts', (req, res) => {
  const mockedProducts = [];
  for (let i = 0; i < 100; i++) {
    const product = {
      title: faker.commerce.productName(),
      description: faker.lorem.sentence(),
      code: faker.string.alphanumeric(),
      price: faker.commerce.price(),
      status: faker.datatype.boolean(),
      stock: faker.string.alphanumeric(),
      category: faker.commerce.department(),
      thumbnail: faker.image.url()
    };
    mockedProducts.push(product);
  }
  res.json(mockedProducts);
});



export default router;
