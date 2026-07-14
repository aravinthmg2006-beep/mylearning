// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class Main {
    public static void main(String[] args) {
        int []arr={123,456,675,345,453};
        for(int i=0;i<arr.length-1;i++)
        {
           for (int j=i+1;j<arr.length;j++)
          {
               System.out.println(arr[i]+ " " +arr[j]);
          }
       
        }
        
        
        
    }
}