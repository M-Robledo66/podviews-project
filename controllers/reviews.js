function newReview(req, res) {
    res.render("reviews/new", {
        title: "Add Review",
      })
}
export {
    newReview as new
  }