function Tabela() {
  const ItemId = (props) => {
    return dadosTabela[props.indice].id;
  };

  const ItemNome = (props) => {
    return dadosTabela[props.indice].nome;
  };

  const ItemIdade = (props) => {
    return dadosTabela[props.indice].idade;
  };

  const dadosTabela = [
    { id: 1, nome: "Caio", idade: 18 },
    { id: 2, nome: "Carolina", idade: 17 },
    { id: 3, nome: "Erika", idade: 40 },
    {id: 4, nome: "Anderson", idade: 43}
  ];

  return (
    <>
    <h1>Tabela usando destruturação de arrays</h1>
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Idade</th>
          </tr>
          <tr>
            <td>
              <ItemId indice={0} />
            </td>
            <td>
              <ItemNome indice={0} />
            </td>
            <td>
              <ItemIdade indice={0} />
            </td>
          </tr>
          <tr>
            <td>
              <ItemId indice={1} />
            </td>
            <td>
              <ItemNome indice={1} />
            </td>
            <td>
              <ItemIdade indice={1} />
            </td>
          </tr>
          <tr>
            <td>
              <ItemId indice={2} />
            </td>
            <td>
              <ItemNome indice={2} />
            </td>
            <td>
              <ItemIdade indice={2} />
            </td>
          </tr>
          <tr>
            <td>
              <ItemId indice={3} />
            </td>
            <td>
              <ItemNome indice={3} />
            </td>
            <td>
              <ItemIdade indice={3} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Tabela;
