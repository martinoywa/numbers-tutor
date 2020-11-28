# Application runner.
from app import app


if __name__ == "__main__":
    app.run(host="192.168.8.104", debug=True)
