from flask import Flask, request

import torch
from utils import N_LETTERS
from utils import line_to_tensor
from rnn import RNN, n_hidden, n_categories, category_from_output
from validation import Name
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# load model from file
loaded_rnn = RNN(N_LETTERS, n_hidden, n_categories)
loaded_rnn.load_state_dict(torch.load('rnn_names_model.pth'))
loaded_rnn.eval()

# validation schema
name_schema = Name()

def predict(input_line):
    print(f"\n> {input_line}")
    with torch.no_grad():
        line_tensor = line_to_tensor(input_line)
        
        hidden = loaded_rnn.init_hidden()
    
        for i in range(line_tensor.size()[0]):
            output, hidden = loaded_rnn(line_tensor[i], hidden)
        
        guess = category_from_output(output)
        return guess

@app.route('/name', methods=['POST'])
def check_name():
    req = request.json

    errors = name_schema.validate(req)
    if errors:
        return errors, 400
    
    result = predict(req['name'])
    return {"result": result}