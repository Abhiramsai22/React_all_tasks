import { Component } from "react";
class Card extends Component {
  render() {
    const arr = [

      {
        id: 1,
        ProductName: "Product 1",
        description: "this is product 1 description",
      },
      {
        id: 2,
        ProductName: "Product 1",
        description: "this is product 1 description",
      },
    ];
    return (
      <>
        <table>
          <thead>
            <th>ID</th>
            <th>Product Name</th>
            <th>Desctiption</th>
          </thead>
          <tbody>
            {
            arr.length > 0 ? (
              <>
                {arr.map((product, index) => {
                  return (
                    <tr>
                      <td>{product.id}</td>
                      <td>{product.ProductName}</td>
                      <td>{product.description}</td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <>
                <h1>No Data Avaible </h1>
              </>
            )
            }
          </tbody>
        </table>
      </>
    );
  }
}
export default Card;
