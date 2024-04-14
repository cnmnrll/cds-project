from flask import Flask, request, jsonify
from flask_cors import CORS
from keras.models import load_model
import keras.utils as image
import numpy as np
from PIL import Image
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.applications.resnet50 import preprocess_input
from io import BytesIO

app = Flask(__name__)
CORS(app)

# Load the trained model
model_path = 'models_h5/resnet50.h5'
model = load_model(model_path)

class_labels = ['Cardboard', 'Glass',  'Metal', 'Paper',  'Plastic', 'Trash']

@app.route('/classify', methods=['POST'])
def classify():
    try:       
        image_file = request.files['image']
        img_content = image_file.read()
        img_byte = BytesIO(img_content)

        # Image Preprocessing
        img = image.load_img(img_byte, target_size=(300, 300))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)

        # Image Prediction
        prediction = model.predict(img_array)
        predicted_class = np.argmax(prediction)
        predicted_label = class_labels[predicted_class]
        return jsonify({'prediction': predicted_label})
    except Exception as e:
        return jsonify({'error': 'Error retrieving image'})


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000, debug=True)