"use client";

import React, { useEffect, useState } from 'react';
import PopupSection from '../components/PopupSection';
import safeLocalStorage from '../components/user-info/safeLocalStorage';

// Reusable persistent state hook that avoids hydration mismatch
function usePersistentState(key, defaultValue) {
  const [value, setValue] = useState(defaultValue);
  // Read once after mount so SSR/first client render match
  useEffect(() => {
    try {
      const saved = safeLocalStorage.getItem(key);
      if (saved !== null) setValue(JSON.parse(saved));
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Persist on change
  useEffect(() => {
    try {
      safeLocalStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [key, value]);
  return [value, setValue];
}

function NumberInput({ label, value, onChange, formatNumber, parseNumber, mounted }) {
  return (
    <div>
      <label className="block text-sm font-semibold p">{label}</label>
      <input
        type="text"
        value={mounted ? formatNumber(value) : String(value)}
        onChange={(e) => onChange(parseNumber(e.target.value))}
        className="w-full border rounded p-2"
        inputMode="decimal"
      />
    </div>
  );
}

function SelectInput({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-sm font-semibold">{label}</label>
      <select
        className="w-full border rounded p-2 bg-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function OverallSection({ onChange, formatNumber, parseNumber, mounted }) {
  const [purchasePrice, setPurchasePrice] = usePersistentState('purchasePrice', 460000);
  const [closingCosts, setClosingCosts] = usePersistentState('closingCosts', 11950);
  const [holdingCosts, setHoldingCosts] = usePersistentState('holdingCosts', 300);

  useEffect(() => {
    const summary = `$${formatNumber(purchasePrice + closingCosts)}`;
    onChange({ purchasePrice, closingCosts, holdingCosts, summary });
  }, [purchasePrice, closingCosts, holdingCosts, formatNumber, onChange]);

  return (
    <div className="space-y-4">
      <NumberInput
        label="Purchase Price"
        value={purchasePrice}
        onChange={setPurchasePrice}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
      <NumberInput
        label="Closing Costs"
        value={closingCosts}
        onChange={setClosingCosts}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
      <NumberInput
        label="Holding Costs / Month"
        value={holdingCosts}
        onChange={setHoldingCosts}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
    </div>
  );
}

function ConstructionSection({ onChange, formatNumber, parseNumber, mounted }) {
  const [constructionMonths, setConstructionMonths] = usePersistentState('constructionMonths', 16);
  const [loanAmount, setLoanAmount] = usePersistentState('loanAmount', 0);
  const [constructionItems, setConstructionItems] = usePersistentState('constructionItems', [
    { name: 'Foundation', cost: 100000 },
    { name: 'Framing', cost: 200000 },
  ]);

  const addConstructionItem = () => setConstructionItems([...constructionItems, { name: '', cost: 0 }]);
  const updateConstructionItem = (index, field, value) => {
    const updated = [...constructionItems];
    updated[index][field] = field === 'cost' ? parseNumber(value) : value;
    setConstructionItems(updated);
  };

  const totalConstructionBudget = constructionItems.reduce((sum, item) => sum + (Number(item.cost) || 0), 0);

  useEffect(() => {
    const summary = `$${formatNumber(totalConstructionBudget)}`;
    onChange({ constructionMonths, loanAmount, constructionItems, totalConstructionBudget, summary });
  }, [constructionMonths, loanAmount, constructionItems, totalConstructionBudget, formatNumber, onChange]);

  return (
    <div className="space-y-4">
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
      <button onClick={addConstructionItem} className="px-3 py-1 bg-green-500 text-white rounded">
        + Add Item
      </button>
      <p className="font-semibold">Total Construction Budget: ${formatNumber(totalConstructionBudget)}</p>
      <NumberInput
        label="Loan Amount for Construction"
        value={loanAmount}
        onChange={setLoanAmount}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
      <NumberInput
        label="Construction Months"
        value={constructionMonths}
        onChange={setConstructionMonths}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
    </div>
  );
}

function SalesSection({ onChange, formatNumber, parseNumber, mounted }) {
  const [asBuiltValue, setAsBuiltValue] = usePersistentState('asBuiltValue', 1400000);

  useEffect(() => {
    const summary = `$${formatNumber(asBuiltValue)}`;
    onChange({ asBuiltValue, summary });
  }, [asBuiltValue, formatNumber, onChange]);

  return (
    <div>
      <NumberInput
        label="As-Built Value"
        value={asBuiltValue}
        onChange={setAsBuiltValue}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
    </div>
  );
}

function FinancingSection({ overall, construction, sales, onChange, formatNumber, parseNumber, mounted }) {
  const [financingType, setFinancingType] = usePersistentState('financingType', 'Financing');
  const [lenderCapType, setLenderCapType] = usePersistentState('lenderCapType', 'Cost');
  const [maxCostPercent, setMaxCostPercent] = usePersistentState('maxCostPercent', 90);
  const [loanPercent, setLoanPercent] = usePersistentState('loanPercent', 90);
  const [originationPoints, setOriginationPoints] = usePersistentState('originationPoints', 1);
  const [otherLenderCosts, setOtherLenderCosts] = usePersistentState('otherLenderCosts', 0);
  const [pointsPaymentTiming, setPointsPaymentTiming] = usePersistentState('pointsPaymentTiming', 'Paid Backend');
  const [shortTermInterestRate, setShortTermInterestRate] = usePersistentState('shortTermInterestRate', 6);
  const [interestDuringConstruction, setInterestDuringConstruction] = usePersistentState('interestDuringConstruction', 'Yes');
  const [displayBudget, setDisplayBudget] = useState(0);

  useEffect(() => {
    const projectHardCosts = (overall.purchasePrice || 0) + (overall.closingCosts || 0) + (construction.totalConstructionBudget || 0);
    const effectiveLoanBase = lenderCapType === 'Cost' ? projectHardCosts : (sales.asBuiltValue || 0);
    const ltvPercent = lenderCapType === 'Cost' ? (Number(maxCostPercent) || 0) : (Number(loanPercent) || 0);
    const loanPrincipal = financingType === 'Financing' ? (ltvPercent / 100) * effectiveLoanBase : 0;
    const pointsAndOtherRate = ((Number(originationPoints) || 0) + (Number(otherLenderCosts) || 0)) / 100;
    const pointsAndOtherAmount = loanPrincipal * pointsAndOtherRate;
    const interestAccrued = loanPrincipal * ((Number(shortTermInterestRate) || 0) / 100) * ((Number(construction.constructionMonths) || 0) / 12);
    const upfrontAdders = (pointsPaymentTiming === 'Upfront' ? pointsAndOtherAmount : 0) + (interestDuringConstruction === 'Yes' ? interestAccrued : 0);
    const backendAdders = (pointsPaymentTiming === 'Paid Backend' ? pointsAndOtherAmount : 0) + (interestDuringConstruction === 'No' ? interestAccrued : 0);
    const financedBudget = loanPrincipal + (interestDuringConstruction === 'Yes' ? interestAccrued : 0);
    const summary = `$${formatNumber(loanPrincipal)}`;
    setDisplayBudget(financedBudget);
    onChange({ loanPrincipal, upfrontAdders, backendAdders, financedBudget, summary });
  }, [overall.purchasePrice, overall.closingCosts, construction.totalConstructionBudget, construction.constructionMonths, sales.asBuiltValue, financingType, lenderCapType, maxCostPercent, loanPercent, originationPoints, otherLenderCosts, pointsPaymentTiming, shortTermInterestRate, interestDuringConstruction, formatNumber, onChange]);

  return (
    <div className="space-y-4">
      <SelectInput
        label="Financing Used or All-Cash?"
        value={financingType}
        onChange={setFinancingType}
        options={['Financing', 'All-Cash']}
      />
      <SelectInput
        label="Lender caps As-Built Value or Cost of Project?"
        value={lenderCapType}
        onChange={setLenderCapType}
        options={['Cost', 'As-Built Value']}
      />
      <NumberInput
        label="Max % of Cost to be financed"
        value={maxCostPercent}
        onChange={setMaxCostPercent}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
      {lenderCapType === 'As-Built Value' && (
        <NumberInput
          label="Loan Percent of As-Built"
          value={loanPercent}
          onChange={setLoanPercent}
          formatNumber={formatNumber}
          parseNumber={parseNumber}
          mounted={mounted}
        />
      )}
      <NumberInput
        label="Origination/Discount Points"
        value={originationPoints}
        onChange={setOriginationPoints}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
      <NumberInput
        label="Other Closing Costs Paid to Lender"
        value={otherLenderCosts}
        onChange={setOtherLenderCosts}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
      <SelectInput
        label="Points and Closing Costs Upfront or Back-End?"
        value={pointsPaymentTiming}
        onChange={setPointsPaymentTiming}
        options={['Upfront', 'Paid Backend']}
      />
      <NumberInput
        label="Short-Term Interest Rate"
        value={shortTermInterestRate}
        onChange={setShortTermInterestRate}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
      <SelectInput
        label="Interest Payment During Construction?"
        value={interestDuringConstruction}
        onChange={setInterestDuringConstruction}
        options={['Yes', 'No']}
      />
      <p className="mt-2">Financed Budget with Interest: ${formatNumber(displayBudget)}</p>
    </div>
  );
}

function InvestmentBasisSection({ overall, construction, financing, sales, onChange, formatNumber }) {
  const holdingTotal = (Number(overall.holdingCosts) || 0) * (Number(construction.constructionMonths) || 0);
  const projectHardCosts = (Number(overall.purchasePrice) || 0) + (Number(overall.closingCosts) || 0) + (Number(construction.totalConstructionBudget) || 0);
  const totalCapitalNeeded = projectHardCosts + holdingTotal + (financing.upfrontAdders || 0);
  const cashRequired = Math.max(totalCapitalNeeded - (financing.loanPrincipal || 0), 0);
  const projectedProfit = (Number(sales.asBuiltValue) || 0) - (totalCapitalNeeded + (financing.backendAdders || 0));
  const roi = cashRequired !== 0 ? (projectedProfit / cashRequired) * 100 : 0;
  const roiAnnualized = construction.constructionMonths > 0 ? roi / (construction.constructionMonths / 12) : 0;
  const summary = `${roi.toFixed(2)}% ROI`;

  useEffect(() => {
    onChange({ summary });
  }, [summary, onChange]);

  return (
    <div className="space-y-2">
      <p>
        <strong>Total Capital Needed:</strong> ${formatNumber(totalCapitalNeeded)}
      </p>
      <p>
        <strong>Max Financed (Loan Principal):</strong> ${formatNumber(financing.loanPrincipal || 0)}
      </p>
      <p>
        <strong>Cash Required:</strong> ${formatNumber(cashRequired)}
      </p>
      <p>
        <strong>Projected Profit:</strong> ${formatNumber(projectedProfit)}
      </p>
      <p>
        <strong>ROI (Cash Invested):</strong> {roi.toFixed(2)}%
      </p>
      <p>
        <strong>ROI (Annualized):</strong> {roiAnnualized.toFixed(2)}%
      </p>
    </div>
  );
}

export default function RealEstateAnalyzer() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const formatNumber = (value) => {
    if (!value && value !== 0) return '';
    return Number(value).toLocaleString();
  };
  const parseNumber = (value) => Number(String(value).replace(/,/g, '')) || 0;

  const [overall, setOverall] = useState({});
  const [overallSummary, setOverallSummary] = useState('');

  const [construction, setConstruction] = useState({});
  const [constructionSummary, setConstructionSummary] = useState('');

  const [sales, setSales] = useState({});
  const [salesSummary, setSalesSummary] = useState('');

  const [financing, setFinancing] = useState({});
  const [financingSummary, setFinancingSummary] = useState('');

  const [investmentSummary, setInvestmentSummary] = useState('');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <PopupSection title="Overall Information" summary={overallSummary}>
        <OverallSection
          onChange={(data) => {
            setOverall(data);
            setOverallSummary(data.summary);
          }}
          formatNumber={formatNumber}
          parseNumber={parseNumber}
          mounted={mounted}
        />
      </PopupSection>

      <PopupSection title="Construction" summary={constructionSummary}>
        <ConstructionSection
          onChange={(data) => {
            setConstruction(data);
            setConstructionSummary(data.summary);
          }}
          formatNumber={formatNumber}
          parseNumber={parseNumber}
          mounted={mounted}
        />
      </PopupSection>

      <PopupSection title="Financing" summary={financingSummary}>
        <FinancingSection
          overall={overall}
          construction={construction}
          sales={sales}
          onChange={(data) => {
            setFinancing(data);
            setFinancingSummary(data.summary);
          }}
          formatNumber={formatNumber}
          parseNumber={parseNumber}
          mounted={mounted}
        />
      </PopupSection>

      <PopupSection title="Sales" summary={salesSummary}>
        <SalesSection
          onChange={(data) => {
            setSales(data);
            setSalesSummary(data.summary);
          }}
          formatNumber={formatNumber}
          parseNumber={parseNumber}
          mounted={mounted}
        />
      </PopupSection>

      <PopupSection title="Investment Basis" summary={investmentSummary}>
        <InvestmentBasisSection
          overall={overall}
          construction={construction}
          financing={financing}
          sales={sales}
          onChange={(data) => setInvestmentSummary(data.summary)}
          formatNumber={formatNumber}
        />
      </PopupSection>
    </div>
  );
}
