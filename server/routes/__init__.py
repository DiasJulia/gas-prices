from fastapi import APIRouter

from routes import dados

routes = APIRouter()

routes.include_router(dados.router)