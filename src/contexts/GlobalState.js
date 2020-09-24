import React, { Component, createContext, useReducer } from "react";
import axios from "axios";

// Create Context
export const GlobalContext = createContext();

export class GlobalProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
      search: [],
    };
    this.putData = this.putData.bind(this);
    this.setFavourite = this.setFavourite.bind(this);
  }

  putData = (data, type) => {
    // console.log("hi i am putter");
    console.log(data);
    console.log(type);
    if (type === "all") {
      const search = data.Search.map((data) => {
        if (!data.isFav) {
          return {
            ...data,
            isFav: false,
          };
        }
        return data;
      });
      console.log(search);
      this.setState({
        ...this.state,
        ...data,
        search,
      });
    } else {
      const relevantType = data.Search.filter((data) => data.Type === type);

      const search = relevantType.map((data) => {
        if (!data.isFav) {
          return {
            ...data,
            isFav: false,
          };
        }
        return data;
      });
      console.log(search);
      this.setState({
        ...this.state,
        ...data,
        search,
      });
    }
  };

  setFavourite = (id) => {
    let flag = null;
    let favdata = null;
    const newData = this.state.search.map((data) => {
      if (data.imdbID == id) {
        console.log("yes i am");
        flag = !data.isFav;
        favdata = { ...data, isFav: !data.isFav };
        console.log(favdata);
        return {
          ...favdata,
        };
      }
      return data;
    });
    console.log("i am at 53");
    if (flag) {
      console.log("i am true");
      const newFavourites = [...this.state.favourites, favdata];
      console.log("fav", newFavourites);
      this.setState(() => {
        localStorage.setItem("favourites", JSON.stringify(newFavourites));
        return {
          ...this.state,
          favourites: [...this.state.favourites, favdata],
          new: "hello",
        };
      });
    } else {
      console.log("i am false");
      const newFavourites = this.state.favourites.filter(
        (fav) => fav.imdbID != id
      );
      this.setState(() => {
        localStorage.setItem("favourites", JSON.stringify(newFavourites));
        return {
          ...this.state,
          favourites: newFavourites,
        };
      });
    }
    console.log("i am new data", newData);
    this.setState({
      search: [...newData],
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
      setFavourite: this.setFavourite,
    };
    console.log(commonProps);
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
