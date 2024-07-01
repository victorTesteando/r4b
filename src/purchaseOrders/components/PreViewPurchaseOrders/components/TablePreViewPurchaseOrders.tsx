"use client";
import TableComponent from "@/components/Table/Table";
import { useAppSelector } from "@/store";

interface RowData {
    name: string;
    lastName: string;
    email: string;
    amount: number;
    fullName?: string;
}

const columns = [
    { label: "Colaborador", key: "fullName", aling: "left" },
    { label: "Email", key: "email", aling: "left" },
    { label: "Monto de créditos (COP)", key: "amount", aling: "right" },
];

const TablePreViewPurchaseOrders: React.FC = () => {
    const data = useAppSelector((state: { fileSavedPurchaseOrder: { data: RowData[] } }) => state.fileSavedPurchaseOrder.data);

    const transformedData = data.map((item) => ({
        ...item,
        fullName: `${item.name} ${item.lastName}`,
        amount: '$' + new Intl.NumberFormat('es-ES', {
            currency: 'COP'
        }).format(item.amount)
    }));
    return (
        <TableComponent rows={transformedData} columns={columns} />
    );
}

export default TablePreViewPurchaseOrders;
