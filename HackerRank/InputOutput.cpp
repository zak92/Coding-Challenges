/*Read 3 numbers from stdin and print their sum to stdout.*/
#include <iostream>

int main() {  
    //declare variables
    int a;
    int b;
    int c;
    //read input from user
    std::cin >> a >> b >> c ;
    //sum the numbers
    int sum = a + b + c;
    //print to screen
    std::cout << sum << std::endl;

    return 0;
}