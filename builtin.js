##########  String   ############

ch=str.charAt(4);
str.compareTo(s2); // give + or - value
str.length();
str=str.concat(" is immutable so assign it explicitly");
str.contains("value");
str.endsWith("valule");
str.equals(str2);
Character.toUpperCase(ch1);
Character.toLowerCase(ch1);
str.isEmpty();
str.indexOf("value");
str.length();
str.replace('a','e');
str.startsWith(prefix, 0);
str.substring(from,to);
String s1="hello";
char[] ch=s1.toCharArray();

int value=30;
String st = String.valueOf(value);

str=str.trim(); //space
str.indexOf("value");
str.indexOf("value");
str.split("t", 0);

str.equalsIgnoreCase(str1);

##########     Array List   ###############
List<String> myAlist = new ArrayList<String>();
ArrayList<Integer> arr = new ArrayList<Integer>();


myAlist.add("value");
myAlist.remove("value");
myAlist.get(index);
arrlist1.addAll(arraylist2);
arr.clear();
arr.contains(value);
arr.isEmpty();
arr.indexOf(value);


#########      Linked List       ###############

Collections_framwork
LinkedList <Integer> ll = new LinkedList<>();
ll.addLast(value);
ll.addFirst(value);
ll.removeFirst(value);
LinkedList <Integer> ll = new LinkedList<>();
ll.removeLast(value);
ll.get(index);
ll.addAll(collect);
ll.clear();
ll.contains("value");
ll.indexOf("value");


LinkedList sec_ll = new LinkedList();
sec_ll = (LinkedList) ll.clone();


###########   Hashing      ###########

hm.put("key",value);
hm.get("US");
hm.remove("key");
hm.containsKey("key");
hm.size();
hm.clear();

LinkedHashSet <String> lhs = new LinkedHashSet<>();
HashSet<Integer> set = new HashSet<>();
TreeSet<Integer> set = new TreeSet<>();

set.add(value);
set.isEmpty();


###########  Conversion    ############
int num = Integer.parseInt(args[i]);
int num = Integer.valueOf(args[i]);
 Character.toLowerCase(s.charAt(i));

###########  indexOf    ############
let msg = "  abhi   shek    "
let index = msg.indexOf("hi");

Math.min(arr5) 

###########  slice in js & substring in java    ############
in js                                              in java

let str = "ILoveCoding";                              String str = "Hello, world!";
console.log(str.slice(5));                            String subStr = str.substring(7);
console.log(str.slice(1,4));
console.log(str.slice(-3));

###########  shift & unshift    ############
in js                                                           in java

let month = ["january", "july", "march", "august"];               push & pop
month.shift();             //remove from first
month.unshift("june");     // push at first

###########  splice    ############
month.splice(0,1,"dec","oct");       // array.splice(start, deleteCount, item1, item2, ...);
month.splice(2);                     // start delete from index 2
month.splice(2,0,"feb");

in js                                                                         in java

let arr = [1, 2, 3, 4, 5];                                             ArrayList<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
arr.splice(2, 2); // Removes 2 elements starting at index 2            list.subList(2, 4).clear(); // Removes elements from index 2 to 3
console.log(arr); // [1, 2, 5]                                        System.out.println(list); // [1, 2, 5]

let arr = [1, 2, 3, 4, 5];                                                      ArrayList<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
arr.splice(2, 0, 'a', 'b'); // Adds 'a' and 'b' starting at index 2            list.addAll(2, Arrays.asList('a', 'b')); // Adds 'a' and 'b' starting at index 2
console.log(arr); // [1, 2, 'a', 'b', 3, 4, 5]                                 System.out.println(list); // [1, 2, 'a', 'b', 3, 4, 5]

let arr = [1, 2, 3, 4, 5];                                                                         ArrayList<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));      
arr.splice(2, 2, 'a', 'b'); // Replaces 2 elements starting at index 2 with 'a' and 'b'            list.subList(2, 4).clear(); // Removes elements from index 2 to 3
console.log(arr); // [1, 2, 'a', 'b', 5]                                                           list.addAll(2, Arrays.asList('a', 'b')); // Adds 'a' and 'b' starting at index 2

#######  delete   #########
delete obj[2]
delete obj.name


//+++++++            forEach           ***************************
arr.forEach((el) => {
    console.log(el);
});


//+++++++        every func       ***************************  all must we true

arr1.every((el) => el%2==0);

[2,4,6].every((el) => el%2==0);


//+++++++        some func       ***************************    any one true

arr2.every((el) => el%2==0);

[2,4,1].every((el) => el%2==0);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//+++++++        reduce func       ***************************

arr3.reduce((res,el) => { 

    return res+el
});

//.............      Spread                ........................

Math.min(arr5)         // NaN

Math.min(...arr5) 
console.log(...arr5)          // print individually 


//.............      rest                   ........................

function min(a,d,g) {console.log(arguments)}  // give only three value
function min() {console.log(arguments)}  //give multiple value

function sum(msg,...args) {

    console.log(msg);
    // return arguments.reduce((sum,el)=> sum+el);  // error  // we can not use array method
                                                    // arguments[0]  // correct
                                                    
    return args.reduce((sum,el)=> sum+el);  //  then use array method
}


//+++++++++++            Destructuring    ***************

let names = ["tony", "bruce","peter", "steve","asd","sdf","ert"];
//let winner = names[0];      // create variable individually
//let runnerup = names[1];
//let secondRunnerup = names[2];

// let [winner, runnerup, secondRunnerup] = names;  // it is also individuall variable not array
// let [winner, runnerup, other] = names;  // it is also individuall variable not array
let [winner, runnerup, ...other] = names;  // only "other" is an array, all remaining store in other // (rest concept is using)


//+++++++++++            Destructuring  for Object   ***************

const student = {
    name: "karan",
    age:14,
    class:10,
    subject: ["hindi", "english", "math"],
    username: "karan@123",
    password: "abcd",
    // city: "indore"
};

// let username = student.username;
// let password = student.password;

// let {username, password } = student;  // search this key then value store in this variable
// let {user, password } = student;  // no "user" key in student so user=undefined
// let { username: user, password } = student; //now it is correct  // username use only for search  // search "username" key and store in user variable
// let { username: user, password, city } = student;  // there is no city so city=undefined
let { username: user, password, city="bhopal" } = student;  // it city is not available so default value is city="bhopal"
