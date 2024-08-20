//큐(queue) : 먼저 삽입된 데이터가 먼저 추출되는 자료구조, 선입선출
//Tail(꼬리)에 삽입되고 Head(머리)에서 삭제

//큐를 연결리스트로 구현시 삽입과 삭제에 있어서 O(1)을 보장할 수 있다.
//Head : 남아있는 원소중 가장 먼저 들어온 데이터를 가리키는 포인터
//Tail : 남아있는 원소중 가장 마지막에 들어온 데이터를 가리키는 포인터

//Queue 동작속도 : 배열보다는 연결리스트를 사용할 때 수행 시간 관점에서 효율적이다.
//JavaScript에서는 Dictionary 자료형을 이용해서 구현한다.

class Queue {
  constructor() {
    this.items = {};
    this.headerIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    //꼬리의 , 꼬리에 새원소를 넣어주고 위치를 한칸증가
    this.items[this.tailIndx] = item;
    this.tailIndex++;
  }
  dequeue() {
    // head의 위치에서 하나의 원소를 꺼내고 메모리 해제하고 1만큼 증가시켜 다음 원소를 헤드로 지정하고 꺼낸 내용을 리턴
    const item = this.items[this.headerIndex];
    delete this.items[this.headerIndex];
    this.headerIndex++;
    return item;
  }
  peek() {
    //head의 원소를 바로 구하기
    return this.items[this.headerIndex];
  }
  getLenght() {
    //queue의 원소의 갯수를 구하기
    return this.tailIndex - this.headerIndex;
  }
}

queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
queue.enqueue(6);
queue.enqueue(7);
queue.dequeue();

//먼저 들어온 순서대로 출력
while (queue.getLenght() != 0) {
  console.log(queue.dequeue());
}
