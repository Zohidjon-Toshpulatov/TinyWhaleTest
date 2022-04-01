import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Working');
});
app.get('/api/users', (req: Request, res: Response) => {
    let names: any = req.query.names;
    names = names.split(',');
    names = names.map((name: any) => name[0].toUpperCase() + name.slice(1));
    names = names.sort((a: string, b: string) => a > b ? 1 : -1);
    console.log(names);
    // console.log(Array.isArray(names));
    // let name =names[0]
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`Server is working ${port}`)
})