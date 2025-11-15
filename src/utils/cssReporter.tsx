
import React, { useEffect, useState } from 'react';
import { 
  analyzeDuplication,
  measureCssPayload,
  identifyUnusedCss,
  analyzeCssImports,
  analyzeMobileSpecificCss,
  runCompleteAnalysis
} from './cssAnalyzer';

/**
 * CSS Analysis Report component
 * 
 * This component displays a report of the CSS analysis results.
 * It's meant for development use only.
 */
export const CssAnalysisReport: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [analysis, setAnalysis] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const results = await runCompleteAnalysis();
        setAnalysis(results);
        setLoading(false);
      } catch (err) {
        setError('Failed to analyze CSS: ' + (err instanceof Error ? err.message : String(err)));
        setLoading(false);
      }
    };

    fetchAnalysis();
  }, []);

  if (loading) {
    return <div className="p-4">Loading CSS analysis...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  if (!analysis) {
    return <div className="p-4">No analysis data available.</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">CSS Analysis Report</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Duplication Analysis</h2>
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium mb-2">Duplicated Rules</h3>
          <ul className="list-disc pl-5">
            {Object.entries(analysis.duplication).map(([rule, files]: [string, string[]]) => (
              <li key={rule} className="mb-1">
                <span className="font-medium">{rule}</span> - Found in: {files.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">CSS Payload</h2>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="mb-2"><span className="font-medium">Total Size:</span> {analysis.payload.totalSize}</p>
          <p className="mb-2"><span className="font-medium">Critical CSS Estimate:</span> {analysis.payload.criticalCssEstimate}</p>
          
          <h3 className="font-medium mt-3 mb-2">File Breakdown</h3>
          <ul className="list-disc pl-5">
            {Object.entries(analysis.payload.fileBreakdown).map(([file, size]: [string, string]) => (
              <li key={file} className="mb-1">
                <span className="font-medium">{file}:</span> {size}
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Unused CSS Analysis</h2>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="mb-2"><span className="font-medium">Potential Unused Rules:</span> {analysis.unusedCss.potentialUnusedRules}</p>
          <p className="mb-2"><span className="font-medium">Potential Savings:</span> {analysis.unusedCss.potentialSavings}</p>
          <p className="mb-2"><span className="font-medium">Suggested Action:</span> {analysis.unusedCss.suggestedAction}</p>
        </div>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">CSS Imports Analysis</h2>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="mb-2"><span className="font-medium">Total Imports:</span> {analysis.imports.totalImports}</p>
          <p className="mb-2"><span className="font-medium">Cascading Imports:</span> {analysis.imports.cascadingImports}</p>
          <p className="mb-2"><span className="font-medium">Render-Blocking Imports:</span> {analysis.imports.renderBlockingImports}</p>
          <p className="mb-2"><span className="font-medium">Recommendation:</span> {analysis.imports.recommendation}</p>
        </div>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Mobile-Specific CSS Analysis</h2>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="mb-2"><span className="font-medium">Mobile-First Percentage:</span> {analysis.mobileSpecific.mobileFirstPercent}%</p>
          <p className="mb-2"><span className="font-medium">Desktop-First Overrides:</span> {analysis.mobileSpecific.desktopFirstOverrides}</p>
          <p className="mb-2"><span className="font-medium">Media Query Duplication:</span> {analysis.mobileSpecific.mediaQueryDuplication}</p>
          <p className="mb-2"><span className="font-medium">Recommendation:</span> {analysis.mobileSpecific.recommendation}</p>
        </div>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <div className="bg-gray-50 p-4 rounded-md">
          <ul className="list-disc pl-5">
            {analysis.summary.map((item: string, index: number) => (
              <li key={index} className="mb-1">{item}</li>
            ))}
          </ul>
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Next Steps</h2>
        <div className="bg-gray-50 p-4 rounded-md">
          <ol className="list-decimal pl-5">
            <li className="mb-1">Consolidate duplicate styles between App.css and index.css</li>
            <li className="mb-1">Implement critical CSS inlining for above-the-fold content</li>
            <li className="mb-1">Defer loading of non-critical CSS</li>
            <li className="mb-1">Refactor desktop-first CSS to follow mobile-first principles</li>
            <li className="mb-1">Implement PurgeCSS to remove unused styles</li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default CssAnalysisReport;
