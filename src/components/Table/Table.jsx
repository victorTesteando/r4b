

import Image from "next/image"
import "./table.css"


const TableComponent = ({rows, columns}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th className="table-th" key={column.label}>{column.label}
                            <Image 
                                src="/images/sort-down.svg"
                                alt="sort"
                                height={24}
                                width={24}
                            />
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr key={row.email} className='table-tr'>
                        <td className='table-td'>
                            {row.name}
                        </td>
                        <td className='table-td'>{row.lastName}</td>
                        <td className='table-td'>{row.email}</td>
                        <td className='table-td'>{row.group}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableComponent
