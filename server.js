import express from 'express';
import path from 'path';
import post from './routes/post.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
import { fileURLToPath } from 'url';

const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname()
console.log(__filename);

const app = express();


// BodyPasser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(logger);
// Logger Middleware

app.use(express.static(path.join(__dirname,'public')));

app.use('/api/post', post);


// Error Handler
app.use(notFound);
app.use(errorHandler);

// Get posts with and without limit methods
app.listen(port, () => console.log(`Server running on port`, port));
