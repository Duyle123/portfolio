// Skip to content
// Search or jump to…
// Pull requests
// Issues
// Codespaces
// Marketplace
// Explore
 
// @Duyle123 
// shadeemerhi
// /
// tailwind-dark-mode-tutorial
// Public
// Fork your own copy of shadeemerhi/tailwind-dark-mode-tutorial
// Code
// Issues
// Pull requests
// Actions
// Projects
// Security
// Insights
// tailwind-dark-mode-tutorial/hooks/useLocalStorage.tsx /
// @shadeemerhi
// shadeemerhi complete tutorial
// Latest commit a519b7d on Jan 2
//  History
//  1 contributor
// 38 lines (34 sloc)  1.2 KB
 
'use client'
import { useState, useEffect } from "react";

const useLocalStorage = (key: string, initialValue: string) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // useEffect to update local storage when the state changes
  useEffect(() => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        typeof storedValue === "function"
          ? storedValue(storedValue)
          : storedValue;
      // Save state
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
// Footer
// © 2023 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
// tailwind-dark-mode-tutorial/useLocalStorage.tsx at main · shadeemerhi/tailwind-dark-mode-tutorial
