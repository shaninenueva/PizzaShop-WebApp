export class Order {
    orderID: bigint;
    orderNumber: string;
    customerID: bigint;
    totalAmount: number;
    orderDateTime: Date;
    status: string;
    deliveryMethod: string;
}