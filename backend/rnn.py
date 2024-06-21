import torch
import torch.nn as nn 

from utils import load_data

class RNN(nn.Module):
    # implement RNN from scratch 
    def __init__(self, input_size, hidden_size, output_size):
        super(RNN, self).__init__()
        
        self.hidden_size = hidden_size
        # linear layers - input to hidden (warstwa liniowa) (konkatenacja wektora one-hot zakodowanego znaku wejściowego i poprzedniego stanu ukrytego)
        self.i2h = nn.Linear(input_size + hidden_size, hidden_size)
        # linear layers - input to output (warstwa liniowa, która mapuje połączone wejście i stan ukryty do wektora wyjściowego)
        self.i2o = nn.Linear(input_size + hidden_size, output_size)
        # softmax layer (normalizacji wyników,  interpretować jako prawdopodobieństwa logarytmiczne)
        self.softmax = nn.LogSoftmax(dim=1)
    
    # definiuje przepływ danych przez sieć, (dzieje się z danymi wejściowymi, gdy przechodzą przez różne warstwy modelu)
    def forward(self, input_tensor, hidden_tensor):
        combined = torch.cat((input_tensor, hidden_tensor), 1)
        
        # linear layers
        hidden = self.i2h(combined)
        output = self.i2o(combined)
        output = self.softmax(output)
        return output, hidden
    
    # helper function - inicjalizacja wartosci hidden state na poczatku
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


