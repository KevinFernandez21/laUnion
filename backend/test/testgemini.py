import PIL.Image
import google.generativeai as genai
from dotenv import load_dotenv
import os
load_dotenv()

genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
model = genai.GenerativeModel("gemini-1.5-flash")
sample_file = genai.upload_file(path="jetpack.jpg",
                            display_name="Jetpack drawing")

# Prompt the model with text and the previously uploaded image.
response = model.generate_content([sample_file, "Describe how this product might be manufactured."])

print(response.text)

