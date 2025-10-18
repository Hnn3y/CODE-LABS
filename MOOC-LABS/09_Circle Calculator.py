# Ask the user for the radius of a circle. 
# Calculate and print both the area and circumference. 
# Use 3.14159 for pi.

rad = int(input("Enter the radius"))
pi = 3.14159

Area = pi * (rad**2)
Circum = 2 * pi * rad

print(f"The Area is {Area} and the Circumference is {Circum}")