import express from 'express';
// Import math utils
import math_utils_add from './math-utils/math_utils_add.js';
import math_utils_pow from './math-utils/math_utils_pow.js';
// Import swagger
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerConfig from './swagger-config.js';
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Swagger setup
const specs = swaggerJsDoc(swaggerConfig);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// REQUEST HANDLERS

// Endpoint that adds two numbers
app.get('/add', (req, res) => {
  res.send(math_utils_add(req.query.a, req.query.b).toString());
});

// Endpoint that raises one number to the power of another
app.get('/pow', (req, res) => {
  res.send(math_utils_pow(req.query.a, req.query.b).toString());
});