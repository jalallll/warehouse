// const serverUrl = "http://localhost:3000";
const serverUrl = "http://192.168.2.14:3000";
export const handleViewInventory = async () => {
    const inventoryWindow = window.open("", "_blank", "width=600,height=400");
    if (!inventoryWindow) {
        console.error("Failed to open inventory window");
        return;
    }

    try {
        const response = await fetch("http://192.168.2.14:3000/inventory");
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
        const inboundOrdersWindow = window.open(
            "",
            "_blank",
            "width=600,height=400"
        );
        if (!inboundOrdersWindow) {
            console.error("Failed to open inbound orders window");
            return;
        }

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
        const outboundOrdersWindow = window.open(
            "",
            "_blank",
            "width=600,height=400"
        );
        if (!outboundOrdersWindow) {
            console.error("Failed to open outbound orders window");
            return;
        }

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
