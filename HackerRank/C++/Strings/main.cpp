#include <iostream>
#include <string>

int main(){
    //declare strings
    std::string firstString;
    std::string secondString;

    std::cout << "Enter two strings: " << std::endl;
    //Input
    std::cin >> firstString;
    std::cin >> secondString;

    //Get length of each string
    int firstStringSize = firstString.size();
    int secondStringSize = secondString.size();


    //print both strings separated by a string
    std::cout << firstStringSize << " " << secondStringSize << std::endl;
    //concatenate strings
    std::cout << firstString + secondString << std::endl;
    //store first character of firstString
    char storeLetter;
    //Swap the first letters of the two strings
    storeLetter = firstString[0];
    firstString[0] = secondString[0];
    secondString[0] = storeLetter;
    //print edited strings
    std::cout << firstString << " " << secondString << std::endl;


    return 0;
}