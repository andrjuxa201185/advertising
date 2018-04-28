from flask import Flask, redirect, render_template, session, request
from werkzeug.security import check_password_hash, generate_password_hash
# from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail, Message

app = Flask(__name__)
mail = Mail(app)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///students.db'
# db = SQLAlchemy(app)
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'


app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'andrjuxa201185@gmail.com'
app.config['MAIL_PASSWORD'] = '0669330158'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)


@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

# class Students(db.Model):
#    id = db.Column('student_id', db.Integer, primary_key = True)
#    name = db.Column(db.String(100), unique = True, nullable=False)
#    city = db.Column(db.String(50), unique=True)  

# from app import mail
# db.create_all()
# from app import Students

# def send_email(subject, sender, recipients, text_body, html_body):
#     msg = Message(subject, sender = sender, recipients = recipients)
#     msg.body = text_body   # or
#     # msg.html = html_body 
#     mail.send(msg)



@app.route("/send")
def ind():
    msg = Message('Hello', sender = 'yourId@gmail.com', recipients = ['andrjuxa201185@gmail.com'])
#    msg.body = "Hello Flask message sent from Flask-Mail"
    msg.html = render_template('send.html')
    mail.send(msg)
    return redirect('/')



@app.route("/")
def index():
    # send_email("rrrrr", "and@hg.com", ["andrjuxa201185@gmail.com"], "hello send message", '<b>HTML</b>')
    return render_template("index.html")

@app.route('/price')
def price():
    return render_template('price.html')

@app.route('/contact', methods = ["GET", "POST"])
def contact():
    if request.method == "GET":
        return render_template('contact.html')
    else:
        pass




if __name__ == '__main__':
    app.run(debug=True)