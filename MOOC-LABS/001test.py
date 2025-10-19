student_firstname = input("Whats your first name? ")
student_lastname = input("Whats your last name? ")
student_name = f"{student_firstname} {student_lastname}"
student_score = int(input("Whats your score? "))

if student_score >= 75:
   grade = "A"
elif student_score >= 60:
   grade = "B"
elif student_score >= 50:
   grade = "C"
else: 
   grade = "F"

print(f"Student: {student_name}")
print(f"Score: {student_score}")
print(f"student Score: {grade}")

