from flask import Flask, render_template


def create_app():
    app = Flask(__name__)

    @app.route('/')
    def home():
        return render_template('main.html')

    @app.route('/newMeeting')
    def newMeeting():
        return render_template('newMeeting.html')
    return app
