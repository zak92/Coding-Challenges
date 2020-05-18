#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>

/* reverse elements in array */

int main() {

    int n, input, i;
    //declare vector
    std::vector<int> arr;
    //read n,where n is the number of elements in the vector
    std::cin >> n;

    
    for(i = 0; i < n; i++){
        //read input values
        std::cin >> input;
        //push values into vector 
        arr.push_back(input);

    }

    for( i = n-1; i >= 0; i--){
        //reverse elements in vector, elements must be separated by a space
        std::cout << arr[i] << " ";

    }

    return 0;
}