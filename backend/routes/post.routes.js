const auth = require('../middlewares/auth');

module.exports = app => {
    const posts = require("../controllers/post.controller.js");

    app.post("/posts", auth.token, posts.create);
    app.get("/posts", auth.token, posts.findAll);
};
