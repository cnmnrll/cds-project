import numpy as np
from keras.models import Sequential
from keras.layers import Conv2D, MaxPooling2D, Flatten, Dense
from keras.utils import to_categorical

# Dummy dataset for demonstration purposes
# You should replace this with your actual dataset
X_train = np.random.random((100, 64, 64, 3))  # 100 images of size 64x64 with 3 channels
y_train = np.random.randint(0, 3, size=(100))  # Random labels: 0, 1, or 2

# Preprocess the data
X_train = X_train.astype('float32') / 255.0
y_train = to_categorical(y_train)

# Define the CNN model
model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(64, 64, 3)),
    MaxPooling2D((2, 2)),
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    Conv2D(64, (3, 3), activation='relu'),
    Flatten(),
    Dense(64, activation='relu'),
    Dense(3, activation='softmax')
])

# Compile the model
model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

# Train the model
model.fit(X_train, y_train, epochs=10, batch_size=32)

# Save the trained model
model.save('image_classification_model.h5')