"use client";

import { useSearchParams } from "next/navigation";
import OrderForm from "../components/OrderForm";

export default function CreateOrder() {
    const searchParams = useSearchParams();
    const orderType = searchParams.get("type") || "inbound";

    return <OrderForm orderType={orderType} />;
}
