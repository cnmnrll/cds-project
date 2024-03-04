from flask import Flask, request, jsonify
from keras.models import load_model
from keras.preprocessing import image
import numpy as np

app = Flask(__name__)

# Load the trained model
model = load_model('image_classification_model.h5')

@app.route('/classify', methods=['POST'])
def classify():
    # Get the image file from the request
    image_file = request.files['image']

    img = image.load_img(image_file, target_size=(64, 64))

    # Convert the image to a numpy array
    img_array = image.img_to_array(img)

    # Expand dimensions to match the input shape of the model
    img_array = np.expand_dims(img_array, axis=0)

    # Normalize the image
    img_array = img_array / 255.0

    # Make predictions
    prediction = model.predict(img_array)

    # Get the predicted class
    predicted_class = np.argmax(prediction)

    # Define class labels
    class_labels = ['glass', 'metal', 'paper']

    # Get the corresponding label
    predicted_label = class_labels[predicted_class]

    # Return the result as JSON
    return jsonify({'prediction': predicted_label})

if __name__ == '__main__':
    app.run(debug=True)