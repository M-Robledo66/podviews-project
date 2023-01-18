import { Podcast } from "../models/podcast.js"

function newPodcast(req, res) {
  res.render("podcasts/new", {
    title: "Add Podcast"
  })
}

function index(req, res) {      
  Podcast.find({})
    .then(podcasts => {
      res.render('podcasts/index', {
       podcasts: podcasts,
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
    .then(podcast => {
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
  }