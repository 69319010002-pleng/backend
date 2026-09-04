const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();

app.use(express.json());
// Serve static files จากโฟลเดอร์ public
app.use(express.static(path.join(__dirname, 'public')));

// Swagger API Documentation Route
const swaggerDocument = YAML.load('./api.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});