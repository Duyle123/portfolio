"use client";

import React, { useEffect, useState } from 'react';
import '../app/globals.css';

// Reusable persistent state hook that avoids hydration mismatch
function usePersistentState(key, defaultValue) {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    try {
      const saved = safeLocalStorage.getItem(key);
      if (saved !== null) setValue(JSON.parse(saved));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      safeLocalStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [key, value]);
  return [value, setValue];
}

export default function RealEstateAnalyzer() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const formatNumber = (value) => {
    if (!value && value !== 0) return '';
    return Number(value).toLocaleString();
  };
  const parseNumber = (value) => Number(String(value).replace(/,/g, '')) || 0;

  // Step 1 & 2
  const [purchasePrice, setPurchasePrice] = usePersistentState('purchasePrice', 460000);
  const [closingCosts, setClosingCosts] = usePersistentState('closingCosts', 11950);
  const [holdingCosts, setHoldingCosts] = usePersistentState('holdingCosts', 300);
  const [constructionMonths, setConstructionMonths] = usePersistentState('constructionMonths', 16);
  const [asBuiltValue, setAsBuiltValue] = usePersistentState('asBuiltValue', 1400000);
  const [loanPercent, setLoanPercent] = usePersistentState('loanPercent', 90);
  const [interestRate, setInterestRate] = usePersistentState('interestRate', 6);
  const [loanAmount, setLoanAmount] = usePersistentState('loanAmount', 0);
  const [showConstructionPanel, setShowConstructionPanel] = useState(false);
  const [constructionItems, setConstructionItems] = usePersistentState('constructionItems', [
    { name: 'Foundation', cost: 100000 },
    { name: 'Framing', cost: 200000 }
  ]);

  // Step 3: Short Term Financing Assumptions
  const [financingType, setFinancingType] = usePersistentState('financingType', 'Financing');
  const [lenderCapType, setLenderCapType] = usePersistentState('lenderCapType', 'Cost');
  const [maxCostPercent, setMaxCostPercent] = usePersistentState('maxCostPercent', 90);
  const [originationPoints, setOriginationPoints] = usePersistentState('originationPoints', 1);
  const [otherLenderCosts, setOtherLenderCosts] = usePersistentState('otherLenderCosts', 0);
  const [pointsPaymentTiming, setPointsPaymentTiming] = usePersistentState('pointsPaymentTiming', 'Paid Backend');
  const [shortTermInterestRate, setShortTermInterestRate] = usePersistentState('shortTermInterestRate', 6);
  const [interestDuringConstruction, setInterestDuringConstruction] = usePersistentState('interestDuringConstruction', 'Yes');
  const [splitBackendProfits, setSplitBackendProfits] = usePersistentState('splitBackendProfits', '');

  const addConstructionItem = () => {
    setConstructionItems([...constructionItems, { name: '', cost: 0 }]);
  };
  const updateConstructionItem = (index, field, value) => {
    const updated = [...constructionItems];
    updated[index][field] = field === 'cost' ? parseNumber(value) : value;
    setConstructionItems(updated);
  };

  const totalConstructionBudget = constructionItems.reduce((sum, item) => sum + (Number(item.cost) || 0), 0);
  const totalCapitalNeeded = purchasePrice + closingCosts + totalConstructionBudget;
  const maxFinanced = (loanPercent / 100) * totalCapitalNeeded;
  const cashRequired = totalCapitalNeeded - maxFinanced;
  const projectedProfit = asBuiltValue - totalCapitalNeeded;
  const roi = cashRequired !== 0 ? ((projectedProfit / cashRequired) * 100) : 0;
  const roiAnnualized = constructionMonths > 0 ? (roi / (constructionMonths / 12)) : 0;
  const financedBudget = loanAmount > 0
    ? loanAmount * (interestRate / 100) * (constructionMonths / 12) + loanAmount
    : totalConstructionBudget;

  const numberInput = (label, value, setter) => (
    <div>
      <label className="block text-sm font-semibold">{label}</label>
      <input
        type="text"
        value={mounted ? formatNumber(value) : String(value)}
        onChange={(e) => setter(parseNumber(e.target.value))}
        className="w-full border rounded p-2"
        inputMode="decimal"
      />
    </div>
  );

  const textInput = (label, value, setter) => (
    <div>
      <label className="block text-sm font-semibold">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setter(e.target.value)}
        className="w-full border rounded p-2"
      />
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row p-4 bg-gray-100 min-h-screen gap-4">
      <div className="bg-white shadow-lg rounded-2xl p-4 flex-1 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Assumption Panel</h2>
        <div className="space-y-4">
          {numberInput('Purchase Price', purchasePrice, setPurchasePrice)}
          {numberInput('Closing Costs', closingCosts, setClosingCosts)}
          {numberInput('Holding Costs / Month', holdingCosts, setHoldingCosts)}

          <button onClick={() => setShowConstructionPanel(!showConstructionPanel)} className="px-4 py-2 bg-blue-500 text-white rounded">
            {showConstructionPanel ? 'Hide' : 'Show'} Construction Budget
          </button>

          {showConstructionPanel && (
            <div className="mt-4 border-t pt-4">
              <h3 className="font-bold mb-2">Construction Budget Items</h3>
              {constructionItems.map((item, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => updateConstructionItem(index, 'name', e.target.value)}
                    placeholder="Item name"
                    className="flex-1 border rounded p-2"
                  />
                  <input
                    type="text"
                    value={mounted ? formatNumber(item.cost) : String(item.cost)}
                    onChange={(e) => updateConstructionItem(index, 'cost', e.target.value)}
                    placeholder="Cost"
                    className="w-32 border rounded p-2"
                    inputMode="decimal"
                  />
                </div>
              ))}
              <button onClick={addConstructionItem} className="px-3 py-1 bg-green-500 text-white rounded">+ Add Item</button>
              <p className="mt-2 font-semibold" suppressHydrationWarning>
                Total Construction Budget: ${formatNumber(totalConstructionBudget)}
              </p>
              {numberInput('Loan Amount for Construction', loanAmount, setLoanAmount)}
              <p className="mt-2" suppressHydrationWarning>
                Financed Budget with Interest: ${formatNumber(financedBudget)}
              </p>
            </div>
          )}

          {numberInput('Construction Months', constructionMonths, setConstructionMonths)}
          {numberInput('As-Built Value', asBuiltValue, setAsBuiltValue)}
          {numberInput('Loan %', loanPercent, setLoanPercent)}
          {numberInput('Interest Rate', interestRate, setInterestRate)}

          <h3 className="text-lg font-bold mt-6">STEP (3) Short Term Financing Assumptions</h3>
          {textInput('Financing Used or All-Cash?', financingType, setFinancingType)}
          {textInput('Lender caps As-Built Value or Cost of Project?', lenderCapType, setLenderCapType)}
          {numberInput('Max % of Cost to be financed', maxCostPercent, setMaxCostPercent)}
          {numberInput('Origination/Discount Points', originationPoints, setOriginationPoints)}
          {numberInput('Other Closing Costs Paid to Lender', otherLenderCosts, setOtherLenderCosts)}
          {textInput('Points and Closing Costs Upfront or Back-End?', pointsPaymentTiming, setPointsPaymentTiming)}
          {numberInput('Interest Rate', shortTermInterestRate, setShortTermInterestRate)}
          {textInput('Interest Payment During Construction?', interestDuringConstruction, setInterestDuringConstruction)}
          {textInput('Split Back-End Profits with Lender?', splitBackendProfits, setSplitBackendProfits)}
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-4 flex-1">
        <h2 className="text-xl font-bold mb-4">Flip Analysis</h2>
        <div className="space-y-2">
          <p suppressHydrationWarning><strong>Total Capital Needed:</strong> ${formatNumber(totalCapitalNeeded)}</p>
          <p suppressHydrationWarning><strong>Max Financed:</strong> ${formatNumber(maxFinanced)}</p>
          <p suppressHydrationWarning><strong>Cash Required:</strong> ${formatNumber(cashRequired)}</p>
          <p suppressHydrationWarning><strong>Projected Profit:</strong> ${formatNumber(projectedProfit)}</p>
          <p suppressHydrationWarning><strong>ROI (Cash Invested):</strong> {roi.toFixed(2)}%</p>
          <p suppressHydrationWarning><strong>ROI (Annualized):</strong> {roiAnnualized.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
}
