from pdf2image import convert_from_path
import os

def split_pdf_to_png(input_pdf_path, output_folder):
    # Crear la carpeta de salida si no existe
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    # Convertir PDF a imágenes
    pages = convert_from_path(input_pdf_path)
    
    for i, page in enumerate(pages, start=1):
        # Guardar cada página como PNG
        output_path = os.path.join(output_folder, f"page_{i}.png")
        page.save(output_path, "PNG")
        print(f"Página {i} guardada como {output_path}")

# Ruta del PDF de entrada
input_pdf = "archivo.pdf"

# Carpeta de salida para las imágenes PNG
output_folder = "salida_png"

split_pdf_to_png(input_pdf, output_folder)
