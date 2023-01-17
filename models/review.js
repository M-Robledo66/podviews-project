import mongoose from 'mongoose'

const Schema = mongoose.Schema
	
const reviewSchema = new Schema({
  title: String,
  rating: Number,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}

}, {
    timestamps: true
})
export const Review = mongoose.model('Review', reviewSchema)

// module.exports = mongoose.model('Review', reviewSchema)
// export {
//   Review
// }