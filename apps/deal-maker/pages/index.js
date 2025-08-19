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

function TextInput({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-semibold p">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded p-2"
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
  const [projectName, setProjectName] = usePersistentState('projectName', '');
  const [addressZip, setAddressZip] = usePersistentState('addressZip', '');
  const [zoning, setZoning] = usePersistentState('zoning', '');
  const [cityRegulations, setCityRegulations] = usePersistentState('cityRegulations', '');
  const [buildPaths, setBuildPaths] = usePersistentState('buildPaths', '');
  const [currentAppraisedValue, setCurrentAppraisedValue] = usePersistentState('currentAppraisedValue', 0);
  const [afterRepairValue, setAfterRepairValue] = usePersistentState('afterRepairValue', 0);
  const [monthsToComplete, setMonthsToComplete] = usePersistentState('monthsToComplete', 0);
  const [landAcquisitionCost, setLandAcquisitionCost] = usePersistentState('landAcquisitionCost', 0);
  const [landAppraisedValue, setLandAppraisedValue] = usePersistentState('landAppraisedValue', 0);

  useEffect(() => {
    const summary = projectName ? `${projectName} - $${formatNumber(afterRepairValue)}` : '';
    onChange({
      projectName,
      addressZip,
      zoning,
      cityRegulations,
      buildPaths,
      currentAppraisedValue,
      afterRepairValue,
      monthsToComplete,
      landAcquisitionCost,
      landAppraisedValue,
      summary,
    });
  }, [
    projectName,
    addressZip,
    zoning,
    cityRegulations,
    buildPaths,
    currentAppraisedValue,
    afterRepairValue,
    monthsToComplete,
    landAcquisitionCost,
    landAppraisedValue,
    formatNumber,
    onChange,
  ]);

  return (
    <div className="space-y-4">
      <TextInput label="Project Name" value={projectName} onChange={setProjectName} />
      <TextInput label="Address / Zip Code" value={addressZip} onChange={setAddressZip} />
      <TextInput label="Zoning" value={zoning} onChange={setZoning} />
      <TextInput label="City Regulations / Restrictions" value={cityRegulations} onChange={setCityRegulations} />
      <TextInput label="Potential Build Paths" value={buildPaths} onChange={setBuildPaths} />
      <NumberInput
        label="Current Appraised Value"
        value={currentAppraisedValue}
        onChange={setCurrentAppraisedValue}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
      <NumberInput
        label="ARV (After Repair Value)"
        value={afterRepairValue}
        onChange={setAfterRepairValue}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
      <NumberInput
        label="Months to Complete"
        value={monthsToComplete}
        onChange={setMonthsToComplete}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
      <NumberInput
        label="Land Acquisition Cost"
        value={landAcquisitionCost}
        onChange={setLandAcquisitionCost}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
      <NumberInput
        label="Land Appraised Value"
        value={landAppraisedValue}
        onChange={setLandAppraisedValue}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
    </div>
  );
}

function ConstructionSection({ onChange, formatNumber, parseNumber, mounted }) {
  const [constructionMonths, setConstructionMonths] = usePersistentState('constructionMonths', 0);
  const [targetSqft, setTargetSqft] = usePersistentState('targetSqft', 0);
  const [targetCostPerSqft, setTargetCostPerSqft] = usePersistentState('targetCostPerSqft', 0);
  const [currentCostPerSqft, setCurrentCostPerSqft] = usePersistentState('currentCostPerSqft', 0);
  const [lumpSumBudget, setLumpSumBudget] = usePersistentState('lumpSumBudget', 0);
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

  const itemizedTotal = constructionItems.reduce((sum, item) => sum + (Number(item.cost) || 0), 0);
  const totalConstructionBudget = lumpSumBudget > 0 ? lumpSumBudget : itemizedTotal;

  useEffect(() => {
    const summary = `$${formatNumber(totalConstructionBudget)}`;
    onChange({
      constructionMonths,
      targetSqft,
      targetCostPerSqft,
      currentCostPerSqft,
      lumpSumBudget,
      constructionItems,
      totalConstructionBudget,
      summary,
    });
  }, [
    constructionMonths,
    targetSqft,
    targetCostPerSqft,
    currentCostPerSqft,
    lumpSumBudget,
    constructionItems,
    totalConstructionBudget,
    formatNumber,
    onChange,
  ]);

  return (
    <div className="space-y-4">
      <NumberInput
        label="Target Square Feet"
        value={targetSqft}
        onChange={setTargetSqft}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
      <NumberInput
        label="Target $/sqft"
        value={targetCostPerSqft}
        onChange={setTargetCostPerSqft}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
      <NumberInput
        label="Current $/sqft"
        value={currentCostPerSqft}
        onChange={setCurrentCostPerSqft}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
      <NumberInput
        label="Lump Sum Budget"
        value={lumpSumBudget}
        onChange={setLumpSumBudget}
        formatNumber={formatNumber}
        parseNumber={parseNumber}
        mounted={mounted}
      />
      {lumpSumBudget === 0 && (
        <>
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
        </>
      )}
      <p className="font-semibold">Total Construction Budget: ${formatNumber(totalConstructionBudget)}</p>
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
  const [salesItems, setSalesItems] = usePersistentState('salesItems', []);

  const addItem = () => setSalesItems([...salesItems, { description: '', amount: 0 }]);
  const updateItem = (index, field, value) => {
    const updated = [...salesItems];
    updated[index][field] = field === 'amount' ? parseNumber(value) : value;
    setSalesItems(updated);
  };
  const totalSales = salesItems.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);

  useEffect(() => {
    const summary = `$${formatNumber(totalSales)}`;
    onChange({ salesItems, totalSales, summary });
  }, [salesItems, totalSales, formatNumber, onChange]);

  return (
    <div className="space-y-2">
      {salesItems.map((item, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input
            type="text"
            value={item.description}
            onChange={(e) => updateItem(index, 'description', e.target.value)}
            placeholder="Description"
            className="flex-1 border rounded p-2"
          />
          <input
            type="text"
            value={mounted ? formatNumber(item.amount) : String(item.amount)}
            onChange={(e) => updateItem(index, 'amount', e.target.value)}
            placeholder="Amount"
            className="w-32 border rounded p-2"
            inputMode="decimal"
          />
        </div>
      ))}
      <button onClick={addItem} className="px-3 py-1 bg-green-500 text-white rounded">
        + Add Item
      </button>
      <p className="font-semibold">Total Sales: ${formatNumber(totalSales)}</p>
    </div>
  );
}

function FinancingSection({ overall, onChange, formatNumber, parseNumber, mounted }) {
  const [financingMode, setFinancingMode] = usePersistentState('financingMode', 'All-Cash');
  const [closingCostsCash, setClosingCostsCash] = usePersistentState('closingCostsCash', [
    { name: 'Title Search', amount: 0 },
    { name: 'Title Insurance', amount: 0 },
    { name: 'Recording Fees', amount: 0 },
    { name: 'Real Estate Taxes Due', amount: 0 },
    { name: 'Agent Fees', amount: 0 },
    { name: 'Land survey', amount: 0 },
  ]);
  const [closingCostsFin, setClosingCostsFin] = usePersistentState('closingCostsFin', [
    { name: 'Title Search', amount: 0 },
    { name: 'Title Insurance Premium', amount: 0 },
    { name: 'Deed recording', amount: 0 },
    { name: 'Origination Fees', amount: 0 },
    { name: 'Loan Discount Fees / Points', amount: 0 },
    { name: 'Home Inspection', amount: 0 },
    { name: 'Land Survey', amount: 0 },
    { name: 'Notary Fees', amount: 0 },
    { name: 'Appraisal', amount: 0 },
    { name: 'Credit Report', amount: 0 },
    { name: 'Private Mortgage insurance premium', amount: 0 },
    { name: "Insurance escrow for homeowner's insurance", amount: 0 },
    { name: 'Property tax escrow', amount: 0 },
  ]);
  const [holdingCosts, setHoldingCosts] = usePersistentState('holdingCosts', [
    { name: 'Property taxes (monthly)', amount: 0 },
    { name: 'Vacant / Builder’s Risk Insurance Premium', amount: 0 },
    { name: 'Maintenance and Repairs', amount: 0 },
    { name: 'Vacancy Cost', amount: 0 },
  ]);
  const [opportunityCost, setOpportunityCost] = usePersistentState('opportunityCost', 0);
  const [loanAmount, setLoanAmount] = usePersistentState('loanAmount', 0);
  const [monthlyInterest, setMonthlyInterest] = usePersistentState('monthlyInterest', 0);

  const currentClosing = financingMode === 'All-Cash' ? closingCostsCash : closingCostsFin;
  const setCurrentClosing = financingMode === 'All-Cash' ? setClosingCostsCash : setClosingCostsFin;

  const addClosingItem = () => setCurrentClosing([...currentClosing, { name: '', amount: 0 }]);
  const updateClosingItem = (index, field, value) => {
    const updated = [...currentClosing];
    updated[index][field] = field === 'amount' ? parseNumber(value) : value;
    setCurrentClosing(updated);
  };

  const addHoldingItem = () => setHoldingCosts([...holdingCosts, { name: '', amount: 0 }]);
  const updateHoldingItem = (index, field, value) => {
    const updated = [...holdingCosts];
    updated[index][field] = field === 'amount' ? parseNumber(value) : value;
    setHoldingCosts(updated);
  };

  const closingCostsTotal = currentClosing.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
  const holdingCostsTotal = holdingCosts.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
  const months = Number(overall.monthsToComplete) || 0;
  const costOfCapitalTotal = (Number(opportunityCost) || 0) + (Number(monthlyInterest) || 0) * months;
  const totalFinancingCosts = closingCostsTotal + holdingCostsTotal + costOfCapitalTotal;

  useEffect(() => {
    const summary = `$${formatNumber(totalFinancingCosts)}`;
    onChange({
      financingMode,
      closingCostsCash,
      closingCostsFin,
      holdingCosts,
      opportunityCost,
      loanAmount,
      monthlyInterest,
      closingCostsTotal,
      holdingCostsTotal,
      costOfCapitalTotal,
      totalFinancingCosts,
      summary,
    });
  }, [
    financingMode,
    closingCostsCash,
    closingCostsFin,
    holdingCosts,
    opportunityCost,
    loanAmount,
    monthlyInterest,
    closingCostsTotal,
    holdingCostsTotal,
    costOfCapitalTotal,
    totalFinancingCosts,
    formatNumber,
    onChange,
  ]);

  return (
    <div className="space-y-4">
      <SelectInput
        label="Financed or All-Cash?"
        value={financingMode}
        onChange={setFinancingMode}
        options={['All-Cash', 'Financing']}
      />

      <div className="space-y-2">
        <h3 className="font-semibold">Closing Costs</h3>
        {currentClosing.map((item, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={item.name}
              onChange={(e) => updateClosingItem(index, 'name', e.target.value)}
              placeholder="Item"
              className="flex-1 border rounded p-2"
            />
            <input
              type="text"
              value={mounted ? formatNumber(item.amount) : String(item.amount)}
              onChange={(e) => updateClosingItem(index, 'amount', e.target.value)}
              placeholder="Amount"
              className="w-32 border rounded p-2"
              inputMode="decimal"
            />
          </div>
        ))}
        <button onClick={addClosingItem} className="px-3 py-1 bg-green-500 text-white rounded">
          Add Item
        </button>
        <p className="font-semibold">Total Closing Costs: ${formatNumber(closingCostsTotal)}</p>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Holding Costs (Projected)</h3>
        {holdingCosts.map((item, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={item.name}
              onChange={(e) => updateHoldingItem(index, 'name', e.target.value)}
              placeholder="Item"
              className="flex-1 border rounded p-2"
            />
            <input
              type="text"
              value={mounted ? formatNumber(item.amount) : String(item.amount)}
              onChange={(e) => updateHoldingItem(index, 'amount', e.target.value)}
              placeholder="Amount"
              className="w-32 border rounded p-2"
              inputMode="decimal"
            />
          </div>
        ))}
        <button onClick={addHoldingItem} className="px-3 py-1 bg-green-500 text-white rounded">
          Add Item
        </button>
        <p className="font-semibold">Total Holding Costs: ${formatNumber(holdingCostsTotal)}</p>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Cost of Capital</h3>
        <NumberInput
          label="Opportunity Cost"
          value={opportunityCost}
          onChange={setOpportunityCost}
          formatNumber={formatNumber}
          parseNumber={parseNumber}
          mounted={mounted}
        />
        <NumberInput
          label="Loan Amount on property"
          value={loanAmount}
          onChange={setLoanAmount}
          formatNumber={formatNumber}
          parseNumber={parseNumber}
          mounted={mounted}
        />
        <NumberInput
          label="Monthly Interest Payment"
          value={monthlyInterest}
          onChange={setMonthlyInterest}
          formatNumber={formatNumber}
          parseNumber={parseNumber}
          mounted={mounted}
        />
        <p className="font-semibold">Total Cost of Capital: ${formatNumber(costOfCapitalTotal)}</p>
      </div>

      <p className="font-semibold">Financing Total: ${formatNumber(totalFinancingCosts)}</p>
    </div>
  );
}

function InvestmentBasisSection({ overall, construction, financing, sales, onChange, formatNumber }) {
  const totalCost =
    (Number(overall.landAcquisitionCost) || 0) +
    (Number(construction.totalConstructionBudget) || 0) +
    (financing.totalFinancingCosts || 0);
  const projectedSale = sales.totalSales || 0;
  const projectedProfit = projectedSale - totalCost;
  const roi = totalCost > 0 ? (projectedProfit / totalCost) * 100 : 0;
  const summary = `${roi.toFixed(2)}% ROI`;

  useEffect(() => {
    onChange({ summary });
  }, [summary, onChange]);

  return (
    <div className="space-y-2">
      <p>
        <strong>Total Project Cost:</strong> ${formatNumber(totalCost)}
      </p>
      <p>
        <strong>Projected Sale:</strong> ${formatNumber(projectedSale)}
      </p>
      <p>
        <strong>Projected Profit:</strong> ${formatNumber(projectedProfit)}
      </p>
      <p>
        <strong>ROI:</strong> {roi.toFixed(2)}%
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
