import React, { useState, useEffect } from 'react';

interface Fee {
  id: string;
  description: string;
  amount: number;
  isPercentage: boolean;
  isSelected: boolean;
}

interface CalculationResult {
  subtotal: number;
  totalFees: number;
  grandTotal: number;
  breakdown: { description: string; amount: number }[];
}

const styles = {
  container: {
    minHeight: '100vh',
    padding: '20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '30px',
    color: 'white',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.1rem',
    opacity: 0.9,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: '30px',
  },
  card: {
    background: 'white',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'border-color 0.3s',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  feeItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
  },
  checkbox: {
    marginRight: '12px',
    width: '18px',
    height: '18px',
  },
  results: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  resultRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    fontSize: '16px',
  },
  grandTotal: {
    borderTop: '2px solid #667eea',
    paddingTop: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#667eea',
  },
  breakdown: {
    marginTop: '20px',
  },
  breakdownItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #e0e0e0',
  },
  customFeeForm: {
    borderTop: '1px solid #e0e0e0',
    paddingTop: '20px',
    marginTop: '20px',
  },
  flexRow: {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px',
  },
  flexInput: {
    flex: 1,
  },
  select: {
    padding: '12px',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '16px',
    minWidth: '140px',
  },
  removeBtn: {
    background: 'none',
    border: 'none',
    color: '#e74c3c',
    cursor: 'pointer',
    fontSize: '14px',
    padding: '5px',
  },
  clearBtn: {
    backgroundColor: '#6c757d',
    marginBottom: '10px',
  },
  copyBtn: {
    backgroundColor: '#28a745',
  }
};

