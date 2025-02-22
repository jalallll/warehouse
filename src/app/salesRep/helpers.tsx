// const serverUrl = "http://localhost:3000";
const serverUrl = process.env.NEXT_PUBLIC_SERVER_PUBLIC_URL;

const openWindow = (windowName: string) => {
    const newWindow = window.open("", "_blank", "width=600,height=400");
    if (!newWindow) {
        console.error("Failed to open " + windowName + " window");
        return;
    }
    return newWindow;
};

export const handleViewInventory = async () => {
    const inventoryWindow = openWindow("inventory")!;

    try {
        const response = await fetch(`${serverUrl}/inventory`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const inventory = await response.json();

        inventoryWindow.document.write("<h1>Inventory</h1>");
        inventoryWindow.document.write(
            "<pre>" + JSON.stringify(inventory, null, 2) + "</pre>"
        );
    } catch (error) {
        console.error("Error fetching inventory:", error);
        inventoryWindow.document.write("<p>Error fetching inventory</p>");
    }
};

export const handleViewInboundOrders = async () => {
    try {
        const inboundOrdersWindow = openWindow("inbound orders")!;

        const response = await fetch(`${serverUrl}/inbound/orders`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const inboundOrders = await response.json();

        inboundOrdersWindow.document.write("<h1>Inbound Orders</h1>");
        inboundOrdersWindow.document.write(
            "<pre>" + JSON.stringify(inboundOrders, null, 2) + "</pre>"
        );
    } catch (error) {
        console.error("Error fetching inbound orders:", error);
    }
};

export const handleViewOutboundOrders = async () => {
    try {
        const outboundOrdersWindow = openWindow("outbound orders")!;

        const response = await fetch(`${serverUrl}/outbound/orders`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const outboundOrders = await response.json();

        outboundOrdersWindow.document.write("<h1>Outbound Orders</h1>");
        outboundOrdersWindow.document.write(
            "<pre>" + JSON.stringify(outboundOrders, null, 2) + "</pre>"
        );
    } catch (error) {
        console.error("Error fetching outbound orders:", error);
    }
};

export const handleCreateOutboundOrders = async () => {
    try {
        const outboundOrderWindow = openWindow("create outbound order")!;

        const response = await fetch(`${serverUrl}/outbound/orders`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const outboundOrders = await response.json();

        outboundOrderWindow.document.write("<h1>Create Outbound Order</h1>");
        outboundOrderWindow.document.write(
            "<pre>" + JSON.stringify(outboundOrders, null, 2) + "</pre>"
        );
    } catch (error) {
        console.error("Error fetching outbound orders:", error);
    }
};
