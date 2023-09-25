from fastapi import APIRouter
import pandas

""" Loads the csv from file_path into an acceptable log data. """
df = pandas.read_excel("./data/mensal_estados-desde_jan2013.xlsx", skiprows=16)
log = df

router = APIRouter(
    prefix="/api/dados",
    tags=['dados'],
    responses={404: {"dados": "Not found"}}
)

@router.get("/", status_code=200)
async def get_data_infos():
    """
    Returns a list 
    """
    cases, df = [], log.copy().loc[0:10]

    return { "cases": df.to_json(orient = 'columns') }