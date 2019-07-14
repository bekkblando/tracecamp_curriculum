import random

zodiacs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Saggitarius", "Capricorn", "Aquarius", "Pisces"]

def calculate_zodiac(month,day):

    # There are easier and more effiecient ways of coding this part

    # Aries
    if ( ((month == 3) and (day >= 21)) or ((month == 4) and (day <= 19))):
        return 0
    # Taurus
    elif ( ((month == 4) and (day >= 20)) or ((month == 5) and (day <= 20))):
        return 1

    #Gemini
    elif ( ((month == 5) and (day >= 21)) or ((month == 6) and (day <= 20))):
        return 2

    # Cancer
    elif ( ((month == 6) and (day >= 21)) or ((month == 7) and (day <= 22))):
        return 3

    # Leo
    elif ( ((month == 7) and (day >= 23)) or ((month == 8) and (day <= 22))):
        return 4

    # Virgo
    elif ( ((month == 8) and (day >= 23)) or ((month == 9) and (day <= 22))):
        return 5

    # Libra
    elif ( ((month == 9) and (day >= 23)) or ((month == 10) and (day <= 22))):
        return 6

    # Scorpio
    elif ( ((month == 10) and (day >= 22)) or ((month == 11) and (day <= 21))):
        return 7

    # Saggitarius
    elif ( ((month == 11) and (day >= 22)) or ((month == 12) and (day <= 21))):
        return 8

    # Capricorn
    elif ( ((month == 12) and (day >= 22)) or ((month == 1) and (day <= 19))):
        return 9

    # Aquarius
    elif ( ((month == 1) and (day >= 20)) or ((month == 2) and (day <= 18))):
        return 10

    # Pisces
    else:
         return 11

horoscopes = [
    "Today will be a good day",
    "Doom is afoot",
    "Money is coming your way"
]

def fortune():
    return horoscopes[random.randint(0,len(horoscopes))]

def main():

    print("Welcome! To Madame Teatree's Horoscopes")

    name = input("What is your name? ")
    print("Hello " + name + "!")

    correct = False

    while(correct != True):

        month = int(input("What month were you born? "))
        day = int(input("And the day? "))

        print("Your birthday is " + str(month) + "/" + str(day))
        correct = bool(input("Is that correct? [True or False]"))


    num = calculate_zodiac(month,day)
    print("Your zodiac sign is " + zodiacs[num])

    print("Your Horoscope: " + fortune())




main()
