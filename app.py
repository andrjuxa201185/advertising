import os
from flask import Flask, redirect, render_template, session, request
from werkzeug.security import check_password_hash, generate_password_hash
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail, Message
from werkzeug.utils import secure_filename
from flask_uploads import UploadSet, IMAGES

app = Flask(__name__)
mail = Mail(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///client.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
app.config['MAX_CONTENT_LENGTH'] = 8 * 1024 * 1024
photos = UploadSet('photos', IMAGES)
UPLOAD_FOLDER = 'static/foto/'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'andrjuxa201185@gmail.com'
app.config['MAIL_PASSWORD'] = '0669330158'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

class Client(db.Model):
    id = db.Column('client_id', db.Integer, primary_key = True)
    name = db.Column(db.String(31), nullable=False)
    email = db.Column(db.String(31))
    phone = db.Column(db.String(20), nullable = False)
    text = db.Column(db.String(701), nullable = False)
    path = db.Column(db.String(100), nullable = False)

from app import db
from app import Client
db.create_all()


# def send_email(subject, sender, recipients, text_body, html_body):
#     msg = Message(subject, sender = sender, recipients = recipients)
#     msg.body = text_body   # or
#     # msg.html = html_body 
#     mail.send(msg)



@app.route("/send")
def ind():
    msg = Message('Hello', sender = 'yourId@gmail.com', recipients = ['andrjuxa201185@gmail.com'])
    msg.body = "Hello Flask message sent from Flask-Mail"
    # msg.html = render_template('send.html')
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
        name = request.form.get('name').strip()
        email = request.form.get('email')
        if not email:
            email = "no_email"
        else:
            email.strip()
        phone = request.form.get('phone').strip()
        text = request.form.get('text')
        
        if 'file' in request.files:
            file = request.files['file']
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                filename = photos.resolve_conflict(UPLOAD_FOLDER,filename)
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                path = UPLOAD_FOLDER + filename
            else:
                path = 'static/img/nofoto.png'
        else:
            path = 'static/img/nofoto.png'
        
        print(path)
        obj = Client(name = name.lower(), text = text, email = email, phone = phone, path = path)
        db.session.add(obj)
        db.session.commit()
    
    return redirect('/')

if __name__ == '__main__':
    app.run(debug = True)