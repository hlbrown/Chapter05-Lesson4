import Post from '../models/post.model'
import errorHandler from './../helpers/dbErrorHandler'
import formidable from 'formidable'
import fs from 'fs'

const create = (req, res, next) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded"
      })
    }
    let post = new Post(fields)
    post.postedBy= req.profile
    if(files.photo){
      post.photo.data = fs.readFileSync(files.photo.path)
      post.photo.contentType = files.photo.type
    }
    try {
      let result = await Post.save()
      res.json(result)
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  })
}
  
  const postByID = async (req, res, next, id) => {
    try{
      let post = await Post.findById(id)
                            .populate('postedBy', '_id name')
                            .exec()
      if (!post)
      return res.status(400).json({
        error: "post not found"
      })
      req.post = post
      next()
    }catch (err){
      return res.status('400').json({
        error: "Could not retrieve use port"
      })
    }
  }
  
  const listByUser = (req, res) => {
    Post.find({postedBy: req.profile._id})
    .populate('comments', 'text created')
    .populate('comments.postedBy', '_id name')
    .populate('postedBy', '_id name')
    .sort('-created')
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(posts)
    })
  }
  
  const listNewsFeed = (req, res) => {
    let following = req.profile.following
    following.push(req.profile._id)
    Post.find({postedBy: { $in : req.profile.following } })
    .populate('comments', 'text created')
    .populate('comments.postedBy', '_id name')
    .populate('postedBy', '_id name')
    .sort('-created')
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(posts)
    })
  }
  
  const remove = (req, res) => {
    let post = req.post
      post.remove((err, deletedPost) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
        }
        res.json(deletedPost)
      })
  }
  
  const photo = (req, res, next) => {
      res.set("Content-Type", req.post.photo.contentType)
      return res.send(req.post.photo.data)
  }
  
  const like = async (req, res) => {
    try{
      let result = await Post.findByIdAndUpdate(req.body.postId,{$push: {likes: req.body.userId}}, {new: true})
      res.json(result)
    }catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }
  
  const unlike = async (req, res) => {
    try{
      let result = await Post.findByIdAndUpdate(req.body.postId, {$pull: {likes: req.body.userId}}, {new: true})
      res.json(result)
    }catch(err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }
  
  
  const comment = async (req, res) => {
    let comment = req.body.comment
    comment.postedBy = req.body.userId
    try{
      let result = await Post.findByIdAndUpdate(req.body.postId, {$push: {comments: comment}}, {new: true})
                              .populate('comments.postedBy', '_id name')
                              .populate('postedBy', '_id name')
                              .exec()
      res.json(result)
    }catch(err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }
  const uncomment = async (req, res) => {
    let comment = req.body.comment
    try{
      let result = await Post.findByIdAndUpdate(req.body.postId, {$pull: {comments: {_id: comment._id}}}, {new: true})
                            .populate('comments.postedBy', '_id name')
                            .populate('postedBy', '_id name')
                            .exec()
      res.json(result)
    }catch(err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }
  
  const isPoster = (req, res, next) => {
    let isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id
    if(!isPoster){
      return res.status('403').json({
        error: "User is not authorized"
      })
    }
    next()
  }
  
  export default {
    listByUser,
    listNewsFeed,
    create,
    postByID,
    remove,
    photo,
    like,
    unlike,
    comment,
    uncomment,
    isPoster
  }
  