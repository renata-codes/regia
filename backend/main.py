from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="RegIA")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"status": "RegIA online"}

@app.post("/consultar")
def consultar(pergunta: dict):
    texto = pergunta.get("pergunta", "")

    return {
        "resposta": f"Recebi sua pergunta: {texto}"
    }
    