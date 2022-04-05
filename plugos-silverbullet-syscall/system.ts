import { syscall } from "./syscall";

export async function invokeFunction(
  env: string,
  name: string,
  ...args: any[]
): Promise<any> {
  return syscall("system.invokeFunctionOnServer", name, ...args);
}