import mongoose from 'mongoose'

const Schema = mongoose.Schema
	
const reviewSchema = new Schema({
  title: String,
  rating: Number,

}, {
    timestamps: true
})
const Review = mongoose.model('Review', reviewSchema)

module.exports = mongoose.model('Review', reviewSchema)
export {
  Review
}