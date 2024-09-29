const express =require('express');
/*Cette ligne importe le module Express. Express est un framework pour Node.js qui facilite la gestion des requêtes HTTP, des routes, et la construction d'applications web.*/
const cors =require('cors');
const blogRoutes=require('./routes/blogRoutes');
const app= express();
const mongoose =require('mongoose');
const {Blog}=require('./models/blog.model');

require('dotenv').config();

const PORT =5000;
app.use(cors());//to resolve cors errors
app.use(express.json());
app.use('/',blogRoutes);
mongoose.connect(process.env.DB_URI).then((result)=>{
    console.log(result)
    app.listen(PORT,()=>{console.log('server is listenning ')
    });
}).catch(err=>{console.log(err);})
