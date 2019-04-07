import java.util.Scanner;

public class Calculate {

	// 삼항 연산자 사용
	public static int max(int a, int b) {
		return (a > b) ? a : b;
	}

	public static int function(int a, int b, int c) {
		int result = max(a, b);
		result = max(result, c);
		return result;
	}

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();
		int c = sc.nextInt();
		System.out.printf("(%d,%d,%d)중 가장 큰 수는 : %d 입니다.", a, b, c, function(a, b, c));
		sc.close();
	}
}
