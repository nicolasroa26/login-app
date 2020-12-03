import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Context } from './Context';

export default class TodoStore extends Component {
  state = {
    todoServicios: [],
    updateTodoServicios: item => {
      this._updateTodoServicios(item);
    },
    deleteTodoServicios: item => {
      this._deleteTodoServicios(item);
    },
    updateSelectedTaskServicios: item => {
      this._updateSelectedTaskServicios(item);
    },
    deleteSelectedTaskServicios: item => {
      this._deleteSelectedTaskServicios(item);
    },
  };

  _deleteSelectedTaskServicios = async item => {
    const previousTodoServicios = [...this.state.todoServicios];
    const newTodoServicios = previousTodoServicios.map(data => {
      if (item.date === data.date) {
        const previousTodoListServicios = [...data.todoList];
        const newTodoListServicios = previousTodoListServicios.filter(list => {
          if (list.key === item.todoServicios.key) {
            return false;
          }
          return true;
        });

        data.todoList = newTodoListServicios;
        return data;
      }
      return data;
    });
    const checkForEmptyServicios = newTodoServicios.filter(data => {
      if (data.todoList.length === 0) {
        return false;
      }
      return true;
    });
    try {
      await AsyncStorage.setItem('TODOSERVICIOS', JSON.stringify(checkForEmptyServicios));
      this.setState({
        todoServicios: checkForEmptyServicios,
      });
    } catch (error) {
      // Error saving data
    }
  };


  _updateSelectedTaskServicios = async item => {
    const previousTodoServicios = [...this.state.todoServicios];
    const newTodoServicios = previousTodoServicios.map(data => {
      if (item.date === data.date) {
        const previousTodoListServicios = [...data.todoList];
        const newTodoListServicios = previousTodoListServicios.map(list => {
          if (list.key === item.todoServicios.key) {
            return item.todoServicios;
          }
          return list;
        });
        data.todoList = newTodoListServicios;
        return data;
      }
      return data;
    });
    try {
      await AsyncStorage.setItem('TODOSERVICIOS', JSON.stringify(newTodoServicios));
      this.setState({
        todoServicios: newTodoServicios,
      });
    } catch (error) {
      // Error saving data
    }
  };

 
  async UNSAFE_componentWillMount() {
    try {
      const todoServicios = await AsyncStorage.getItem('TODOSERVICIOS');
      if (todoServicios !== null) {
        this.setState({
          todoServicios: JSON.parse(todoServicios),
        });
      }
    } catch (error) {
      // Error saving data
    }
  }

  
  _updateTodoServicios = async item => {
    const datePresentServicios = this.state.todoServicios.find(data => {
      if (data.date === item.date) {
        return true;
      }
    });

    if (datePresentServicios) {
      const updatedTodoServicios = this.state.todoServicios.map(data => {
        if (datePresentServicios.date === data.date) {
          data.todoList = [...data.todoList, ...item.todoList];
          return data;
        }
        return data;
      });
      try {
        await AsyncStorage.setItem('TODOSERVICIOS', JSON.stringify(updatedTodoServicios));

        this.setState({
          todoServicios: updatedTodoServicios,
        });
      } catch (error) {
        // Error saving data
      }
    } else {
      const newTodoServicios = [...this.state.todoServicios, item];

      try {
        await AsyncStorage.setItem('TODOSERVICIOS', JSON.stringify(newTodoServicios));
        this.setState({
          todoServicios: newTodoServicios,
        });
      } catch (error) {
        // Error saving data
      }
    }
  };

 
  _deleteTodoServicios = () => {};

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
