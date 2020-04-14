# Read an integer n. For all non-negative integers i < n , print i^2. Print  n lines, one corresponding to each i.

#user enters input, which must be an integer
n = int(input())
#constraints for n
if n > 0 and n < 21:
	i = 0
	while i < n:
		squared = i * i
		print(squared)
		i += 1
