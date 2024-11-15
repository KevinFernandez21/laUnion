from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Any, List
import pandas as pd

app = FastAPI()

# Permitir CORS desde http://localhost:3000 (tu frontend en React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Cambia esto a "*" para permitir cualquier origen
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ruta del archivo CSV
CSV_FILE = "./data/part1.csv"

class Row(BaseModel):
    columns: List[Any]

class NewRow(BaseModel):
    row: dict

@app.get("/data")
def read_data():
    try:
        df = pd.read_csv(CSV_FILE)
        data = df.fillna("").to_dict(orient="records")
        return data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.put("/data/{index}")
def update_data(index: int, row: Row):
    try:
        df = pd.read_csv(CSV_FILE)
        updated_row = {col: val for col, val in zip(df.columns, row.columns)}
        
        for col, val in updated_row.items():
            if pd.api.types.is_numeric_dtype(df[col]):
                if val == "":
                    df.at[index, col] = pd.NA
                else:
                    df.at[index, col] = pd.to_numeric(val, errors='coerce')
            else:
                df.at[index, col] = val
        
        df.to_csv(CSV_FILE, index=False)
        return {"message": "Row updated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/add-row")
def add_row(new_row: NewRow):
    try:
        df = pd.read_csv(CSV_FILE)
        new_row_df = pd.DataFrame([new_row.row])
        df = pd.concat([df, new_row_df], ignore_index=True)
        df.to_csv(CSV_FILE, index=False)
        return {"message": "Row added successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.delete("/data/{index}")
def delete_row(index: int):
    try:
        df = pd.read_csv(CSV_FILE)
        
        # Verificar que el índice sea válido
        if index < 0 or index >= len(df):
            raise HTTPException(status_code=404, detail="Index out of range")
        
        # Eliminar la fila por índice y guardar el DataFrame
        df = df.drop(index).reset_index(drop=True)
        df.to_csv(CSV_FILE, index=False)
        
        return {"message": "Row deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))