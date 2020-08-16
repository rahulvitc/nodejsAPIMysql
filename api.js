const express = require('express');
const app = express();
const userRouter = require('./users/user.router');

const routerMe = require('./test/test');
const router = require('./users/user.router');

app.use(express.json());

app.use('/api/users', userRouter);

app.get('/test',(req,res)=>{
    res.send('xwxxxxx' + routerMe.test);
    res.end();
})

app.listen(3000, ()=> console.log('listening at port 3000'))
