import express, { json, urlencoded } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/index.js'
import session from 'express-session';
import flash from 'connect-flash';

const app = express();

//config path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//settings
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs')

//middlewares
app.use(express(json()));
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false
}))
app.use(flash())

//routes
app.use(router)

app.listen(3000)
console.log('Server on port in ', 3000);