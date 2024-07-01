import Image from "next/image";
import "./table.css";

interface Column {
    label: string;
    key: string;
    aling?: string;
}

interface Row {
    [key: string]: string | number;
}

interface TableComponentProps {
    rows: Row[];
    columns: Column[];
}

const TableComponent: React.FC<TableComponentProps> = ({ rows, columns }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th className="table-th" key={column.key}>
                            {column.label}
                            <Image 
                                src="/images/icons/sort-down.svg"
                                alt="sort"
                                height={24}
                                width={24}
                            />
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="table-tr">
                        {columns.map((column) => (
                            <td className="table-td" key={column.key}>
                                {row[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TableComponent;
