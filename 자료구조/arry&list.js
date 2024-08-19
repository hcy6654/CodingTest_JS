// 배열(Array) : 가장 기본적인 자료구조
// 여러개의 변수를 담는 공간으로 이해 가능
// 배열은 index가 존재하며 indexsms 0부터 시작한다
// 특정 index에 직접적으로 접근가능 -> 수행시간 : O(1)

// 특징 : 컴퓨터의 메인 메모리에서 배열의 공간은 연속적으로 할당된다.
// 장점 : cache 히트 가능성이 높으며 조회가 빠르다.
// 단점 : 배열의 크기를 미리 지정해야 하는것이 일반적이며 데이터 추가 및 삭제에 한계가 있다.
// => JavaScript는 동적 배열로 배열의 추가 삭제가 자유롭다. arrary나 stack의 기능이 필요 할때 사용할 수 있다.(queue의 기능은 제공하지 못한다)

// 연결리스트(Linked List) : 메인 메모리상에서 주소가 연속적이지 않다, 크기가 정해져 있지 않고 리스트의 크기는 동적으로 변경가능하다.
// 장점 : pointer를 통해 다음 데이터의 위치를 가르킨다는 점에서 삽입과 삭제가 간편하다.
// 단점 : 특정 번째의 원소를 검색할 때는 앞에서부터 원소를 찾아야 함으로 데이터 검색 속도가 느리다.

// 배열 예제
let arr = []; //[]를 이용한 배열 생성

arr.push(7); //데이터 추가
arr.push(8);
arr.push(9);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr2 = new Array(); //Array()를 이용한 배열 생성

arr.push(7); //데이터 추가
arr.push(8);
arr.push(9);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//JavaScript의 배열은 일반적인 변수 외에도 객체를 담을 수있다.
let arr3 = ["Hello", 30, true];
console.log(arr3);

//임의의 크기를 가진 배열을 만들 수 있다.
//원하는 갑승ㄹ 직접 입력하여 초기화 가능

//크기가 n인 1차원 배열을 만드는 법
let arr4 = [0, 1, 2, 3, 4];
console.log(arr4);

//2차원 배열을 직접 만들어 초기화 하는 법
let arr5 = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
console.log(arr5);

//JavaScript es6이상에서만 사용가능
let arr6 = Array.from(Array(4), () => new Array(5));
console.log(arr6);

//for문을 이용한 배열 초기화
let arr7 = new Array(3);
for (let i = 0; i < arr7.length; i++) {
  arr7[i] = Array.from({ length: 4 }, (undefined, j) => i * 4 + j);
}
console.log(arr7);

//배열 크기 임의로 변경
let arr8 = [5, 6, 7, 8];
arr.length = 8;
arr[7] = 3; //8번째 원소 변경
arr.push(1); //마지막 원소에 1추가

for (let x of arr8) {
  console.log(x);
}

//concat() : 여러개의 배열을 이어 붙여서 합친 결과를 반환한다.(수행시간 : O(N))
let arr9 = [1, 2, 3];
let arr10 = [4, 5, 6];
let arr11 = arr9.concat(arr10, [7, 8, 9], [10, 11]);

console.log(arr11);

//slice(left,right) : 특정 구간의 원소를 꺼낸 배열을 반환한다.(수행시간 : O(N))
let arr12 = [1, 2, 3, 4, 5];
let result = arr12.slice(2, 4);

console.log(result);

//indexOf() : 특정 값을 가진 원소의 첫번째 인덱스를 반환한다,(수행시간 : O(N))
//=> 해당 원소가 없는 경우 -1을 반환한다.
let arr13 = [8, 5, 2, 4, 3, 1];

console.log(arr13.indexOf(5));

//연결리스트(Linked List) : 각 노드가 한줄로 연결되어 있는 자료 구조
//각 노드는 (데이터,포인터) 형태를 가진다.
//포인터 : 다음 노드의 메모리 주소를 가르킨다.
//연결성 : 각 노드의 포인터는 다음 혹은 이전 노드를 가르킨다.
//연결리스트의 경우는 insert, remove, append를 할 시 위치를 정확하게 알고 있는 경우 O(1)의 시간이 소요되어 배열보다 빠르다.
