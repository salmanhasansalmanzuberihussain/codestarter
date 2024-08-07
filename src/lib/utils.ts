import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



// mongodb+srv://sh8salmanhasan:Tpdk5dA4Hxx30Bs1@cluster0.hkkqt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

