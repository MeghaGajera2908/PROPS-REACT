export default function Table({ data }) {
    return (
        <table>
            <thead>
                <th>firstname</th>
                <th>lastname</th>
                <th>address</th>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    return (
                        <tr>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.address}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )

}