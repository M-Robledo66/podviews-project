import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
  rating: { type: Number, min: 1, max: 100, default: 100 }
}, {
  timestamps: true
})

	
const podcastSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  EpisodeNo: Number,
  host:{
    type: String,
    required: true,
  },
  guest:{
    type: String,
    required: false,
  },
  urlLink:{
    type: String,
    required: false,
  }, 
  reviews: [reviewSchema],

  owner: {type: Schema.Types.ObjectId, ref: "Profile"}

}, {
    timestamps: true
})
 const Podcast = mongoose.model("Podcast", podcastSchema)


export {
  Podcast
}
