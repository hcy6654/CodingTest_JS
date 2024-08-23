//선택 정렬 : 매 단계에서 가장 작은 원소를 선택해서 아직 처리되지 않은 원소들 앞으로 보내는 정렬 방법, 시간 복잡도 O(N제곱)으로 비효율적인 정렬 알고리즘중 하나
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
