Comparator --> make our own change (own logic)
Comparable --> use builtin


java.lang;
interface Comparable<T> {
  public int compareTo(T o);       // return  (+ve) , (-ve) , 0
}

class Song implements Comparable<Song> {
  String title;
  String artist;
}

class abc {
  @Override
  public int compareTo() {
    return -----;
  }

  public static void main(String []args) {
    
}