const FeesCalculator: React.FC = () => {
  const [baseAmount, setBaseAmount] = useState<number>(0);
  const [fees, setFees] = useState<Fee[]>([
    { id: '1', description: 'Processing Fee', amount: 2.5, isPercentage: true, isSelected: false },
    { id: '2', description: 'Service Fee', amount: 15, isPercentage: false, isSelected: false },
    { id: '3', description: 'Transaction Fee', amount: 1.5, isPercentage: true, isSelected: false },
    { id: '4', description: 'Convenience Fee', amount: 5, isPercentage: false, isSelected: false },
    { id: '5', description: 'Platform Fee', amount: 3, isPercentage: true, isSelected: false },
  ]);
  
  const [customFee, setCustomFee] = useState({ description: '', amount: 0, isPercentage: false });
  const [result, setResult] = useState<CalculationResult>({
    subtotal: 0,
    totalFees: 0,
    grandTotal: 0,
    breakdown: []
  });

  const toggleFee = (id: string) => {
    setFees(fees.map(fee => 
      fee.id === id ? { ...fee, isSelected: !fee.isSelected } : fee
    ));
  };

  const addCustomFee = () => {
    if (customFee.description && customFee.amount > 0) {
      const newFee: Fee = {
        id: Date.now().toString(),
        description: customFee.description,
        amount: customFee.amount,
        isPercentage: customFee.isPercentage,
        isSelected: true
      };
      setFees([...fees, newFee]);
      setCustomFee({ description: '', amount: 0, isPercentage: false });
    }
  };

  const removeFee = (id: string) => {
    setFees(fees.filter(fee => fee.id !== id));
  };

  const calculateFees = React.useCallback(() => {
    const selectedFees = fees.filter(fee => fee.isSelected);
    let totalFees = 0;
    const breakdown: { description: string; amount: number }[] = [];

    selectedFees.forEach(fee => {
      let feeAmount = 0;
      if (fee.isPercentage) {
        feeAmount = (baseAmount * fee.amount) / 100;
      } else {
        feeAmount = fee.amount;
      }
      totalFees += feeAmount;
      breakdown.push({
        description: fee.description,
        amount: feeAmount
      });
    });

    setResult({
      subtotal: baseAmount,
      totalFees,
      grandTotal: baseAmount + totalFees,
      breakdown
    });
  }, [baseAmount, fees]);

  useEffect(() => {
    calculateFees();
  }, [calculateFees]);

  return (
    <div style={styles.container}>
      <div style={styles.main}>
        <div style={styles.header}>
          <h1 style={styles.title}>Fees Calculator</h1>
          <p style={styles.subtitle}>Calculate fees and total costs with ease</p>
        </div>

        <div style={styles.grid}>
          {/* Input Section */}
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Input Details</h2>
            
            {/* Base Amount */}
            <div style={styles.inputGroup}>
              <label style={styles.label}>Base Amount ($)</label>
              <input
                type="number"
                value={baseAmount}
                onChange={(e) => setBaseAmount(Number(e.target.value))}
                style={styles.input}
                placeholder="Enter base amount"
                min="0"
                step="0.01"
              />
            </div>

            {/* Available Fees */}
            <div style={styles.inputGroup}>
              <h3 style={{...styles.label, fontSize: '1.2rem', marginBottom: '15px'}}>Available Fees</h3>
              <div>
                {fees.map(fee => (
                  <div key={fee.id} style={styles.feeItem}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <input
                        type="checkbox"
                        checked={fee.isSelected}
                        onChange={() => toggleFee(fee.id)}
                        style={styles.checkbox}
                      />
                      <div>
                        <div style={{fontWeight: '500'}}>{fee.description}</div>
                        <div style={{fontSize: '14px', color: '#666'}}>
                          {fee.isPercentage ? `${fee.amount}%` : `$${fee.amount}`}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFee(fee.id)}
                      style={styles.removeBtn}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Custom Fee */}
            <div style={styles.customFeeForm}>
              <h3 style={{...styles.label, fontSize: '1.2rem', marginBottom: '15px'}}>Add Custom Fee</h3>
              <div>
                <input
                  type="text"
                  value={customFee.description}
                  onChange={(e) => setCustomFee({ ...customFee, description: e.target.value })}
                  style={{...styles.input, marginBottom: '15px'}}
                  placeholder="Fee description"
                />
                <div style={styles.flexRow}>
                  <input
                    type="number"
                    value={customFee.amount}
                    onChange={(e) => setCustomFee({ ...customFee, amount: Number(e.target.value) })}
                    style={{...styles.input, ...styles.flexInput}}
                    placeholder="Amount"
                    min="0"
                    step="0.01"
                  />
                  <select
                    value={customFee.isPercentage ? 'percentage' : 'fixed'}
                    onChange={(e) => setCustomFee({ ...customFee, isPercentage: e.target.value === 'percentage' })}
                    style={styles.select}
                  >
                    <option value="fixed">Fixed ($)</option>
                    <option value="percentage">Percentage (%)</option>
                  </select>
                </div>
                <button
                  onClick={addCustomFee}
                  style={styles.button}
                >
                  Add Fee
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Calculation Results</h2>
            
            {/* Summary */}
            <div style={styles.results}>
              <div style={styles.resultRow}>
                <span>Subtotal:</span>
                <span style={{fontWeight: '600'}}>${result.subtotal.toFixed(2)}</span>
              </div>
              <div style={styles.resultRow}>
                <span>Total Fees:</span>
                <span style={{fontWeight: '600', color: '#e74c3c'}}>${result.totalFees.toFixed(2)}</span>
              </div>
              <div style={{...styles.resultRow, ...styles.grandTotal}}>
                <span>Grand Total:</span>
                <span>${result.grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Breakdown */}
            {result.breakdown.length > 0 && (
              <div style={styles.breakdown}>
                <h3 style={{...styles.label, fontSize: '1.2rem', marginBottom: '15px'}}>Fee Breakdown</h3>
                <div>
                  {result.breakdown.map((item, index) => (
                    <div key={index} style={styles.breakdownItem}>
                      <span>{item.description}</span>
                      <span style={{fontWeight: '500'}}>${item.amount.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div style={{marginTop: '20px'}}>
              <button
                onClick={() => {
                  setBaseAmount(0);
                  setFees(fees.map(fee => ({ ...fee, isSelected: false })));
                }}
                style={{...styles.button, ...styles.clearBtn}}
              >
                Clear All
              </button>
              <button
                onClick={() => {
                  const text = `Fees Calculation Summary:
Base Amount: $${result.subtotal.toFixed(2)}
Total Fees: $${result.totalFees.toFixed(2)}
Grand Total: $${result.grandTotal.toFixed(2)}

Breakdown:
${result.breakdown.map(item => `${item.description}: $${item.amount.toFixed(2)}`).join('\n')}`;
                  navigator.clipboard.writeText(text);
                  alert('Results copied to clipboard!');
                }}
                style={{...styles.button, ...styles.copyBtn, marginTop: '10px'}}
              >
                Copy Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesCalculator;