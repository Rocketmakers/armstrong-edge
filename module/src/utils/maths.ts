export namespace Maths {
  export function mod(n: number, by: number) {
    return ((n % by) + by) % by;
  }
}
