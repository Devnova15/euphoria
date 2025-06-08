import {SummaryItem} from "./index.js";

// export const SummarySection = ({ subtotal, items, savings, shipping, total }) => {
    // return (
    //     <div className="w-full">
    //         <SummaryItem label={`Subtotal ( ${items} items )`} value={subtotal}/>
    //         {/*<SummaryItem label="Savings" value={savings} isDeduction={true}/>*/}
    //         <SummaryItem label="Shipping" value={shipping} isDeduction={true}/>
    //         <SummaryItem label="Total" value={total} isTotal={true}/>
    //     </div>
    // );


export const SummarySection = ({ subtotal, items, savings = 0, distance, shipping = 0, total }) => {
    const calculatedTotal = subtotal - savings + shipping;
    const finalTotal = total || calculatedTotal;

    return (
        <div className="summary-section">
            <SummaryItem label={`Subtotal (${items})`} value={subtotal}/>

            {savings > 0 && <SummaryItem label="Savings" value={savings} isDeduction={true}/>}

            {shipping > 0 ? (
                <SummaryItem label="Delivery" value={shipping} />
            ) : (
                <SummaryItem label="Delivery" value="Free" />
            )}

            <SummaryItem label="Total" value={subtotal + shipping} isTotal={true}/>
        </div>
    );
};