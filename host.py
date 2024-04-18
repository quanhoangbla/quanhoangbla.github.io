from http.server import *

class Server(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('content-type', 'text/html') 
        self.end_headers() 
        with open('web.html','r') as file:
            self.wfile.write(file.read().encode())

server=HTTPServer(('127.0.0.1',6969),Server)
server.serve_forever()