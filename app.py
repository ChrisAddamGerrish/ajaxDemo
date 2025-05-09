from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/userData', methods=['POST'])
def returnData():
    data = request.get_json()

    if data.get('userText'):
        data['userText'] = data['userText'].upper()

        return render_template('data.html', data=data)


if __name__ == '__main__':
    app.run(debug=True)
