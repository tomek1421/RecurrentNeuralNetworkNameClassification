import torch
import torch.nn as nn 

from utils import load_data

class RNN(nn.Module):
    # implement RNN from scratch rather than using nn.RNN
    def __init__(self, input_size, hidden_size, output_size):
        super(RNN, self).__init__()
        
        self.hidden_size = hidden_size
        # linear layers - input to hidden
        self.i2h = nn.Linear(input_size + hidden_size, hidden_size)
        # linear layers - input to output
        self.i2o = nn.Linear(input_size + hidden_size, output_size)
        # softmax layer
        self.softmax = nn.LogSoftmax(dim=1)
        
    def forward(self, input_tensor, hidden_tensor):
        combined = torch.cat((input_tensor, hidden_tensor), 1)
        
        # linear layers
        hidden = self.i2h(combined)
        output = self.i2o(combined)
        output = self.softmax(output)
        return output, hidden
    
    # helper function - initial hidden state in the begining
    def init_hidden(self):
        return torch.zeros(1, self.hidden_size)

# helper to get index of the greatest value
def category_from_output(output):
    category_idx = torch.argmax(output).item()
    # print(output)
    return all_categories[category_idx]

category_lines, all_categories = load_data()
n_categories = len(all_categories)

# hyperparameter
n_hidden = 128


