def recursive_length(s):
    # Base case: if the string is empty
    if s == "":
        return 0
    # Recursive case: 1 for the first character + length of the rest of the string
    return 1 + recursive_length(s[1:])

# Example usage
string_example = "Hello, world!"
length = recursive_length(string_example)
print(f"The length of the string is: {length}")
