import os

from flask import Flask, jsonify, render_template, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)


@app.route("/")
def index():
    return jsonify({
        "success": True,
        "Page": "index"
    })


@app.route("/home")
def home():
    return render_template("home.html")
