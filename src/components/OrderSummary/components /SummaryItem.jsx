
export const SummaryItem = ({ label, value, isTotal = false, isDeduction = false }) => {
    const valueClass = isDeduction ? 'text-green-600' : '';

    return (
        <div className={`flex justify-between py-3 ${isTotal ? 'border-t border-gray-200 mt-2 pt-4' : ''}`}>
      <span className={`text-lg ${isTotal ? 'font-bold' : 'text-gray-700'}`}>
        {label}
      </span>
            <span className={`text-lg ${isTotal ? 'font-bold' : ''} ${valueClass}`}>
        {isDeduction ? '-' : ''}{typeof value === 'number' ? `$${value.toFixed(2)}` : value}
      </span>
        </div>
    );
};
