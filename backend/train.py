import torch
import torch.nn as nn 
import matplotlib.pyplot as plt 

from utils import N_LETTERS
from utils import random_training_example
from rnn import RNN, n_hidden, n_categories, all_categories, category_lines, category_from_output

# category_lines - dictionary key=country, value=names, all_categories - list of all the countries

# setup RNN
rnn = RNN(N_LETTERS, n_hidden, n_categories)

# print(category_from_output(output))
# Irish

# parameters for rnn
criterion = nn.NLLLoss()
learning_rate = 0.005
optimizer = torch.optim.SGD(rnn.parameters(), lr=learning_rate)

# helper func
def train(line_tensor, category_tensor):
    hidden = rnn.init_hidden()
    
    # for whole name
    for i in range(line_tensor.size()[0]):
        output, hidden = rnn(line_tensor[i], hidden)
        
    loss = criterion(output, category_tensor)
    
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()
    
    return output, loss.item()

current_loss = 0
all_losses = []
plot_steps, print_steps = 1000, 5000
n_iters = 100000

# Initialize variables for accuracy tracking
correct_count = 0
# training loop
for i in range(n_iters):
    category, line, category_tensor, line_tensor = random_training_example(category_lines, all_categories)
    
    # actual training
    output, loss = train(line_tensor, category_tensor)
    current_loss += loss

    # Check if the guess was correct
    guess = category_from_output(output)
    correct = guess == category
    correct_count += correct
    
    # every 1000 step
    if (i+1) % plot_steps == 0:
        all_losses.append(current_loss / plot_steps)
        current_loss = 0
    
    if (i+1) % print_steps == 0:
        accuracy = correct_count / print_steps * 100
        correct_count = 0  # Reset correct count after printing accuracy
        print(f"{i+1} {(i+1)/n_iters*100:.2f}% {loss:.4f} {line} / {guess} {'CORRECT' if correct else f'WRONG ({category})'}")
        print(f"Accuracy: {accuracy:.2f}%")

        
plt.figure()
plt.plot(all_losses)
plt.show()

torch.save(rnn.state_dict(), "rnn_names_model2.pth")