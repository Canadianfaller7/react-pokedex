import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import { useState } from "react";

import {HomePage, SearchPokemon, PokemonInfo, Navbar, Header } from "./components/index";

import AuthUtil from "./utils/auth";
import './App.css';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, {headers}) => {
  const token = AuthUtil.getToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {

   const [currentPage, setCurrentPage] = useState("Home");

   const pageRoute = () => {
     if (currentPage === "Home") {
       return <Route path='/' element={<HomePage />} />;
     }
     if (currentPage === "Search") {
       return <Route path='/search' element={<SearchPokemon />} />;
     }
     if (currentPage === "Pokemon Details") {
       return <Route path='/details/:id' element={<PokemonInfo />} />;
     }
     if (currentPage === "Null") {
       return <Route path='*' element={<NotFound />} />;
     }
   };

   const handlePageChange = (page) => setCurrentPage(page);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          <Header />
          <Routes>{pageRoute()}</Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
