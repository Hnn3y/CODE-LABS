# Stop only if the user types the same word 3 times in a row

story = ""
previous_word = ""
repeat_count = 0

while True:
    word = input("Please type in a word: ")
    
    if word == "end":
        break
    if word == previous_word:
        repeat_count
    if repeat_count == 2:
        break
    # TODO: Check if word == previous_word
    # If yes, increase repeat_count
    # If repeat_count == 2 (meaning 3rd time), break
    # If no, reset repeat_count to 0
    
    story += word + " "
    previous_word = word

print(story)