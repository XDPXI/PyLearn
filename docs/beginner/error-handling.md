# Error Handling

## Preventing Errors

```py
try:
    # Your code
except:
    print("An error occurred!") # This will print "An error occourred!" when and error happens
```

## Outputting Errors

```py
try:
    # Your code
except Exception as e:
    print("An error occurred:", e) # This will print "An error occourred: " with the error
```