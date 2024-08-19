//스택(stack) : 먼저 들어온 데이터가 나중에 나가는 자료구조, 후입선출
//새로운 원소를 넣을때는 마지막 위치에 삽입, 새로운 원소를 삭제할때도 마지막 원소가 삭제된다.
//head = 최상위 원소 , 삽입과 삭제가 되는 원소

//삽입(Push) : O(1), 스택에 원소 삽입하는 연산
//추출(Pop) : O(1), 스택에 원소 추출하는 연산
//최상위 원소(Top) : O(1), 스택의 최상위 원소를 확인하는 연산
//Empty : O(1), 스택이 비어있는지 확인하는 연산

//JavaScript에서는 stack을 구현할때 일반적으로 배열자료형을 사용한다,
//push(),pop() method제공

let stack = [];

stack.push(5);
stack.push(2);
stack.push(3);
stack.pop();
stack.push(1);
stack.pop(4);

let reversed = stack.slice().reverse();
console.log(reversed); //reverse()로 인해 최상위 원소부터 출력
console.log(stack);

//연결리스트로 stack구현
//연결리스트로 stack을 구현시 삽입과 삭제에 O(1)을 보장하고 head를 가리키는 한개의 포인터만 가진다.
//Head : 남아있는 원소 중 가장 마지막에 들어온 데이터를 가리키는 포인터
