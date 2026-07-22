const INTRO_SESSION_KEY = "portfolio-intro-done";

export function isIntroDone(): boolean {
  try {
    return sessionStorage.getItem(INTRO_SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

export function markIntroDone(): void {
  try {
    sessionStorage.setItem(INTRO_SESSION_KEY, "1");
  } catch {
    /* ignore */
  }
}
