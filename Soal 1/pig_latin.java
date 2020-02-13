import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.Collectors;

public class PigLatin {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(Arrays.stream(sc.nextLine().replaceAll("[^aA-zZ\\s]", "").split(" ")).map(PigLatin::toPigLatin).collect(Collectors.joining(" ")));
    }

    private static String toPigLatin(String word) {
        return word.matches("^[aieouyAIEOUY].*") ? word + "yay" : word.replaceAll("(^[^aeiou\\W]+)(\\w*)", "$2$1ay");
    }
}