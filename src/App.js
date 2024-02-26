import { useState } from "react";

import Layout from "components/Layout";
import Loader from "components/Loader";
import Header from "components/Header";
import Section from "components/Section";
import EmptyPage from "components/EmptyPage";
import ResponseLines from "components/ResponseLines";

function App() {
  const [newNumbersList, setNewNumbersList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (numbers) => {
    setNewNumbersList(numbers);
    setIsLoading(true);
  };

  return (
    <Layout>
      <Header onSubmit={handleSubmit} setIsLoading={setIsLoading} />
      <Section>
        {isLoading ? (
          <Loader />
        ) : !newNumbersList ? (
          <EmptyPage />
        ) : (
          <ResponseLines newNumbersList={newNumbersList} />
        )}
      </Section>
    </Layout>
  );
}

export default App;
