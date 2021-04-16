import { Request, Response, Application } from 'express';
import express from 'express';

const app: Application = express();
const PORT = 3000;
app.get('/', (req: Request, res: Response) => res.send('Express + TypeScript Server2'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});