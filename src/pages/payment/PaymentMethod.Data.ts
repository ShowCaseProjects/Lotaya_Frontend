import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

interface PaymentMethod {
    paymentMethodId: string;
    userId: string;
    receiverAccountName: string;
    receiverAccount: string;
    amount: string;
    paymentConfirmationCode: string;
    registerDate:string;
    updatedDate:string;
  }
const GET_ORDERS_URL = "http://localhost:8080/api/v1/paymentmethod/all";
const usePaymentMethod = () => {
  const [paymentmethods, setPaymentMethod] = useState<PaymentMethod[]>([]);
  
  useEffect(() => {
    const fetchPaymentMethod = async () => {
      const response = await fetch(GET_ORDERS_URL);
      const data: PaymentMethod[] = await response.json();
      setPaymentMethod(data);
    };

    fetchPaymentMethod();
  }, []);

  useEffect(() => {
          const socket: Socket = io('http://localhost:8080/');
          socket.once("paymentmethod-added", (newData: PaymentMethod) => {
          setPaymentMethod((prevData) => [...prevData, newData]);
        });
      }, []);

  return {
    paymentmethods,
  };
};

export default usePaymentMethod;
