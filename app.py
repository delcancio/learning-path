from flask import Flask, abort, render_template

from posts import POSTS
from blog_catalog import BLOG_CATALOG, BLOG_CATEGORIES


app = Flask(__name__)


@app.route("/")
def home():
    featured_post = POSTS["information-assurance-and-security"]

    return render_template(
        "index.html",
        featured_post=featured_post
    )


@app.route("/blog")
def blog():
    return render_template(
        "blog.html",
        categories=BLOG_CATEGORIES
    )


@app.route("/blog/category/<category>")
def blog_category(category):
    category = category.lower()

    category_info = BLOG_CATEGORIES.get(category)

    if category_info is None:
        abort(404)

    entries = [
        entry
        for entry in BLOG_CATALOG
        if entry["category"] == category
    ]

    entries.sort(
        key=lambda entry: entry["published_iso"],
        reverse=True
    )

    return render_template(
        "category.html",
        category_slug=category,
        category=category_info,
        entries=entries
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


@app.route("/about")
def about():
    return render_template("profile.html")


if __name__ == "__main__":
    app.run(debug=True)