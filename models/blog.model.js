const mongoose= require('mongoose');
const {Schema} =mongoose;//sont utilisées pour faire de la destructuration d'objet en JavaScript.

//Qu'est-ce que la destructuration d'objet ?
//La destructuration d'objet est une fonctionnalité de JavaScript qui permet d'extraire des propriétés d'un objet et de les assigner à des variables distinctes. Cela simplifie l'extraction de données sans avoir besoin de répéter l'objet.
//En destructurant, vous pouvez directement extraire Schema de l'objet mongoose, ce qui rend le code plus concis :

const blogSchema=new Schema({
    title:{
    type:String,
    required:true
    },
    description:{
        type:String,
        required:true
        },
        author:{
            type:String,
            required:true
            }
},{Timestamp:true});
 const Blog =mongoose.model("blog",blogSchema);/*timestamps: true indique à Mongoose d'ajouter automatiquement deux champs supplémentaires à chaque document :
 createdAt : l'heure à laquelle le document a été créé.
 updatedAt : l'heure à laquelle le document a été modifié pour la dernière fois.*/
module.exports= {Blog};