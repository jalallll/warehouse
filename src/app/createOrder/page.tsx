"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import OrderForm from "../components/OrderForm";

function CreateOrderContent() {
    const searchParams = useSearchParams();
    const orderType = searchParams.get("type") || "inbound";

    return <OrderForm orderType={orderType} />;
}

export default function CreateOrder() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CreateOrderContent />
        </Suspense>
    );
}
