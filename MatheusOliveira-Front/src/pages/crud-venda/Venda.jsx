import React, { useEffect, useState } from "react";
import "./Venda.css";
import axios from "axios";

export default function Venda() {
  const [venda, setVenda] = useState({
    clientName: "",
    cpfClient: "",
    vehicleDescription: "",
    valuePurchase: "",
    valueSale: "",
    discount: "",
    total: "",
    comission: "",
  });
  const [vendas, setVendas] = useState([]);
  const [atualizar, setAtualizar] = useState({});
  var desconto =  venda.discount/100;
  var vendaDesconto = venda.valueSale * desconto;
  venda.total = venda.valueSale - vendaDesconto;
  
  if (venda.discount === null && venda.discount ==="") {
    venda.total = venda.valueSale;
  }
  venda.comission = venda.total * 0.15;

  useEffect(() => {
    //o que será executado
    axios.get("http://localhost:8080/api/venda/").then((result) => {
      //console.log(result);
      setVendas(result.data);
    });
  }, [atualizar /**variáveis de alteração */]);
  function handleChange(event) {
    console.log(event.target.name);
    console.log(event.target.value);
    setVenda({ ...venda, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (venda.id === undefined) {
      axios.post("http://localhost:8080/api/venda/", venda).then((result) => {
        setAtualizar(result.data.console);
        //atualizar a nossa tabela
      });
    } else {
      axios.put("http://localhost:8080/api/venda/", venda).then((result) => {
        setAtualizar(result.data);
        //atualizar a nossa tabela
      });
    }
  }
  function limpar(_event) {
    setVenda({
      clientName: "",
      cpfClient: "",
      vehicleDescription: "",
      valuePurchase: "",
      valueSale: "",
      discount: "",
      total: "",
      comission: "",
    });
  }

  function excluir(id) {
    axios.delete("http://localhost:8080/api/venda/" + id).then((_result) => {
      setAtualizar(id);
    });
  }

  return (
    <div>
      <h1>Vendas</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="col-6">
          <div className="row">
            <div className="col sm">
              <input
                name="clientName"
                className="form-control"
                value={venda.clientName}
                onChange={handleChange}
                type="text"
                placeholder="Digite o Nome do Ciente"
                required={true}
              />
              <br />
            </div>
            <div className="col sm">
              <input
                name="cpfClient"
                className="form-control"
                value={venda.cpfClient}
                onChange={handleChange}
                type="text"
                placeholder="Digite o CPF do Cliente"
                maxLength="11"
                required={true}
              />
              <p>apenas números</p>
            
            </div>
          </div>

          <div>
            <label className="form-label">Veículos:</label>
            <input
              name="vehicleDescription"
              className="form-control"
              value={venda.vehicleDescription}
              onChange={handleChange}
              type="text"
              placeholder="Informe a descrição do veículo"
              required={true}
            />
            <br />
            <br />
          </div>
          <div className="row">
            <div className="col sm">
              <label className="form-label">Valor de Compra:</label>
              <input
                name="valuePurchase"
                className="form-control"
                value={venda.valuePurchase}
                onChange={handleChange}
                type="number"
                placeholder="R$ 0000.00,00"
                required={true}
              />
              <br />
              <br />
            </div>
            <div className="col sm">
              <label className="form-label">Valor de Venda:</label>
              <input
                name="valueSale"
                className="form-control"
                value={venda.valueSale}
                onChange={handleChange}
                type="number"
                placeholder="R$ 0000.00,00"
                required={true}
              />
              <br />
              <br />
            </div>
            <div className="col sm">
              <label className="form-label">Desconto:</label>
              <input
                name="discount"
                className="form-control"
                value={venda.discount}
                onChange={handleChange}
                type="number"
              />
              <br />
              <br />
            </div>
          </div>
          <div>
            <label className="form-label">Total da Venda:</label>
            <input
              name="total"
              className="form-control"
              value={venda.total}
              onChange={handleChange}
              type="number"
              placeholder="R$ 0000.00,00"
            />
            <br />
            <br />
          </div>
          <div>
            <label className="form-label">Comissão:</label>
            <input
              name="comission"
              className="form-control"
              value={venda.comission.toFixed(2)}
              onChange={handleChange}
              type="number"
              placeholder="R$ 0000.00,00"
            />
            <br />
            <br />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-auto">
            <input
              type="submit"
              className="btn btn-success"
              onSubmit={handleSubmit}
              value="Cadastrar"
            />&nbsp; &nbsp;
          </div>

          <div className="col-md-auto">
            <input
              type="button"
              className="btn btn-secondary"
              value="Limpar Campos"
              onClick={() => limpar()}
            />
          </div>
        </div>
      </form>
      <br />
      <br />
      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th>Nome Cliente</th>
            <th>Veículo</th>
            <th>Resultado</th>
            <th>Comissão</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {vendas.map((venda) => (
            <tr key={venda.id}>
              <td>{venda.clientName}</td>
              <td>{venda.vehicleDescription}</td>
              <td>R$ {venda.total.toFixed(2)}</td>
              <td>R$ {venda.comission.toFixed(2)}</td>
              <td>
                <button
                  onClick={() => setVenda(venda)}
                  className="btn btn-primary"
                >
                  Editar
                </button>
                &nbsp;&nbsp;
                <button
                  onClick={() => excluir(venda.id)}
                  className="btn btn-danger"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        {vendas.resultado}
      </p>
    </div>
  );
}
