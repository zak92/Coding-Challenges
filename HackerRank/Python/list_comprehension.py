if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())

   
# list comprehensions
# This is the basic syntax:
# new_list = [expression for_loop_one_or_more conditions]

#3 nested loops and one conditional
coordinates = [[ i, j, k] for i in range( x + 1) for j in range(y + 1) 
				for k in range(z + 1) if(( i + j + k) != n )]

print(coordinates)