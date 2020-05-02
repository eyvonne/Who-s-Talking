from flask import Flask, render_template, request


def create_app():
    app = Flask(__name__)

    @app.route('/')
    def home():
        return render_template('main.html')

    @app.route('/newMeeting')
    def newMeeting():
        return render_template('newMeeting.html')

    @app.route('/runningMeeting', methods=['GET', 'POST'])
    def run_meeting():
        if request.method == 'POST':
            num = int(request.form['numAttendees'])
            user = request.form['facilitator']
            attendees = [request.form[f'attendee{i}'] for i in range(num)]
        return render_template('meeting.html', User=user, attendees=attendees)

    @app.route('/playground')
    def playground():
        return render_template('timer.html')

    return app
