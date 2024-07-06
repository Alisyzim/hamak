import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// مسار أساسي للتأكد من تشغيل الخادم
app.get('/', (req, res) => {
  res.send('Server is running');
});

// تكوين المسارات الأخرى
app.use('/api/user', userRoute);
app.use('/api/residency', residencyRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});