from flask import Flask, abort, render_template

from posts import POSTS


app = Flask(__name__)


@app.route("/")
def home():
    featured_post = POSTS["information-assurance-and-security"]

    return render_template(
        "index.html",
        featured_post=featured_post
    )


@app.route("/blog/<slug>")
def article(slug):
    post = POSTS.get(slug)

    if post is None:
        abort(404)

    return render_template(
        "article.html",
        post=post
    )


if __name__ == "__main__":
    app.run(debug=True)