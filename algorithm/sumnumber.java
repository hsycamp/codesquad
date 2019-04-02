class Solution {
	public long solution(int a, int b) {
		int min = Math.min(a, b);
		int max = Math.max(a, b);
		long answer = 0;
		for (int i = min; i < max + 1; i++) {
			answer += i;
		}
		return answer;
	}
}
