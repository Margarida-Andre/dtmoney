import { useState } from "react";
import Modal from "react-modal";
import { Header } from "./components/header";
import { Dashboard } from "./components/dashboard";
import { NewTransactionModal } from "./components/newTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./components/hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransictionModalOpen, setNewTransictionModalOpen] =
    useState(false);

  function hadleOpenNewTransictionsModal() {
    setNewTransictionModalOpen(true);
  }

  function hadleCloseNewTransictionsModal() {
    setNewTransictionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionsModal={hadleOpenNewTransictionsModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransictionModalOpen}
        onRequestClose={hadleCloseNewTransictionsModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
