#include <iostream>
#include <sstream>
#include <string>
using namespace std;

/*
Enter code for class Student here.

*/

class Student{

    private: 
        int ageVal;
        string nameFirst;
        string nameLast;
        int standardVal;

    public:
        void set_age(int age){
           ageVal = age;
        }
        void set_first_name(string first_name){
            nameFirst = first_name;
        }
        void set_last_name(string last_name){
            nameLast = last_name;
        }
        void set_standard(int standard){
            standardVal = standard;
        }

        int get_age(){
            return ageVal;
        }
        string get_first_name(){
            return nameFirst;
        }
        string get_last_name(){
            return nameLast;
        }
        int get_standard(){
            return standardVal;
        }

        string to_string(){
           stringstream ss;
           char comma = ',';
           ss << ageVal << comma << nameFirst << comma << nameLast << comma << standardVal;
           return ss.str();
    }

};

int main() {
    int age, standard;
    string first_name, last_name;
    
    cin >> age >> first_name >> last_name >> standard;
    //create an object of the class
    Student st;
    //access member functions/data member using the dot operator
    st.set_age(age);
    st.set_standard(standard);
    st.set_first_name(first_name);
    st.set_last_name(last_name);
    
    cout << st.get_age() << "\n";
    cout << st.get_last_name() << ", " << st.get_first_name() << "\n";
    cout << st.get_standard() << "\n";
    cout << "\n";
    cout << st.to_string();
    
    return 0;
}