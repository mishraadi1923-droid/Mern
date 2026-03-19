const movie = require('../Model/Movie');

exports.addMovie = async (req, res) => {
    const new_blog = new movie(req.body)
    const result = await new_blog.save()
    res.status(200).json(result)
}

exports.displayMovie = async (req, res) => {
    const blogs = await movie.find()
    res.status(200).json(blogs)
}

exports.showMovie = async (req, res) => {
    const blog = await movie.findById(req.params.id)
    res.status(200).json(blog)
}

exports.editMovie = async (req, res) => {
    await movie.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "updated" })
}
exports.delMovie = async (req, res) => {
    await movie.findByIdAndDelete(req.params.id)
    res.json({ message: "deleted" })
}
