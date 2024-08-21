//tree(트리) : 가계도와 같이 계층적인 구조를 표현할 때 사용할 수 있는 자료구조

//트리용어
//루트 노드(root node) : 부모가 없는 최상위 노드
//단말 노드(leaf node) : 자식이 없는 노드
//tree에서는 부모와 자식 관계가 성립한다.
//형제관계 : 같은 부모를 가지고 있는 노드
//깊이(depth) : 루트 노드에서의 길이(lenght), 이때 길이란 출발노드에서 목적지 노드까지 거쳐야 하는 간선 수를 의미
//트리의 높이는 루트 노드에서 가장 깊은 노드까지의 길이를 의미

//이진트리(binary tree) : 최대 두개의 자식을 가질 수 있는 트리
//포화 이진트리 : 리프 노드를 제외한 모든 노드가 자식을 두개씩 가지고 있는 트리다.
//완전 이진트리 : 모든 노드가 왼쪽 자식부터 채워진 트리다.
//높이 균형트리 : 왼쪽 자식 트리와 오른쪽 자식트리의 높이가 1이상 차이나지 않는 트리

//Priority Queue(우선순위 큐) : 우선 순위에 따라서 데이터를 추출하는 자료구조
//일반적으로 heap을 이용해 구현한다.
//구현방법 :  데이터 개수가 n개일때 구현방식에 따른 시간복잡도는 아래와 같다.
//리스트 자료형 - 삽입시간 : O(1), 삭제시간 : O(1)
//heap - 삽입시간 : O(logN), 삭제시간 : O(logN)
//일반적인 형태의 큐는 선형적인 구조를 가지지만 우선순위 큐는 이진트리 구조를 사용하는 것이 일반적이다.

//heap : 원소들 중에서 최댓값 혹은 최솟값을 빠르게 찾아내는 자료구조
//최대 heap : 값이 큰 원소부터 추출한다. 부모 노드가 자식 노드보다 값이 큰 완전 이진트리를 의미한다.(루트노드가 전체 트리에서 가장 큰값을 가진다는 특징이 있다.)
//최소 heap : 값이 작은 원소부터 추출한다. 부모 노드 키 값이 자식 노드의 키 값보다 항상 작다.(루트노드가 전체 트리에서 가장 작다.)
//heap의 삽입, 삭제 수행시간은 O(logN)
//단순 N개의 데이터를 힙에 넣었다가 모두 꺼내는 작업은 정렬과 동일하고 수행시간은 O(NlogN)

//heap(힙) 특징
//완전 이진 트리 자료구조를 따른다
//우선순위가 높은 노드가 루트에 위치한다.
//이동 할때마다 처리해야하는 범위에 포함된 원소의 갯수가 절반씩 줄어든다.

//최소 힙 구성 함수 : heapify
//상향식 접근방식으로 부모를 거슬러 올라가며 부모보다 자신이 더 작은 경우에 위치를 교체한다.
//힙에 새로운 원소가 들어갈때 상향식 접근방법을 가장 많이 사용하며 O(logN) 시간복잡도로 힙의 성질을 유지하도록 할 수 있다.

//JavaScript에서는 우선순위 큐 라이브러리는 제공하지 않기 때문에 최단 경로 알고리즘 등에서 heap이 필요한 경우 별로 라이브러리를 사용하는 것을 권장한다.

class PriorityQueue {
  constructor() {
    this.heap = new Array(64);
    this.size = 0;
  }

  insert(value) {
    const heap = this.heap;
    const size = ++this.size;

    if (size === heap.length) heap.length *= 2;

    heap[size] = value;
    this.percolateUp();
  }

  percolateUp() {
    const heap = this.heap;
    const size = this.size;

    let pos = size;
    const item = heap[pos];

    while (pos > 1) {
      const parent = heap[Math.floor(pos / 2)];
      if (parent <= item) break;
      heap[pos] = parent;
      pos = Math.floor(pos / 2);
    }

    heap[pos] = item;
  }

  shift() {
    const heap = this.heap;
    const value = heap[1];
    if (value === undefined) return undefined;
    const size = --this.size;

    heap[1] = heap[size + 1];
    heap[size + 1] = undefined;
    this.percolateDown();
    return value;
  }

  percolateDown() {
    const heap = this.heap;
    const size = this.size;

    let pos = 1;
    const item = heap[pos];

    while (pos * 2 <= size) {
      let childIndex = pos * 2 + 1;
      if (childIndex > size || heap[pos * 2] < heap[childIndex])
        childIndex = pos * 2;
      const child = heap[childIndex];
      if (item <= child) break;
      heap[pos] = child;
      pos = childIndex;
    }

    heap[pos] = item;
  }
}
