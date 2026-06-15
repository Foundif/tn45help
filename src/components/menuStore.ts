import { useEffect, useState } from "react";

let isOpen = false;
const listeners = new Set<(v: boolean) => void>();

export function setMenuOpen(v: boolean) {
  isOpen = v;
  listeners.forEach((l) => l(v));
}

export function useMenuOpen() {
  const [v, setV] = useState(isOpen);
  useEffect(() => {
    listeners.add(setV);
    return () => { listeners.delete(setV); };
  }, []);
  return v;
}
