
# Create list of numbers 1-10
nums = []
for i in range(0,10):
    nums.append(i + 1)
print(nums)

# Add 2 to every number in list
num02 = []
len = len(nums)
for i in range(len):
    num02.append(nums[i] + 2)
print(num02)

# With list comprehension add 2
num03 = [n+2 for n in nums]
print(num03)

# Cubed for the win
num04 = [n^3 for n in nums]
print(num04)

# Threes All the Threes
num05 = [n + 3 for n in nums if n % 3 == 0 ]
print(num05)

### STRETCH GOAL: ITS THE FINAL COUNTDOWN

# Are you Even or Odd?
num06 = ["even" if n % 2 == 0 else "odd" for n in nums]
print(num06)

# Prime Ribs(Nums)
num07 = [n for n in range(2,25) if 0 not in [n%i for i in range(2,n)]]
print(num07)
