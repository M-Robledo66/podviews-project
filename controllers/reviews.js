import { Review } from '../models/review.js'

// function newReview(req, res) {
//     res.render("reviews/new", {
//       title: "Add Review",
//     })
//   }
// function show(req, res){
//     Review.findById(req.params.id)
//     .then(review =>{
//         res.render('reviews/show', {
//             title: 'Review Detail',
//             review: review
//         })
//     })
// }
function index(req, res) {
    console.log(req.date);
    console.log(req.time)
    Review.find({})
    .then(reviews => {
      res.render('reviews/index', {
       reviews,
       title: "All Reviews",
      })
    })
    .catch(error => {
      console.log(error)
      // redirect to localhost:3000
      res.redirect('/reviews')
    })
  }

export {
  index,
  }