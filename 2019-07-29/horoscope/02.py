import random

horoscopes = [
    "Today will be a good day",
    "Doom is a foot",
    "Money is coming your way",
    "You will meet someone special",
    "Stay inside Today",
    
]

choices = [
    "A: Add an item",
    "B: Remove an item",
    "C: Edit an item"
]

def fortune():
    return horoscopes[random.randint(0,len(horoscopes) - 1)]

def add(item):
    print("Adding new horoscope.")
    horoscopes.append(item)
    return

def remove(item):
    print("Remove element at " + str(item))
    horoscopes.pop(item)
    pass

def change(item, new):
    print("Changing item " + str(item))
    horoscopes[item] = new;

def printList(list):
    print("\nCurrent Horoscope:")
    for i in range(len(list)):
        print(str(i) + ": " + list[i])
    print()


def main():
    editing = True

    while (editing):
        editing = bool(input("Would you like to edit the horoscopes?(True or False)"))
        printList(horoscopes)

        for i in choices:
            print(i)

        choice = input()

        if (choice == "A"):
            item = input("What would you like to add?")
            add(item)

        elif (choice == "B"):
            item = int(input("Which item would you like to remove?"))
            remove(item)

        else:
            item = int(input("Which item would you like to change?"))
            new = input("How would you like to change the item?")
            change(item,new)







main()
