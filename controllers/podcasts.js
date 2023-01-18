import { Podcast } from "../models/podcast.js"


function createReview(req, res) {
Podcast.findById(req.params.id)
  .then(podcasts => {
    podcast.reviews.push(req.body)
    podcast.save()
    .then(() => {
      res.redirect(`/podcasts/$podcast._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}



function update(req, res) {
  req.body.nowShowing = !!req.body.nowShowing
  for (const key in req.body) {
    // Key can be "title", "releaseYear", etc.
    if(req.body[key] === "") delete req.body[key]
    // req.body.releaseYear is "" so we delete it.
  }
  Podcast.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(podcasts => {
    res.redirect(`/podcasts/${podcast._id}`) 
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function edit(req, res) {
  Podcast.findById(req.params.id)
  .then(podcast => {
    res.render("podcasts/edit", {
      title: "Edit Podcast",
      podcast, 
     
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}



function deletePodcast(req, res) {
  Podcast.findByIdAndDelete(req.params.id)
  .then(podcast => {
    res.redirect("/podcasts")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/podcasts")
  })
}

function newPodcast(req, res) {
  res.render("podcasts/new", {
    title: "Add Podcast"
  })
}

function index(req, res) {      
  Podcast.find({})
    .then(podcasts => {
      res.render('podcasts/index', {
        podcasts,
       title: "All Podcast",
       
      })
    })
    .catch(error => {
      console.log(error)
      // redirect to localhost:3000
      res.redirect('/podcasts')
    })
  }

  function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body [key]
    }
    Podcast.create(req.body)
    .then(podcasts => {
      res.redirect(`/podcasts${podcast._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/podcasts')
    })
  }

function show(req, res) {
  Podcast.findById(req.params.id)
  .then(podcast => {
      res.render('podcasts/show', {
        title: "Podcast Detail",
        podcast: podcast,
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/podcasts")
    })
  }
  

export {
  index,
  create,
  newPodcast as new, 
  show,
  deletePodcast as delete,
  edit,
  update,
  createReview,
  }