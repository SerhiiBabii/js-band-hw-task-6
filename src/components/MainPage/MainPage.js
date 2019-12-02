import React from 'react';
import Header from '../Header/Header';
import List from '../List/List';
import ModalItem from '../ModalItem/ModalItem';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import Footer from '../Footer/Footer';

const MainPage = (props) => {
  const {
    search,
    status,
    priority,
    currentId,
    currentTitle,
    currentDescription,
    currentPriority,
    currentStatus,
    modalShow,
    todoList,
    handleSelect,
    showModalArea,
    addItem,
    deleteItem,
    onToggleDone,
    setCurrentFields,
    clearModalField,
    setCurrentId,
  } = props;
  return (
    <>
      <HeaderTitle/>
      <Header
        search={search}
        status={status}
        priority={priority}
        handleSelect={handleSelect}
        showModalArea={showModalArea}
      />
      <List
        setCurrentFields={setCurrentFields}
        addItem={addItem}
        todoList={todoList}
        deleteItem={deleteItem}
        onToggleDone={onToggleDone}
      />
      <ModalItem
        currentId={currentId}
        currentTitle={currentTitle}
        currentDescription={currentDescription}
        currentPriority={currentPriority}
        currentStatus={currentStatus}
        modalShow={modalShow}
        handleSelect={handleSelect}
        addItem={addItem}
        clearModalField={clearModalField}
        setCurrentId={setCurrentId}
      />
      <Footer/>
    </>
  );
};

export default MainPage;
