import random
from string import ascii_uppercase

size = 10
grid = []

def gen_grid():
  tempRow = []
  cur = []
  
  for i in range(size):
    tempParentRpw = []
    for j in range(size):
      tempRow.append(random.choice(ascii_uppercase))
    tempParentRpw.append(tempRow)
    tempRow = []
    cur.append(tempParentRpw)

  return cur
    
    
def print_grid():
  for row in grid:
    outRow = ""
    for col in row:
      for i in col:
        outRow += i + " "
      print(outRow)
    
  
grid = gen_grid()
print_grid()


