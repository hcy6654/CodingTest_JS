//선택 정렬 : 매 단계에서 가장 작은 원소를 선택해서 아직 처리되지 않은 원소들 앞으로 보내는 정렬 방법, 시간 복잡도 O(N^2)으로 비효율적인 정렬 알고리즘중 하나
//매 단계에서 가장 작은 것응ㄹ 선택하는데 약 N번의 연상이 필요하다(선형탐색)

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

//버블 정렬 : 각 단계에서 단순히 인접한 두 원소를 확인하여 정렬이 안되어 있다면 위치를 서로 변경하는 정렬 방법, 시간 복잡도 O(N^2)으로 비효율적인 정렬 알고리즘중 하나
//한 단계가 끝날때마다 가장 큰 원소가 맨 뒤로 이동, 맨뒤로 이동한 데이터는 정렬에서 제외한다.
//각 단계를 거칠때 마다 가장 큰값을 하나씩 결정하는 것

//Worst Case: O(n^2): 정렬이 하나도 안되어있는 경우
//Best Case: O(n): 이미 정렬이 되어있는 경우
//버블 정렬은 최악의 경우에 O(n^2)의 시간 복잡도를 가진다. 왜냐하면 각 자리를 찾기 위해서 n번의 순회를 해야하며 n번의 회전 동안에 요소의 개수만큼 또 순회를 해야하기 때문이다. 그러나 이미 정렬이 되어있는 경우에는 한 번의 순회로 정렬 여부를 알 수 있다.

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

//삽입 정렬 : 각 원소를 적절한 위치에 삽입하는 정렬 기법, 각 단계에서 현재의 원소가 삽입될 위치를 찾고 적절한 위치에 도달할 때까지 반복적으로 왼쪽으로 이동한다.시간 복잡도 O(N^2)으로 비효율적인 정렬 알고리즘중 하나
//삽입 정렬은 버블정렬과 선택정렬과 비교했을때 보통 상대적으로 효율적으로 동작한다.(배열의 상태에 따라서 다름)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
}

//병합 정렬 : 분할 정복 알고리즘, 일반적으로 재귀함수를 이용하여 구현(오버헤드로 이어진다)
//시간 복잡도 O(NlogN)을 보장하여 빠른 정렬 알고리즘이다.
//장점 : 최악의 경우에도 O(NlogN)를 보장 할 수 있다는 점에서 효율적
//단점 : 일반적인 경우 정복 과정에서 임시 배열이 필요하다.

//병합 수행 함수
function merge(arr, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left; //결과배열 인덱스
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      sorted[k++] = arr[i++];
    } else {
      sorted[k++] = arr[j++];
    }
  }
  if (i > mid) {
    for (; j <= right; j++) {
      sorted[k++] = arr[j];
    }
  } else {
    for (; i <= right; i++) {
      sorted[k++] = arr[i];
    }
  }

  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x];
  }
}
//병합 정렬 함수
function megeSort(arr, left, right) {
  if (left < right) {
    let mid = parseInt((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}
