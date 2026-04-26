public class LargestSmallest {
    
    public static void main(String[] args) {
        
        
        if (args.length == 0) {
            System.out.println("Error: Please provide some integer numbers as command line arguments.");
            System.out.println("Usage: java LargestSmallest <num1> <num2> <num3> ...");
            return;
        }
        
        try {
            
            int largest = Integer.parseInt(args[0]);
            int smallest = Integer.parseInt(args[0]);
            
            
            for (int i = 1; i < args.length; i++) {
                int current = Integer.parseInt(args[i]);
                
                
                if (current > largest) {
                    largest = current;
                }
                
                
                if (current < smallest) {
                    smallest = current;
                }
            }
            
            
            System.out.println("Largest number  : " + largest);
            System.out.println("Smallest number : " + smallest);
            
        } catch (NumberFormatException e) {
            System.out.println("Error: All arguments must be valid integers.");
            System.out.println("Please provide only integer values.");
        }
    }
}
