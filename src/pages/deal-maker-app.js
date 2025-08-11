import React from 'react';
import { useState } from 'react';
function DealMakerApp() {
    const [purchasePrice, setPurchasePrice] = useState('');
    const [closingCostsPct, setClosingCostsPct] = useState('');
    const [holdingCostsPct, setHoldingCostsPct] = useState('');
    const [loanAmount, setLoanAmount] = useState('');
    const [showConstruction, setShowConstruction] = useState(false);
    const [constructionItems, setConstructionItems] = useState([]);
    const [constructionPeriod, setConstructionPeriod] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');

    // Calculate totals
    const closingCosts = loanAmount && closingCostsPct ? (loanAmount * closingCostsPct) / 100 : 0;
    const holdingCosts = loanAmount && holdingCostsPct ? (loanAmount * holdingCostsPct) / 100 : 0;
    const constructionTotal = constructionItems.reduce((sum, item) => sum + Number(item.cost || 0), 0);
    const constructionHoldingCost = constructionTotal && constructionPeriod && interestRate
        ? (constructionTotal * (interestRate / 100) * (constructionPeriod / 12))
        : 0;
    const totalProjectCost = Number(purchasePrice || 0) + closingCosts + holdingCosts + constructionTotal + constructionHoldingCost;
    const profit = sellingPrice ? sellingPrice - totalProjectCost : 0;

    // Handlers
    const handleAddConstructionItem = () => {
        setConstructionItems([...constructionItems, { name: '', cost: '' }]);
    };

    const handleConstructionItemChange = (idx, field, value) => {
        const updated = constructionItems.map((item, i) =>
            i === idx ? { ...item, [field]: value } : item
        );
        setConstructionItems(updated);
    };

    return (
        <div style={{ maxWidth: 600, margin: '0 auto', fontFamily: 'sans-serif' }}>
            <h2>Real Estate Deal Analyzer</h2>
            <div style={{ border: '1px solid #ccc', padding: 16, marginBottom: 16 }}>
                <h3>1. Purchase & Loan</h3>
                <label>
                    Purchase Price: <input type="number" value={purchasePrice} onChange={e => setPurchasePrice(e.target.value)} />
                </label>
                <br />
                <label>
                    Loan Amount: <input type="number" value={loanAmount} onChange={e => setLoanAmount(e.target.value)} />
                </label>
                <br />
                <label>
                    Closing Costs (% of loan): <input type="number" value={closingCostsPct} onChange={e => setClosingCostsPct(e.target.value)} />
                </label>
                <br />
                <label>
                    Holding Costs (% of loan): <input type="number" value={holdingCostsPct} onChange={e => setHoldingCostsPct(e.target.value)} />
                </label>
                <br />
                <div>
                    Closing Costs: ${closingCosts.toLocaleString()}
                </div>
                <div>
                    Holding Costs: ${holdingCosts.toLocaleString()}
                </div>
            </div>

            <div style={{ border: '1px solid #ccc', padding: 16, marginBottom: 16 }}>
                <h3>
                    2. Construction Budget{' '}
                    <button type="button" onClick={() => setShowConstruction(!showConstruction)}>
                        {showConstruction ? 'Hide' : 'Show'}
                    </button>
                </h3>
                {showConstruction && (
                    <div style={{ marginLeft: 16 }}>
                        {constructionItems.map((item, idx) => (
                            <div key={idx} style={{ marginBottom: 8 }}>
                                <input
                                    placeholder="Item"
                                    value={item.name}
                                    onChange={e => handleConstructionItemChange(idx, 'name', e.target.value)}
                                    style={{ marginRight: 8 }}
                                />
                                <input
                                    placeholder="Cost"
                                    type="number"
                                    value={item.cost}
                                    onChange={e => handleConstructionItemChange(idx, 'cost', e.target.value)}
                                    style={{ width: 100 }}
                                />
                            </div>
                        ))}
                        <button type="button" onClick={handleAddConstructionItem}>Add Item</button>
                        <div>Total Construction: ${constructionTotal.toLocaleString()}</div>
                        <div style={{ marginTop: 8 }}>
                            Construction Period (months):{' '}
                            <input
                                type="number"
                                value={constructionPeriod}
                                onChange={e => setConstructionPeriod(e.target.value)}
                                style={{ width: 60 }}
                            />
                        </div>
                        <div>
                            Interest Rate (% annual):{' '}
                            <input
                                type="number"
                                value={interestRate}
                                onChange={e => setInterestRate(e.target.value)}
                                style={{ width: 60 }}
                            />
                        </div>
                        <div>
                            Cost to Hold Construction: ${constructionHoldingCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </div>
                    </div>
                )}
            </div>

            <div style={{ border: '1px solid #ccc', padding: 16, marginBottom: 16 }}>
                <h3>3. Selling Price</h3>
                <label>
                    Selling Price: <input type="number" value={sellingPrice} onChange={e => setSellingPrice(e.target.value)} />
                </label>
            </div>

            <div style={{ border: '1px solid #ccc', padding: 16 }}>
                <h3>Summary</h3>
                <div>Total Project Cost: ${totalProjectCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
                <div>
                    {sellingPrice && (
                        <span>
                            Projected Profit: <b>${profit.toLocaleString(undefined, { maximumFractionDigits: 2 })}</b>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DealMakerApp;
