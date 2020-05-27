#include <sstream>
#include <vector>
#include <iostream>
using namespace std;

vector<int> parseInts(string str) {
	
    stringstream ss(str);
    int value;
    //char - size: one byte
    char ch;
    vector<int> values;
    while(ss >> value){
        values.push_back(value);
        //removes the comma
        ss >> ch;
    }
    

    
    return values;
}

int main() {
    string str;
    cin >> str;
    vector<int> integers = parseInts(str);
    for(int i = 0; i < integers.size(); i++) {
        cout << integers[i] << "\n";
    }
    
    return 0;
}