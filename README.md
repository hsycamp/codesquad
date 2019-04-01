
## JavaScript 배열의 forEach 사용법

1. 배열 전체를 돌며 해당 배열의 elements 에 직접 어떤 작업을 수행하고 싶을 때 사용하는 메소드이다.

2. 배열 전체를 돌때, element 마다 콜백함수를 실행한다.

3. 첫번째 인자는 현재 배열 element 의 value 값이고, 두번째 인자는 현재 배열요소의 index값이다.

* 콜백 함수 : 어떤 이벤트가 발생한 후 수행될 함수를 의미

~~~javascript
//원본 배열
var arrayEx = [ “a”, “b”, ”c”, ”d” ];


//배열의 모든 elements에 X라는 string을 더하기
arrayEx.forEach(function (item, index, array){
	array[index] = item + “X”;
});


//메소드 수행 후 원본 배열
console.log(array);
[ “aX”, “bX”, “cX”, ”dX” ]
~~~
