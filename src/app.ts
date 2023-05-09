import express, {Application, Request, Response} from 'express';
const app: Application = express();
const port = 3000;

app.use(express.json());

const mockData = [
    {
        name: "Barry Meadows",
        email: "BMeadows@BarryCo.com"
    },
    {
        name: "Solomn Grundy",
        email: "SGrundy@grundycorp.com"
    }
]

//GET endpoints
app.get('/', (req: Request, res: Response) => {
    res.send(mockData);
});

//Post endpoint
app.post('/api/create', (req: Request, res: Response) => {
    const { name, email } = req.body;
    res.status(201).json({
        name: name,
        email: email
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);  
});
