#include <stdio.h>
#include <cstdlib>

void update(int *a,int *b) {
    // Complete this function  
    int store = *a;
    *a = *a + *b;
    *b =  abs(store - *b);
}

int main() {
    int a, b;
    //access memory address using of a using &a
    //access the content of the memory to which the pointer points, prepend with *
    //*pa return the value reflected by a and any modification to *pa will be reflected in a
    int *pa = &a, *pb = &b;
    
    scanf("%d %d", &a, &b);
    update(pa, pb);
    printf("%d\n%d", a, b);

    return 0;
}