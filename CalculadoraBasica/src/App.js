import React, { Component } from 'react';
import { View } from 'react-native';

//Como é o arquivo index, não há a necessidade de colocar ./components/index
import { Topo, Resultado, Painel } from './components';

export default class App extends Component {

    constructor(props) {
        super(props);

          this.state = { num1: '0', num2: '0', operacao: 'soma', resultado: '' };
        //para resolver estrutura léxica
        //amarrando para que a função calcular se mantenha dentro do contexto do painel
        //e não no contexto do componente Comando que é de onde está vindo o clique no botão
        this.calcular = this.calcular.bind(this);
        this.atualizaValor = this.atualizaValor.bind(this);
        this.atualizaOperacao = this.atualizaOperacao.bind(this);
    }

    calcular() {
        let resultado = 0;

        switch (this.state.operacao) {
            case 'soma':
                resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
                break;
            case 'subtracao':
                resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
                break;
            case 'multiply':
                resultado = parseFloat(this.state.num1) * parseFloat(this.state.num2);
                break;
            case 'divide':
                resultado = parseFloat(this.state.num1) / parseFloat(this.state.num2);
                break;
            default:
                resultado = 0;
        }

        this.setState({ resultado: resultado.toString() });
    }

    atualizaOperacao(operacao) {
        this.setState({ operacao });
    }

    atualizaValor(nomeCampo, numero) {
        const obj = {};
        obj[nomeCampo] = numero;

        this.setState(obj);
    }

    render() {
        return (
            <View>
                <Topo />
                <Resultado resultado={this.state.resultado} />
                <Painel
                    num1={this.state.num1}
                    num2={this.state.num2}
                    operacao={this.state.operacao}
                    calcular={this.calcular}
                    atualizaOperacao={this.atualizaOperacao}
                    atualizaValor={this.atualizaValor}
                />
            </View>
        );
    }
};
