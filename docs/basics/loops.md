# Loops

## While True
`while True:` loops last forever until you call `break`
```py
while True: # This loop will continue indefinitely
    x = input("Enter anything: ") # Get any input from the user
    print("You entered:", x) # Print the entered value

    break # This will stop the infinite loop - breaks the loop
```

## While Variable

For while loops using a variable you have to call a variable and set it to true before you call the loop. Example:
```py
running = True # Set a flag to keep the loop running
while running: # This loop will continue until the flag is set to False
    x = input("Enter anything: ") # Get any input from the user
    print("You entered:", x) # Print the entered value
    print("Lowercase entered value:", x.lower()) # Print the entered value in lowercase

    if x.lower() == "exit": # If the user enters "exit", break the loop
        running = False
```

## For Loops

```py

```