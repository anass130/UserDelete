import express from 'express';
import bodyParser  from 'body-parser';
import 'babel-polyfill';
import cors from 'cors';
import env from './env';
import userRoute from './routes/userRoute';
import request  from 'request';

const app = express();
const options = {
  url: 'http://localhost:3000/users/delete',
  form: {
    user_id: 8
  }
};

request.post(options, (err, res, body) => {
  if (err) {
      return console.log(err);
  }
});

// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());
app.use(bodyParser.json());

// Add middleware for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }))

app.get('/',function(req,res){
  res.send('start the node server on port : '+ env.port);
  // res.redirect('users/save')
});
app.use('/api/v1',userRoute);
app.use('/users',userRoute);
// app.use('/api/v1', userRoute);

app.listen(env.port).on('listening', () => {
  console.log(` Server 🚀 are live on ${env.port} `);
});

export default app;
