import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/ToDoPractice')
  .then(() => console.log('Connected to Database'))

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Content = new Schema({
  _id: ObjectId,
  content: String
})

const ContentModel = mongoose.model('Item', Content)

export const loadContent = async (req, res) => {
   res.json(await ContentModel.find({}))
}

export const postContent = async (req, res) => {
    try {
        const document = new ContentModel({
          _id: new mongoose.Types.ObjectId(),
          content: req.body.content
        })
        const result = await document.save();
        console.log('Document inserted successfully:', result);
      } catch (error) {
        console.error('Error inserting document:', error.message);
      } 
}

export const deleteContent = async (req, res) => {
    const ID = req.body._id
    console.log(ID)
    const result = await ContentModel.deleteOne({ _id: ID })
}