from flask import Flask, request, jsonify
from flask_cors import CORS
from keras.models import load_model
import keras.utils as image
import numpy as np
from PIL import Image

app = Flask(__name__)
CORS(app)

# Load the trained model
model_path = 'models_h5/resnet50.h5'
model = load_model(model_path)

class_labels = ['cardboard', 'glass', 'metal', 'paper', 'plastic', 'trash']

@app.route('/classify', methods=['POST'])
def classify():
    if 'image' not in request.files:
        print('No file part')
        return jsonify({'error': 'No file part'})

    image_file = request.files['image']
    #img = image.load_img(image_file, target_size=(64, 64))
    img = Image.open(image_file)
    img = img.resize((300, 300)) 
    img = img.convert('RGB')
    img_array = np.array(img)
    img_array = img_array / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    prediction = model.predict(img_array)
    predicted_class = np.argmax(prediction)
    predicted_label = class_labels[predicted_class]
    return jsonify({'prediction': predicted_label})

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000, debug=True)