# mini-exercise

# Modify this program so that if the user enters "divide", it should also work (e.g., 8 / 2 = 4).

num1 = int(input("Number 1: "))
num2 = int(input("Number 2: "))
operation = input("Opeartion to perform: ")

if operation == "add":
   result = num1 + num2
   print(f"{num1} + {num2} = {result}")

elif operation == "divide":
   result = num1 / num2
   print(f"{num1} / {num2} = {result}")

else:
   print("Nothing to be done")