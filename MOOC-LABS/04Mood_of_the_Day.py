#Program asks your name and greets you differently based on the time of day (morning, afternoon, night).

name = input("Whats your name? ")
greet = input("What time of the day is it? (Morning, Afternoon, Night)")

if greet == "Morning":
   print(f"Good Morning {name}")

elif greet == "Afternoon":
   print(f"Good Afternoon {name}")

elif greet == "Night":
   print(f"Good Evening {name}")

else:
   print(f"{name}, I didnt recognize the time of day.")