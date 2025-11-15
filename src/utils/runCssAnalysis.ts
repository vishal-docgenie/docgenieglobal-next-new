
/**
 * CSS Analysis Runner
 * 
 * This file provides a simple way to run the CSS analysis from the console.
 * Run with: npx ts-node src/utils/runCssAnalysis.ts
 */

import { logCssAnalysis } from './cssAnalyzer';

// Run the analysis
logCssAnalysis()
  .then(() => {
    console.log('\nCSS analysis complete.');
  })
  .catch((error) => {
    console.error('Error running CSS analysis:', error);
  });
