# ->> Project: Smart Bio Generator
# -> Collects user input (name, age, hobby, favorite quote). 
# -> Outputs a short formatted bio that looks like a mini profile page.

name = input("Enter your name: ")
age = int(input("Enter your age: "))
hobby = input("What is your hobby: ")
quote = input("Whats your favorite quote?: ")

bio = f"""Name: {name}
Age: {age}
Hobby: {hobby}
Quote: {quote}"""

print(f"{bio}")