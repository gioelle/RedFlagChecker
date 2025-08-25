#!/usr/bin/env node

/**
 * Relationship Red Flag Evaluator
 * 
 * This script accepts copy-pasted text conversations from stdin
 * and evaluates them for common relationship dynamic red flags.
 */

const readline = require('readline');

/**
 * Placeholder function to analyze conversation text for red flags.
 * @param {string} text - The conversation text to analyze.
 * @returns {string[]} - List of detected red flags.
 */
function analyzeConversation(text) {
  const redFlags = [];

  // Example simple checks (to be expanded)
  if (/gaslight/i.test(text)) {
    redFlags.push('Possible gaslighting detected.');
  }
  if (/you always/i.test(text)) {
    redFlags.push('Use of "you always" - potential blaming language.');
  }
  if (/ignore/i.test(text)) {
    redFlags.push('Mentions of ignoring - possible avoidance or stonewalling.');
  }

  if (redFlags.length === 0) {
    redFlags.push('No obvious red flags detected.');
  }

  return redFlags;
}

function main() {
  console.log('Paste your conversation text below. Press Ctrl+D (or Cmd+D on Mac) when done:\n');

  let inputText = '';

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  rl.on('line', (line) => {
    inputText += line + '\n';
  });

  rl.on('close', () => {
    const results = analyzeConversation(inputText);
    console.log('\nAnalysis Results:');
    results.forEach((flag, idx) => {
      console.log(`${idx + 1}. ${flag}`);
    });
  });
}

if (require.main === module) {
  main();
}