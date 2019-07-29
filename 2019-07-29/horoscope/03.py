import random

# IMPORTANT This only checks valid dates and inputs
# This does not check to that dates are proper for each month

zodiacs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Saggitarius", "Capricorn", "Aquarius", "Pisces"]

def isMonth(month):
    if ((month >= 1) and (month <= 12)):
        return True
    else:
        return False

def isDay(day):
    if ((day >= 1) and (day <= 30)):
        return True
    else:
        return False

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
    return horoscopes[random.randint(0,len(horoscopes) - 1)]

def main():

    print("Welcome! To Madame Teatree's Horoscopes")

    name = input("What is your name? ")
    print("Hello " + name + "!")

    correct = False
    isNum = False
    aMonth =  False
    aDay = False

    while(correct != True):

        while(aMonth != True):
            month = input("What month were you born? ")

            # Checking if int
            try:
                month = int(month)
                isNum = True
            except ValueError:
                print("Month needs to be an integer")

            # Checking if proper month
            if (isNum == True and isMonth(month) == True):
                aMonth = True
            else:
                print("Month needs to be between 1-12")

        isNum = False
        while(aDay != True):
            day = input("And the day? ")

            # Checking if int
            try:
                day = int(day)
                isNum = True
            except ValueError:
                print("Day needs to be an integer")

            # Checking if proper month
            if (isNum == True and isDay(day) == True):
                aDay = True
            else:
                print("Day needs to be between 1-30")


        print("Your birthday is " + str(month) + "/" + str(day))
        correct = bool(input("Is that correct? [True or False]"))


    num = calculate_zodiac(month,day)
    print("Your zodiac sign is " + zodiacs[num])

    print("Your Horoscope: " + fortune())




main()
