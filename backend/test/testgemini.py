import PIL.Image
import google.generativeai as genai
from dotenv import load_dotenv
import os
load_dotenv()
API_KEY = os.getenv('GOOGLE_API_KEY')
print(API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")
sample_pdf = genai.upload_file(media / "test.pdf")
sampla_file = PIL.Image.open("./prueba.png")
