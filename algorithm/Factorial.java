import java.util.Scanner;

public class Factorial {

	public static int factorial(int number) {
		if (number == 1)
			return 1;
		else {
			return number * factorial(number - 1);
		}
	}

//	삼항 연산자 사용해 구현	
//	public static int factorial(int number) {
//		return (number == 1) ? 1 : number * factorial(number - 1);
//	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int inputNumber = sc.nextInt();
		System.out.printf("%d팩토리얼은 %d 입니다.", inputNumber, factorial(inputNumber));
		sc.close();
	}
}
