# Find the Runner-Up Score!
#Given the participants' score sheet for your University Sports Day, 
#you are required to find the runner-up score. 
if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())

#add items into list
lis = list(arr)
#find the highest value in the list
max_Val = max(lis)

#if the list contains two or more equally highest values, remove those values
while max(lis) == max_Val:
	lis.remove(max(lis))

runner_up = max(lis)
print(runner_up)