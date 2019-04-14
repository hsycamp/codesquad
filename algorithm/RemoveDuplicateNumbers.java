import java.util.*;

public class Solution {
	public int[] solution(int[] arr) {
		LinkedList<Integer> list = new LinkedList<>();
		list.add(arr[0]);
		for (int i = 1; i < arr.length; i++) {
			if (arr[i - 1] != arr[i] && arr[i] != list.getLast()) {
				list.add(arr[i]);
			}
		}
		int[] answer = new int[list.size()];
		int i = 0;
		for (Integer n : list) {
			answer[i++] = n.intValue();
		}
		return answer;
	}
}