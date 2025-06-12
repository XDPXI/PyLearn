running = True # Set a flag to keep the loop running
while running: # This loop will continue until the flag is set to False
    x = input("Enter anything: ") # Get any input from the user
    print("You entered:", x) # Print the entered value
    print("Lowercase entered value:", x.lower()) # Print the entered value in lowercase

    if x.lower() == "exit": # If the user enters "exit", break the loop
        running = False