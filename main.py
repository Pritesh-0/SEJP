import uvicorn

if __name__ == "__main__":
    uvicorn.run("sejp.main:app", port=5000, reload=True)
