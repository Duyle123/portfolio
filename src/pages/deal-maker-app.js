import React, { useState } from 'react';

export default function RealEstateAnalyzer() {
  const formatNumber = (value) => {
    if (!value && value !== 0) return '';
    return value.toLocaleString();
  };

  const parseNumber = (value) => {
    return Number(value.replace(/,/g, '')) || 0;
  };

  const [purchasePrice, setPurchasePrice] = useState(460000);
  const [closingCosts, setClosingCosts] = useState(11950);
  const [holdingCosts, setHoldingCosts] = useState(300);
  const [constructionMonths, setConstructionMonths] = useState(16);
  const [asBuiltValue, setAsBuiltValue] = useState(1400000);
  const [loanPercent, setLoanPercent] = useState(90);
  const [interestRate, setInterestRate] = useState(6);

  // Construction budget breakdown state
  const [showConstructionPanel, setShowConstructionPanel] = useState(false);
  const [constructionItems, setConstructionItems] = useState([
    { name: 'Foundation', cost: 100000 },
    { name: 'Framing', cost: 200000 }
  ]);

  const addConstructionItem = () => {
    setConstructionItems([...constructionItems, { name: '', cost: 0 }]);
  };

  const updateConstructionItem = (index, field, value) => {
    const updated = [...constructionItems];
    if (field === 'cost') {
      updated[index][field] = parseNumber(value);
    } else {
      updated[index][field] = value;
    }
    setConstructionItems(updated);
  };

  const totalConstructionBudget = constructionItems.reduce((sum, item) => sum + item.cost, 0);

  // Loan-based calculation for construction financing
  const [loanAmount, setLoanAmount] = useState(0);
  const financedBudget = loanAmount > 0 ? loanAmount * (interestRate / 100) * (constructionMonths / 12) + loanAmount : totalConstructionBudget;

  const totalCapitalNeeded = purchasePrice + closingCosts + totalConstructionBudget;
  const maxFinanced = (loanPercent / 100) * totalCapitalNeeded;
  const cashRequired = totalCapitalNeeded - maxFinanced;
  const projectedProfit = asBuiltValue - totalCapitalNeeded;
  const roi = ((projectedProfit / cashRequired) * 100).toFixed(2);
  const roiAnnualized = (roi / (constructionMonths / 12)).toFixed(2);

  const numberInput = (label, value, setter) => (
    <div>
      <label className="block text-sm font-semibold">{label}</label>
      <input
        type="text"
        value={formatNumber(value)}
        onChange={(e) => setter(parseNumber(e.target.value))}
        className="w-full border rounded p-2"
      />
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row p-4 bg-gray-100 min-h-screen gap-4">
      <div className="bg-white shadow-lg rounded-2xl p-4 flex-1">
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
                    value={formatNumber(item.cost)}
                    onChange={(e) => updateConstructionItem(index, 'cost', e.target.value)}
                    placeholder="Cost"
                    className="w-32 border rounded p-2"
                  />
                </div>
              ))}
              <button onClick={addConstructionItem} className="px-3 py-1 bg-green-500 text-white rounded">+ Add Item</button>
              <p className="mt-2 font-semibold">Total Construction Budget: ${formatNumber(totalConstructionBudget)}</p>
              {numberInput('Loan Amount for Construction', loanAmount, setLoanAmount)}
              <p className="mt-2">Financed Budget with Interest: ${formatNumber(financedBudget)}</p>
            </div>
          )}

          {numberInput('Construction Months', constructionMonths, setConstructionMonths)}
          {numberInput('As-Built Value', asBuiltValue, setAsBuiltValue)}
          {numberInput('Loan %', loanPercent, setLoanPercent)}
          {numberInput('Interest Rate', interestRate, setInterestRate)}
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-4 flex-1">
        <h2 className="text-xl font-bold mb-4">Flip Analysis</h2>
        <div className="space-y-2">
          <p><strong>Total Capital Needed:</strong> ${totalCapitalNeeded.toLocaleString()}</p>
          <p><strong>Max Financed:</strong> ${maxFinanced.toLocaleString()}</p>
          <p><strong>Cash Required:</strong> ${cashRequired.toLocaleString()}</p>
          <p><strong>Projected Profit:</strong> ${projectedProfit.toLocaleString()}</p>
          <p><strong>ROI (Cash Invested):</strong> {roi}%</p>
          <p><strong>ROI (Annualized):</strong> {roiAnnualized}%</p>
        </div>
      </div>
    </div>
  );
}
