/**
 * Complete the function body
 *
 * To run the tests : `deno test src/arrays/arrays_test.ts`
 *
 * As you will see, TypeScript will considerably
 * improve the autocomplete experience in your editor.
 */

export function removeNumbersBelowThreshold(
  array: number[],
  threshold: number,
): number[] | [] {
  // Write your code here
  const array2: number[] = [];
  for (let i: number = 0; i < array.length; i++) {
    if (array[i] >= threshold) {
      array2.push(array[i]);
    }
  }
  return array2;
}

export function filterStringByLength(
  array: string[],
  minLength: number,
  maxLength: number,
): string[] | [] {
  // Write your code here
  const array2: string[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length <= maxLength && array[i].length >= minLength) {
      array2.push(array[i]);
    }
  }
  return array2;
}

export function getOnlyTheLowercaseLettersOfTheString(string: string): string {
  // Write your code here
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= "" + "a" && string[i] <= "z") {
      result += string[i];
    }
  }
  return result;
}
