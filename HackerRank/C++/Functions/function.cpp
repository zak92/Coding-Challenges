#include <iostream>
#include <cstdio>
#include<algorithm> 


//declare a function 
//program flow - function must appear above main() or declared
int max_of_four(int a, int b, int c, int d);

int main()
{
     int a, b, c, d;
    scanf("%d %d %d %d", &a, &b, &c, &d);
    int ans = max_of_four(a, b, c, d);
    printf("%d", ans);
    
    return 0;
}

int max_of_four(int a, int b, int c, int d) 
{
    int max_ab = std::max(a, b);
    int max_cd = std::max(c, d);
    return std::max(max_ab, max_cd);
    
}