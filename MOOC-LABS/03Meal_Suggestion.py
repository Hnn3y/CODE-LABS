# -> Write a program that asks the user:

# - time of day (morning, afternoon, evening)

# - are you hungry? (yes or no)

#Rules:

#Always start with "Drink some water"

#If time is morning → add " Have breakfast"

#If time is afternoon → add " Eat lunch"

#If time is evening → add " Eat dinner"

#If hungry = "no" → replace all suggestions with "Maybe just a snack"

#👉 Expected:
#Input: morning, yes
#Output: Drink some water Have breakfast

day = input("What time of the day is it? ").lower()
belly = input("Are you hungry? (yes/no): ").lower()

if belly == "no":
   suggest = "Maybe just a snack"

else:
   suggest = "Drink some water"

if day == "morning":
   suggest += " Have breakfast"

if day == "afternoon" :
   suggest += " Eat lunch"

if day == "evening" :
   suggest += " Eat dinner"

print(suggest)