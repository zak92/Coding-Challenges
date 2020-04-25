#include <iostream>
#include <cstdio>
using namespace std;

int main() {

    int number;
    long longNumber;
    char character;
    float flNumber;
    double dNumber;


    //read input
    scanf("%d %ld %c %f %lf", &number, &longNumber, &character, &flNumber, &dNumber);
    //each value printed on a new line(\n)
    // floating point value should be correct up to 3 decimal places and the double to 9 decimal places.
    printf("%d\n%ld\n%c\n%.3f\n%.9lf\n", number, longNumber, character, flNumber, dNumber);

    return 0;
}

/*
Some C++ data types, their format specifiers, and their most common bit widths are as follows:

Int ("%d"): 32 Bit integer
Long ("%ld"): 64 bit integer
Char ("%c"): Character type
Float ("%f"): 32 bit real value
Double ("%lf"): 64 bit real value

Reading
To read a data type, use the following syntax:
scanf("`format_specifier`", &val)
Printing
To print a data type, use the following syntax:
printf("`format_specifier`", val)
*/
