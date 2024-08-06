##########  String   ############

char[] ch=str.toCharArray();

String[] words = s.split("\\s+");
String str = String.join(" ",words);

// //
String myStr = "Split a string by spaces, and also punctuation.";
String regex = "[,\\.\\s]";

String[] myArray = myStr.split(regex);

for (String s : myArray) {
  System.out.println(s);
}

// //
String myStr = "I love cats. Cats are very easy to love. Cats are very popular.";
String regex = "(?i)cat";
System.out.println(myStr.replaceAll(regex, "dog"));
// //

ch=str.charAt(4);
str.indexOf("value");

str.replace('a','e');

str.endsWith("valule");
str.startsWith("valule");
str.substring(from,to);     // (2,3)  from=2  count =(3-2)= 1

str.compareTo(s2);    // returns -1, 0, & 1 for <, =, & >
str.equals(str2);         //  returns true & false

str.length();

str=str.concat(" is immutable so assign it explicitly");

str.contains("value");
str.isEmpty();

Character.toUpperCase(ch1);
Character.toLowerCase(ch1);

char[] myArray = {'a', 'b', 'c'};
String st = String.valueOf(myArray );   //abc

str=str.trim(); //space
str.indexOf("value");
str.indexOf("value");
str.split("t", 0);

str.equalsIgnoreCase(str1);
