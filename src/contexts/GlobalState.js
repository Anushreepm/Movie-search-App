import React, { Component, createContext, useReducer } from "react";
import axios from "axios";

// Create Context
export const GlobalContext = createContext();

export class GlobalProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
      search: []
    };
    this.putData = this.putData.bind(this);
  }

  putData = (data) => {
    // console.log("hi i am putter");
    this.setState({
      ...this.state,
      ...data,
    });
  };

  componentDidMount() {
    this.setState({
      favourites: JSON.parse(localStorage.getItem("favourites")) || [],
    });
  }

  //   deleteTransaction(id) {
  //     const { transactions } = this.state;
  //     const newTransactions = transactions.filter(
  //       (transaction) => transaction.id !== id
  //     );
  //     this.setState(() => {
  //       localStorage.setItem("transactions", JSON.stringify(newTransactions));
  //       return {
  //         transactions: newTransactions,
  //       };
  //     });
  //   }
  //   addTransaction(transaction) {
  //     const newTransactions = [...this.state.transactions, transaction];
  //     this.setState(() => {
  //       localStorage.setItem("transactions", JSON.stringify(newTransactions));
  //       return {
  //         transactions: newTransactions,
  //       };
  //     });
  //   }

  render() {
    const commonProps = {
      ...this.state,
      putData: this.putData,
    };
    return (
      <GlobalContext.Provider
        value={{
          ...commonProps,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

// // Create Context
// export const GlobalContext = createContext(new GlobalProvider().state);
