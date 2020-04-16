#Range function
# It takes three arguments. Out of the three 2 arguments are optional. I.e., 
# start and step are the optional arguments.
# A start argument is a starting number of the sequence.
#  i.e., lower limit. By default, it starts with 0 if not specified.
# A stop argument is an upper limit. i.e., generate numbers 
# up to this number, The range()  function doesn’t include this 
# number in the result.
# The step is a difference between each number in the result. The default 
# value of the step is 1 if not specified. - https://pynative.com/python-range-function/

#print function
# By default, the function print() prints all its arguments separating them by a space and the puts a newline
# symbol after it. This behavior can be changed using keyword arguments sep (separator) and end.
n = int(input())

for i in range(1, n + 1):
	print(i,  end='')
	