## 1. 컴파일 언어

* 한번에 모두 읽고 실행함
* 컴파일 과정이 오래걸리고 메모리차지도 많이함
* 인터프리티드 언어에 비해 빠르고 더이상 변환하지 않아 효율적
* 실행전에 에러를 발견할 수 있음
* 플랫폼 의존성이 강하고 특별한 프로세서용으로 만들어짐
* 기계어로 번역해서 저장

## 2. 인터프리터 언어

* 실시간으로 그때그때 기계어로 번역해서 실행하기때문에 속도가 느림
* 실행전까지 에러를 발생할 수 없음

## 3. 프로그래밍 패러다임

  * JavaScript언어는 script 언어형태인데, 다양한 방식의 프로그래밍 패러다임을 가진 멀티패러다임 언어이다.

  * imperative (명령형)
    * 명령형 프로그램은 알고리즘을 명시하고 목표는 명시하지 않음
    * 프로그래머가 실행될 알고리즘을 명시해주어야 함
    * 컴퓨터가 수행할 명령들을 순서대로 써 놓은 것

  * functional (함수형)
    * 반복될 가능성이 있는 모듈을 재사용 가능한 프로시저 단위(함수단위)로 나눈 프로그래밍
    * 절차적 프로그래밍 :함수를 기준으로 나눔
    * 구조적 프로그래밍 :모듈을 기준으로 나눔
    * 객체지향 프로그래밍 : 자료형과 함수를 함께 묶어서 관리

  * declarative (선언적)
    * 선언형 프로그램은 목표를 명시하고 알고리즘을 명시하지 않음

  * event-driven(이벤트중심)
    * 일반적으로 GUI를 쓰는경우, 순차적 프로그래밍과 다르게 먼저 main 함수에서 화면에 표시할 소스들(버튼,사진 등)을 정의하고 그 소스들이 일으킬 수 있는 이벤트를 정의해주는것으로 프로그래밍을 한다.

## 4. Debugging 기술문서 정리하기

  * breakpoints : 디버깅시, breakpoints 를 찍어두고 각 breakpoints를 기준으로 line by line 으로 코드를 부분적으로 실행 시켜보며  
                  상태 체크를 할 수 있도록 해준다.
  * watch : Add expression 기능을 이용해 확인하고자하는 변수명을 입력해주고 디버깅을 시작하면 각 step별로 해당 변수들의  
            값을 확인할 수 있다.
  * call stack : 실행되는 함수들이 stack에 들어오고 나가는 과정을 확인할 수 있다.
  * Step over : 해당 라인의 코드를 실행한 후 다음 라인으로 넘어간다.
  * Step into : 함수를 만날경우, 함수 안으로 들어가서 다음 step을 진행한다.
  * Step out : 함수를 빠져나와 다음 step 시작 전에 멈춘다.
  
  * [참고 링크](https://developers.google.com/web/tools/chrome-devtools/javascript/step-code?hl=ko)
  
## 5. Node.js 모듈

  * 자바스크립트는 웹페이지에 있어서 보조적인 기능
	* 한정적인 용도로 만들어진 태생적 한계 존재. ex) 모듈 기능이 없다.
	* 자바스크립트를 범용적으로 사용하기 위해서는 모듈 기능 필요
	* Node.js는 모듈 단위로 각 기능을 분할 할 수 있다.
	* module은 파일과 1대1의 대응관계를 가지며 하나의 모듈은 자신만의 독립적인 Scope를 가지게된다.
	* 모듈은 module.exports 또는 exports 객체를 통해 정의하고 외부로 추출한다.
	* 공개된 모듈은 require 함수를 사용해 가져온다.

## 6. Exports

  * 모듈은 독립적인 파일 scope를 갖는다.
  * 모듈 안에 선언한 모든 것들은 해당 모듈 내에서만 참조 가능하다.
  * 모듈 안에 선언한 항목을 다른 모듈에서 사용하려면 export객체를 사용해야 한다.

~~~javascript
// weapon.js
const attack = 30;

exports.gun = (power) => attack * power * power;
exports.sword = (power) => attack * power;
~~~

~~~javascript
// app.js
const weapon = require('./weapon.js'); // == require('./weapon')

console.log(`총 사용시 공격력 : ${weapon.gun(10)}`);
console.log(`칼 사용시 공격력 : ${weapon.sword(10)}`);
~~~
~~~
총 사용시 공격력 : 3000
칼 사용시 공격력 : 300
~~~
