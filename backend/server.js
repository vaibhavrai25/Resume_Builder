import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';

import path from 'path'
import { fileURLToPath } from 'url';
import resumeRoutes from './routes/resumeRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


const app = express();
const PORT = 4000;

app.use(cors())

// CONNECT DB
connectDB();

// MIDDLEWARE
app.use(express.json())
app.use('/api/auth',userRoutes )
app.use('/api/resume', resumeRoutes)

app.use(
    '/uploads',
    express.static(path.join(__dirname, 'uploads'), {
        setHeaders: (res, _path) => {
            res.set('Access-Control-Allow-Origin', 'http://localhost:5173')
        }
    })
)

// ROUTES
app.get('/', (req, res) => {
    res.send('API WORKING')
})

// ==========================================================
//          NEW: GLOBAL ERROR HANDLER
// This will catch any errors from your routes and send
// a proper JSON response back to the frontend.
// This MUST be the LAST app.use() in your file.
// ==========================================================
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the full error to your backend terminal
    res.status(500).json({ 
      message: err.message || 'Something went wrong on the server',
    });
});


app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`)
})
