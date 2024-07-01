import json

dictionary = json.load(open("data.json", 'r'))

def definition(word):
    if word in dictionary:
        print(f'''The definition of {word.upper()} is: 
              {dictionary[word]}''')
    else:
        return print("The word doesn't exist, Please double check")

word = input("Hello, which word do you want a defition for ? : ")
definition(word)
