import PIL.Image
import google.generativeai as genai
from dotenv import load_dotenv
import os
load_dotenv()
genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
model = genai.GenerativeModel("gemini-1.5-flash")
sample_file = genai.upload_file(path="./prueba.jpg",
                            display_name="Jetpack drawing")
response = model.generate_content([sample_file, "Podrias decirme solo los datos que ves en la imagen? ejemplo [nombre, edad, etc]"])
print(response.text)